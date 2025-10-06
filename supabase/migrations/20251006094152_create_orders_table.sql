/*
  # Create Orders Table

  1. New Tables
    - `orders`
      - `id` (uuid, primary key) - Unique order identifier
      - `name` (text) - Customer full name
      - `email` (text) - Customer email address
      - `phone` (text) - Customer phone number
      - `address` (text) - Delivery address
      - `product` (text) - Product variation selected
      - `quantity` (integer) - Number of items ordered
      - `message` (text, nullable) - Additional notes from customer
      - `status` (text) - Order status (pending, confirmed, shipped, delivered)
      - `created_at` (timestamptz) - Order creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `orders` table
    - Add policy for public to insert orders (for order submissions)
    - Add policy for authenticated users to read all orders (for admin)
    - Add policy for authenticated users to update orders (for admin)

  3. Notes
    - Orders are stored for customer service and fulfillment
    - Public users can only submit orders, not view them
    - Authenticated users (staff) can manage orders
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  product text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit orders"
  ON orders
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
CREATE INDEX IF NOT EXISTS orders_email_idx ON orders(email);
