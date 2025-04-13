/*
  # Initial Schema Setup for UAE Expense Tracker

  1. New Tables
    - `banks` - Stores bank information
    - `accounts` - Stores bank account information
    - `transactions` - Stores parsed transaction data
    - `categories` - Stores spending categories
    - `budgets` - Stores monthly budgets
    - `sms_logs` - Stores raw SMS data

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create banks table
CREATE TABLE IF NOT EXISTS banks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create accounts table
CREATE TABLE IF NOT EXISTS accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  bank_id uuid REFERENCES banks NOT NULL,
  account_number text NOT NULL,
  account_type text NOT NULL,
  card_last_four text,
  current_balance numeric(12,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, bank_id, account_number)
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  icon text NOT NULL,
  color text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  account_id uuid REFERENCES accounts NOT NULL,
  category_id uuid REFERENCES categories,
  type text NOT NULL CHECK (type IN ('debit', 'credit')),
  amount numeric(12,2) NOT NULL,
  currency text NOT NULL DEFAULT 'AED',
  description text NOT NULL,
  merchant_name text,
  transaction_date timestamptz NOT NULL,
  balance_after numeric(12,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create budgets table
CREATE TABLE IF NOT EXISTS budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  category_id uuid REFERENCES categories,
  amount numeric(12,2) NOT NULL,
  month date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, category_id, month)
);

-- Create sms_logs table
CREATE TABLE IF NOT EXISTS sms_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  bank_id uuid REFERENCES banks NOT NULL,
  raw_message text NOT NULL,
  processed boolean DEFAULT false,
  transaction_id uuid REFERENCES transactions,
  received_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE banks ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE sms_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view all banks" ON banks
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can view their accounts" ON accounts
  FOR ALL TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can view all categories" ON categories
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can manage their transactions" ON transactions
  FOR ALL TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their budgets" ON budgets
  FOR ALL TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their SMS logs" ON sms_logs
  FOR ALL TO authenticated USING (auth.uid() = user_id);

-- Insert default categories
INSERT INTO categories (name, icon, color) VALUES
  ('Bills/Utilities', 'receipt', '#8B4513'),
  ('Shopping', 'shopping-bag', '#FF69B4'),
  ('Grocery', 'shopping-cart', '#4169E1'),
  ('Travel', 'plane', '#FFD700'),
  ('Dining', 'utensils', '#FF6347'),
  ('Entertainment', 'film', '#9370DB'),
  ('Health', 'heart', '#20B2AA'),
  ('Transport', 'car', '#FF7F50'),
  ('Others', 'circle', '#808080');

-- Insert ENBD bank
INSERT INTO banks (name, code) VALUES ('Emirates NBD', 'ENBD');