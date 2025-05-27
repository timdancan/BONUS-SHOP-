# Cosmoswin & Betfinal Bonus Shop Monorepo

This monorepo contains two Next.js applications:

- **Cosmoswin**: A modern and playful look with purple and cyan colors, rounded corners, and a futuristic font.
- **Betfinal**: A classic, minimal design with black and gold colors, sharp corners, and strong RTL support for Arabic.

Both apps include:

- ✅ **Login** by username
- ✅ **Deposit** simulation
- ✅ **Bonus Shop** with eligibility filtering
- ✅ **i18n**: English and Arabic support
- ✅ **KYC** logic differences (Cosmoswin requires KYC, Betfinal does not)

---

## 🚀 How to Install and Run the Apps

1. **Install dependencies** in the root:
   ```bash
   pnpm install
    ```
2. **Start the dev server** (for all apps):
   ```bash
   pnpm dev
   ```
3. By default, the apps are available at:
    - **Cosmoswin**: [http://localhost:3000](http://localhost:3000)
    - **Betfinal**: [http://localhost:3001](http://localhost:3001)

---

## 🌐 Switching Between English and Arabic

Each app has a language toggle button (usually in the header).  
Click it to switch between **English (LTR)** and **Arabic (RTL)** layouts.  
The interface and text will update instantly.

---

## 📝 How to Add New Bonuses or Users

The data for users and bonuses is stored in **mock data JSON files**:

- **Bonuses**:  
  `packages/shared/data/bonuses-mock-data.json`

- **Users**:  
  `packages/shared/data/user-mock-data.json`

To add a new bonus or user:

1. Open the corresponding JSON file.
2. Add a new object with the required fields (check existing entries for structure).
3. Save the file. The app will automatically load the new data on refresh!

---

## 💰 How the Deposit Feature Works

1. After logging in, navigate to the **Deposit** page (or click the "Make a Deposit" button).
2. Enter a deposit amount in the numeric field.
3. Click **Deposit**:
    - Your **deposit count** increases by 1.
    - Your **current balance** updates by the entered amount.
4. You’ll be redirected to the **Bonus Shop**, where your eligible bonuses will update dynamically based on your new deposit count and balance.

---

## ⚡️ Summary

- ✅ **Monorepo** with shared components and logic
- ✅ **Distinct UIs** for each brand
- ✅ **Localized (EN/AR)** with dynamic layout switching
- ✅ **Fully functional deposit and bonus logic** based on mock data