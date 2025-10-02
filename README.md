# 🎉 Employee Birthday & Anniversary Email Automation  

An automated system built with **Node.js, MongoDB, and Nodemailer** to send personalized **Birthday 🎂** and **Work Anniversary 🎉** greetings to employees via Gmail.  

---

## ✨ Features  

- ✅ **Automated Detection** → Identifies employees celebrating a birthday or work anniversary today by checking MongoDB.  
- ✅ **Personalized Greetings** → Sends customized email messages tailored for each employee’s special day.  
- ✅ **Email Service** → Uses Nodemailer with Gmail SMTP secured by an App Password.  
- ✅ **Data Storage** → MongoDB (via Mongoose) stores and manages employee records.  
- ✅ **Seeder Script** → Prepares sample employee data for quick testing.  
- ✅ **Logging** → Tracks success or failure for every email sent.  
- ✅ **Scheduling Ready** → Easily schedulable with cron jobs for full automation.  

---

## 🛠️ Tech Stack  

| Category       | Technology          | Description |
|----------------|--------------------|-------------|
| Backend        | Node.js            | Primary runtime environment |
| Database       | MongoDB (Mongoose) | Flexible NoSQL database for employee records |
| Email Service  | Nodemailer         | Sends emails via Gmail SMTP |
| Configuration  | dotenv             | Manages environment variables securely |

---

## 📂 Project Structure  

├── anniversaryCheck.js # Main script to check & send emails
├── empData.js # Seeder script to insert sample employees
├── db.js # MongoDB connection & Employee model definition
├── .env # Environment variables (IGNORED by Git)
├── .gitignore # Specifies files to ignore (e.g., node_modules, .env)
└── package.json # Project metadata and dependencies

yaml
Copy code

---

## 🚀 Setup & Installation  

Follow these steps to run the project locally:  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory:

env
Copy code
# Gmail App Password Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# MongoDB Connection URI
MONGO_URI=mongodb://localhost:27017/companyDB
⚠️ Important: Use a Gmail App Password, not your normal Gmail password.
To generate one:

Enable 2-Step Verification in your Google Account.

Go to App Passwords.

Select Mail as the app, and generate a 16-character password.

4️⃣ Seed Sample Data
Run the seeder script to insert initial employee data:

bash
Copy code
node empData.js
5️⃣ Run the Automation Script
Execute the script to send today’s birthday and anniversary emails:

bash
Copy code
node anniversaryCheck.js
6️⃣ Schedule with Cron (Optional)
To run daily at 8:00 AM:

bash
Copy code
0 8 * * * /usr/bin/node /path/to/your/repo/anniversaryCheck.js
📧 Example Email
Type	Example Subject	Example Body
Birthday	🎂 Happy Birthday, Rajesh Kumar!	Dear Rajesh Kumar,
Wishing you a very Happy Birthday!

Best Regards,
Team
Anniversary	🎉 Happy Work Anniversary, Jane Doe!	Dear Jane Doe,
Wishing you a very Happy Work Anniversary!

Best Regards,
Team

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the Repository

Create your Feature Branch → git checkout -b feature/AmazingFeature

Commit Changes → git commit -m 'Add AmazingFeature'

Push to Branch → git push origin feature/AmazingFeature

Open a Pull Request
