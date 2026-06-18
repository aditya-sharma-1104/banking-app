🏦 Banking App

A modern and secure digital banking platform built with Next.js, Appwrite, Plaid, and Dwolla—allowing users to connect bank accounts, transfer money, and track transactions effortlessly.

🚀 Features

✨ Secure Authentication (Appwrite) with middleware route protection
🏦 Bank Account Linking (Plaid)
💸 Money Transfers (Dwolla API)
📊 Transaction History & Balances
📱 Fully Responsive UI
🔒 Protected Routes & Session Management
⚙️ Modular Components & Clean Folder Structure
📁 Environment-based configuration with security best practices
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
```bash
git clone https://github.com/aditya-sharma-1104/banking-app.git
cd banking-app/banking-main
```

2️⃣ Install Dependencies
```bash
npm install
```bash
npm run dev
```
🌍 Visit: http://localhost:3001 (or http://localhost:3000)

**Note:** The app includes authentication middleware that:
- Redirects unauthenticated users to `/sign-in`
- Protects routes: `/my-banks`, `/payment-transfer`, `/transaction-history`
- Automatically redirects authenticated users away from auth pages
3️⃣ Set Up Environment Variables
- Copy `.env.example` to `.env`
- Fill in your credentials:
  - Appwrite API keys
  - Plaid credentials
  - Dwolla API keys

```bash
cp .env.example .env
# Edit .env with your credentials
```

⚠️ **Important Security Note:**
- Never commit `.env` file to GitHub (it's in .gitignore)
- Use `.env.example` as a template for documenting required variables
- Keep all API keys and secrets secure
```
app/                    → App Router pages & layouts
  (auth)/               → Authentication pages (sign-in, sign-up)
  (root)/               → Protected dashboard pages
  api/                  → API routes
components/             → Reusable UI components
lib/                    → API actions & utilities
  actions/              → Server actions
constants/              → Static data
types/                  → TypeScript type definitions
public/                 → Static assets & icons
middleware.ts           → Route protection & authentication
```----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📁 Folder Structure
app/                → App Router pages & layouts
components/         → Reusable UI components
lib/                → API actions & utilities
**Pages & Layouts:**
- `app/(auth)/sign-in` — User login
- `app/(auth)/sign-up` — User registration
- `app/(root)` — Dashboard with protected routes
- `app/(root)/my-banks` — Bank accounts management
- `app/(root)/payment-transfer` — Money transfer
- `app/(root)/transaction-history` — Transaction records

**UI Components:**
- `PaymentTransferForm.tsx` — Money transfer UI
- `BankDropdown.tsx` — Bank selector
- `RecentTransactions.tsx` — Transaction list
- `BankCard.tsx` — Displays bank details
- `AuthForm.tsx` — Login/signup form

**Server Actions:**
- `user.actions.ts` — User authentication & DB operations
- `bank.actions.ts` — Bank account management
- `dwolla.actions.ts` — Transfer operations
- `transaction.actions.ts` — Transaction records

**Security:**
- `middleware.ts` — Route protection & session validation
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
