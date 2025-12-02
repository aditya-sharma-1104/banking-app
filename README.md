🏦 Banking App

A modern and secure digital banking platform built with Next.js, Appwrite, Plaid, and Dwolla—allowing users to connect bank accounts, transfer money, and track transactions effortlessly.

🚀 Features

✨ Secure Authentication (Appwrite)
🏦 Bank Account Linking (Plaid)
💸 Money Transfers (Dwolla API)
📊 Transaction History & Balances
📱 Fully Responsive UI
⚙️ Modular Components & Clean Folder Structure
📁 Environment-based configuration
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Tech Stack
Frontend
Next.js 14 (App Router)
TypeScript
Tailwind CSS / ShadCN UI
React Hook Form
Zustand

Backend / APIs

Appwrite (Auth + DB)
Plaid API
Dwolla API
Next.js API Routes

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📦 Installation & Setup
1️⃣ Clone Repository

git clone https://github.com/aditya-sharma-1104/banking-app.git
cd banking-app

2️⃣ Install Dependencies
npm install

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
▶️ Run Development Server
npm run dev
🌍 Visit: http://localhost:3000
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📁 Folder Structure
app/                → App Router pages & layouts
components/         → Reusable UI components
lib/                → API actions & utilities
constants/          → Static data
types/              → TypeScript type definitions
public/             → Static assets

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧩 Key Components

PaymentTransferForm.tsx — Money transfer UI
BankDropdown.tsx — Bank selector
RecentTransactions.tsx — Transaction list
BankCard.tsx — Displays bank details
user.actions.ts — User DB actions
bank.actions.ts — Bank management logic
dwolla.actions.ts — Transfer operations

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
⭐ Support

If you found this project useful, please star this repository! ⭐
