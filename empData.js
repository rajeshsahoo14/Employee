const Employee = require("./db");

async function seedData() {
  try {
    
    await Employee.deleteMany({});

    
    await Employee.insertMany([
      {
        emp_no: 101,
        name: "Rajesh Kumar",
        dob: new Date("1995-03-15"),
        anniversary_date: new Date("2020-09-19"), 
        email: "sahoor859@gmail.com",
        phone: "9876543210"
      },
      {
        emp_no: 102,
        name: "Anita Sharma",
        dob: new Date("1992-07-25"),
        anniversary_date: new Date("2018-11-10"),
        email: "anita.sharma@example.com",
        phone: "9123456780"
      },
      {
        emp_no: 103,
        name: "Vikram Singh",
        dob: new Date("1990-01-05"),
        anniversary_date: new Date("2015-06-12"),
        email: "vikram.singh@example.com",
        phone: "9812345678"
      },
      {
        emp_no: 104,
        name: "Neha Verma",
        dob: new Date("1998-09-10"),
        anniversary_date: new Date("2022-03-08"),
        email: "neha.verma@example.com",
        phone: "9988776655"
      },
      {
        emp_no: 105,
        name: "Arjun Mehta",
        dob: new Date("1993-12-02"),
        anniversary_date: new Date("2019-01-15"),
        email: "arjun.mehta@example.com",
        phone: "9090909090"
      }
    ]);

    console.log("🎉 Employees inserted successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

seedData();
