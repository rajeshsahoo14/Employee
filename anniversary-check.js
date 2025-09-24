require("dotenv").config();

const Employee = require("./db");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmails() {
  const today = new Date();
  const day = today.getDate();
 
  const month = today.getMonth() + 1; 

  const anniversaryEmployees = await Employee.find({
    $expr: {
      $and: [
        { $eq: [{ $dayOfMonth: "$anniversary_date" }, day] },
        { $eq: [{ $month: "$anniversary_date" }, month] }
      ]
    }
  });

  for (let emp of anniversaryEmployees) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emp.email,
      subject: "🎉 Happy Work Anniversary!",
      text: `Dear ${emp.name},\n\nWishing you a very Happy Work Anniversary!\n\nBest Regards,\nTeam`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Sent anniversary email to ${emp.name} (${emp.email})`);
    } catch (err) {
      console.error(`❌ Failed to send anniversary email to ${emp.name}:`, err);
    }
  }

  const birthdayEmployees = await Employee.find({
    $expr: {
      $and: [
        { $eq: [{ $dayOfMonth: "$dob" }, day] },
        { $eq: [{ $month: "$dob" }, month] }
      ]
    }
  });

  for (let emp of birthdayEmployees) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emp.email,
      subject: "🎂 Happy Birthday!",
      text: `Dear ${emp.name},\n\nWishing you a very Happy Birthday!\n\nBest Regards,\nTeam`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Sent birthday email to ${emp.name} (${emp.email})`);
    } catch (err) {
      console.error(`❌ Failed to send birthday email to ${emp.name}:`, err);
    }
  }
}

sendEmails();