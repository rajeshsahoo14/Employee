🎉 Employee Birthday & Anniversary Email Automation

This project is a Node.js + MongoDB based automation script that sends personalized Birthday 🎂 and Work Anniversary 🎉 greetings to employees via Gmail (Nodemailer).

📂 Project Structure
.
├── anniversaryCheck.js   # Main script to check & send emails
├── empData.js            # Seeder script to insert sample employees
├── db.js                 # MongoDB connection & Employee model
├── .env                  # Environment variables (not uploaded to GitHub)
├── .gitignore            # Ignored files (node_modules, .env, etc.)
├── package.json

⚙️ Features

✅ Automatically checks today’s date against employee records.

✅ Sends Birthday Emails 🎂.

✅ Sends Work Anniversary Emails 🎉.

✅ Uses Gmail + Nodemailer with secure App Password.

✅ MongoDB for employee data storage.

✅ Seeder script to insert sample employees.

✅ Logs success or failure for each email.

🛠️ Tech Stack

Node.js (backend runtime)

Express.js (optional, if extended to API)

MongoDB + Mongoose (database)

Nodemailer (email service)

dotenv (environment config)

🚀 Setup & Installation

Clone Repo

git clone https://github.com/your-username/your-repo.git
cd your-repo


Install Dependencies

npm install


Setup .env
Create a .env file in root:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
MONGO_URI=mongodb://localhost:27017/companyDB


⚠️ Use a Gmail App Password, not your real Gmail password.

Seed Sample Data

node empData.js


Run Script

node anniversaryCheck.js

⏰ Optional: Run Daily with Cron

You can automate this script using node-cron:

const cron = require("node-cron");
cron.schedule("0 9 * * *", () => {
  sendEmails(); // Runs every day at 9 AM
});

📧 Email Preview

Subject (Birthday): 🎂 Happy Birthday!

Subject (Anniversary): 🎉 Happy Work Anniversary!

Example:

Dear Rajesh Kumar,

Wishing you a very Happy Birthday!

Best Regards,
Team

🤝 Contributing

Feel free to fork and improve this project. PRs are welcome!

📜 License

This project is licensed under the MIT License.
