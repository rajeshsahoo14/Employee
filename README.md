# 🎉 Employee Birthday & Anniversary Email Automation  

 
An automated system built with **Node.js + MongoDB + Nodemailer** that sends personalized **Birthday 🎂** and **Work Anniversary 🎉** greetings to employees via Gmail.  

---

## ✨ Features
- ✅ Automatically detects birthdays & anniversaries from database  
- ✅ Sends personalized greeting emails   
- ✅ Uses **Nodemailer + Gmail App Password**  
- ✅ MongoDB for storing employee records  
- ✅ Seeder script to insert sample employees  
- ✅ Logs success & failure for each email  
- ⏰ Can be scheduled with **cron jobs** for daily automation  

---

## 📂 Project Structure
├── anniversaryCheck.js # Main script to check & send emails
├── empData.js # Seeder script to insert sample employees
├── db.js # MongoDB connection & Employee model
├── .env # Environment variables (ignored in GitHub)
├── .gitignore # Ignore sensitive files & node_modules
├── package.json


---

## 🛠️ Tech Stack
- **Backend:** Node.js  
- **Database:** MongoDB (via Mongoose)  
- **Email Service:** Nodemailer (Gmail SMTP)  
- **Config:** dotenv  

---

## 🚀 Setup & Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2.Install Dependencies

npm install


3.Setup .env

EMAIL_USER=your-email@gmail.com //Here use any of you email
EMAIL_PASS=your-app-password // generate a 16-character App Password from your Google Account by enabling 2-Step Verification, navigating to the App Passwords section, selecting "Mail" as the app, choosing a custom name (like "Nodemailer"), and then using this generated password in your Nodemailer transport configuration, not your regular Gmail password. 
MONGO_URI=mongodb://localhost:27017/companyDB


⚠️ Make sure to use a Gmail App Password (not your normal Gmail password).

4.Seed Sample Data

node empData.js


5.Run Script

node anniversaryCheck.js


📧 Example Email

Subject (Birthday): 🎂 Happy Birthday!
Subject (Anniversary): 🎉 Happy Work Anniversary!

Dear Rajesh Kumar,

Wishing you a very Happy Birthday!

Best Regards,  
Team

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a PR.

📜 License

This project is licensed under the MIT License.
