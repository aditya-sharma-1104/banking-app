📌 Banking App

A modern full-stack digital banking application built with Next.js, Appwrite, Plaid, and Dwolla, allowing users to manage accounts, transfer money, connect banks, and view transactions securely and efficiently.

This project is based on the tutorial by Adrian Hajdin (JS Mastery), with customization and improvements.

🚀 Features

✔ Secure user authentication (Appwrite)
✔ Connect real bank accounts using Plaid
✔ Transfer money with Dwolla API
✔ View account balances & transaction history
✔ Modern, responsive UI
✔ Clean folder structure
✔ Environment-based configuration
✔ Reusable components & API actions

🛠️ Tech Stack
Frontend

Next.js 14 (App Router)

TypeScript

Tailwind CSS

ShadCN UI

React Hook Form

Zustand

Backend / APIs

Appwrite (Database + Auth)

Plaid (Bank account linking)

Dwolla (Money transfers)

Next.js API Routes

📦 Installation & Setup
1️⃣ Prerequisites

Make sure these are installed:

Git

Node.js

npm

2️⃣ Clone the repository
git clone https://github.com/aditya-sharma-1104/banking-app.git
cd banking-app

3️⃣ Install dependencies
npm install

4️⃣ Setup Environment Variables

Create a .env file in the root of your project:

# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox


🔒 Do not share your .env file or commit it to GitHub.

5️⃣ Run the development server
npm run dev


Now open:

👉 http://localhost:3000

📁 Project Structure
app/
 ├─ (auth)/
 ├─ (root)/
components/
lib/
public/
types/
constants/

🧩 Important Files

.env.example – example environment config

user.actions.ts – user database actions

bank.actions.ts – bank integration logic

dwolla.actions.ts – money transfers

PaymentTransferForm.tsx – sending money UI

BankDropdown.tsx – bank selector

Pagination.tsx – table pagination

🖼️ Screenshots (Add your own)

You can add screenshots like this:

![App Screenshot](./public/screenshot.png)

🔗 Assets

Assets used in the project:
https://drive.google.com/drive/folders/1XWdXXX
 (Replace with your actual link)

🙏 Credits

This project is inspired by the tutorial created by Adrian Hajdin (JS Mastery).
All rights for original design and structure belong to the creator.

⭐ Support

If you like the project, consider giving the GitHub repository a star ⭐.

✔️ Want me to add screenshots, badges, or deployment steps (Vercel)?

Just tell me — I can enhance this README even more!

You said:
remove credit 
ChatGPT said:

Got it! Here's the updated README.md with NO credit section — completely clean, professional, and suitable for your personal project.

📌 Banking App

A modern full-stack digital banking application built with Next.js, Appwrite, Plaid, and Dwolla, allowing users to manage accounts, transfer money, connect banks, and view transactions securely and efficiently.

🚀 Features

✔ Secure user authentication (Appwrite)
✔ Connect real bank accounts using Plaid
✔ Transfer money using Dwolla
✔ View account balances & transaction history
✔ Modern & responsive UI
✔ Component-driven architecture
✔ Clean folder structure
✔ Environment-based configuration

🛠️ Tech Stack
Frontend

Next.js 14 (App Router)

TypeScript

Tailwind CSS

ShadCN UI

React Hook Form

Zustand

Backend / APIs

Appwrite (Authentication + Database)

Plaid (Bank account linking)

Dwolla (Money transfer)

Next.js API Routes

📦 Installation & Setup
1️⃣ Prerequisites

Make sure these are installed:

Git

Node.js

npm

2️⃣ Clone the repository
git clone https://github.com/aditya-sharma-1104/banking-app.git
cd banking-app

3️⃣ Install dependencies
npm install

4️⃣ Setup Environment Variables

Create a .env file in the root directory and add:

# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox


🔒 Do NOT commit your .env file to GitHub — it contains sensitive credentials.

5️⃣ Run development server
npm run dev


Now open:

👉 http://localhost:3000

📁 Project Structure
app/
 ├─ (auth)/
 ├─ (root)/
components/
lib/
public/
types/
constants/

🧩 Key Files

.env.example

user.actions.ts

bank.actions.ts

dwolla.actions.ts

transaction.actions.ts

BankDropdown.tsx

PaymentTransferForm.tsx

Pagination.tsx


⭐ Support

If you find this project helpful, consider starring the repository ⭐
