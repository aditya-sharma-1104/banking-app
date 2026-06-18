"use server";

import {
  ACHClass,
  CountryCode,
  TransferAuthorizationCreateRequest,
  TransferCreateRequest,
  TransferNetwork,
  TransferType,
} from "plaid";

import { plaidClient } from "../plaid";
import { parseStringify } from "../utils";

import { getTransactionsByBankId } from "./transaction.actions";
import { getBanks, getBank } from "./user.actions";

// Get multiple bank accounts
export const getAccounts = async ({ userId }: getAccountsProps) => {
  try {
    if (userId === "mock-user-123") {
      const mockAccounts = [
        {
          id: "mock-acc-1",
          availableBalance: 485050.00,
          currentBalance: 523012.00,
          institutionId: "ins_sbi",
          name: "SBI Savings",
          officialName: "State Bank of India Savings Account",
          mask: "4321",
          type: "depository",
          subtype: "savings",
          appwriteItemId: "mock-bank-1",
          shareableId: "mock-share-1",
        },
        {
          id: "mock-acc-2",
          availableBalance: 1250000.00,
          currentBalance: 1250000.00,
          institutionId: "ins_hdfc",
          name: "HDFC Bank",
          officialName: "HDFC Bank Savings Account",
          mask: "8765",
          type: "depository",
          subtype: "savings",
          appwriteItemId: "mock-bank-2",
          shareableId: "mock-share-2",
        }
      ];
      return parseStringify({ data: mockAccounts, totalBanks: mockAccounts.length, totalCurrentBalance: 1773012.00 });
    }

    // get banks from db
    const banks = await getBanks({ userId });

    const accounts = await Promise.all(
      banks?.map(async (bank: Bank) => {
        // get each account info from plaid
        const accountsResponse = await plaidClient.accountsGet({
          access_token: bank.accessToken,
        });
        const accountData = accountsResponse.data.accounts[0];

        // get institution info from plaid
        const institution = await getInstitution({
          institutionId: accountsResponse.data.item.institution_id!,
        });

        const account = {
          id: accountData.account_id,
          availableBalance: accountData.balances.available!,
          currentBalance: accountData.balances.current!,
          institutionId: institution.institution_id,
          name: accountData.name,
          officialName: accountData.official_name,
          mask: accountData.mask!,
          type: accountData.type as string,
          subtype: accountData.subtype! as string,
          appwriteItemId: bank.$id,
          shareableId: bank.shareableId,
        };

        return account;
      })
    );

    const totalBanks = accounts.length;
    const totalCurrentBalance = accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// Get one bank account
export const getAccount = async ({ appwriteItemId }: getAccountProps) => {
  try {
    if (appwriteItemId === "mock-bank-1" || appwriteItemId === "mock-bank-2" || !appwriteItemId) {
      const isSBI = appwriteItemId !== "mock-bank-2";
      const account = isSBI ? {
        id: "mock-acc-1",
        availableBalance: 485050.00,
        currentBalance: 523012.00,
        institutionId: "ins_sbi",
        name: "SBI Savings",
        officialName: "State Bank of India Savings Account",
        mask: "4321",
        type: "depository",
        subtype: "savings",
        appwriteItemId: "mock-bank-1",
        shareableId: "mock-share-1",
      } : {
        id: "mock-acc-2",
        availableBalance: 1250000.00,
        currentBalance: 1250000.00,
        institutionId: "ins_hdfc",
        name: "HDFC Bank",
        officialName: "HDFC Bank Savings Account",
        mask: "8765",
        type: "depository",
        subtype: "savings",
        appwriteItemId: "mock-bank-2",
        shareableId: "mock-share-2",
      };

      const mockTransactions = [
        {
          id: "tx-1",
          $id: "tx-1",
          name: "Zomato Order",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 549.00,
          pending: false,
          category: "Food and Drink",
          date: "2026-06-15",
          image: "",
          $createdAt: "2026-06-15T10:00:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-2",
          $id: "tx-2",
          name: "Jio Recharge",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 299.00,
          pending: false,
          category: "Payment",
          date: "2026-06-14",
          image: "",
          $createdAt: "2026-06-14T08:30:00.000Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-3",
          $id: "tx-3",
          name: "Salary Credit",
          paymentChannel: "other",
          type: "credit",
          accountId: account.id,
          amount: 75000.00,
          pending: false,
          category: "Transfer",
          date: "2026-06-01",
          image: "",
          $createdAt: "2026-06-01T09:00:00Z",
          channel: "other",
          senderBankId: "",
          receiverBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
        },
        {
          id: "tx-4",
          $id: "tx-4",
          name: "Ola Cabs",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 345.00,
          pending: false,
          category: "Travel",
          date: "2026-06-13",
          image: "",
          $createdAt: "2026-06-13T18:45:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-5",
          $id: "tx-5",
          name: "Flipkart Purchase",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 2199.00,
          pending: false,
          category: "Payment",
          date: "2026-06-12",
          image: "",
          $createdAt: "2026-06-12T14:20:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-6",
          $id: "tx-6",
          name: "Swiggy Instamart",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 412.00,
          pending: false,
          category: "Food and Drink",
          date: "2026-06-11",
          image: "",
          $createdAt: "2026-06-11T20:10:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-7",
          $id: "tx-7",
          name: "Airtel Broadband",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 999.00,
          pending: false,
          category: "Payment",
          date: "2026-06-10",
          image: "",
          $createdAt: "2026-06-10T11:00:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        },
        {
          id: "tx-8",
          $id: "tx-8",
          name: "Amazon India",
          paymentChannel: "online",
          type: "debit",
          accountId: account.id,
          amount: 3499.00,
          pending: false,
          category: "Payment",
          date: "2026-06-09",
          image: "",
          $createdAt: "2026-06-09T16:30:00Z",
          channel: "online",
          senderBankId: isSBI ? "mock-bank-1" : "mock-bank-2",
          receiverBankId: "",
        }
      ];

      return parseStringify({
        data: account,
        transactions: mockTransactions,
      });
    }

    // get bank from db
    const bank = await getBank({ documentId: appwriteItemId });

    // get account info from plaid
    const accountsResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });
    const accountData = accountsResponse.data.accounts[0];

    // get transfer transactions from appwrite
    const transferTransactionsData = await getTransactionsByBankId({
      bankId: bank.$id,
    });

    const transferTransactions = transferTransactionsData.documents.map(
      (transferData: Transaction) => ({
        id: transferData.$id,
        name: transferData.name!,
        amount: transferData.amount!,
        date: transferData.$createdAt,
        paymentChannel: transferData.channel,
        category: transferData.category,
        type: transferData.senderBankId === bank.$id ? "debit" : "credit",
      })
    );

    // get institution info from plaid
    const institution = await getInstitution({
      institutionId: accountsResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank?.accessToken,
    });

    const account = {
      id: accountData.account_id,
      availableBalance: accountData.balances.available!,
      currentBalance: accountData.balances.current!,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      appwriteItemId: bank.$id,
      shareableId: bank.shareableId,
    };

    // sort transactions by date such that the most recent transaction is first
      const allTransactions = [...transactions, ...transferTransactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error("An error occurred while getting the account:", error);
  }
};

// Get bank info
export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    const intitution = institutionResponse.data.institution;

    return parseStringify(intitution);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// Get transactions
export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let transactions: any = [];

  try {
    // Iterate through each page of new transaction updates for item
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
      });

      const data = response.data;

      transactions = response.data.added.map((transaction) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : "",
        date: transaction.date,
        image: transaction.logo_url,
      }));

      hasMore = data.has_more;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};