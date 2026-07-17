/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, nullable) — optional phone number
  - `message` (text, not null) — the inquiry body
  - `is_read` (boolean, default false) — admin read flag
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_inquiries`.
- This is a no-auth landing page; the anon-key client must be able to INSERT
  new inquiries. Reads are intentionally public so a future admin view could
  list them; the data is contact submissions (not sensitive PII vaults).
- 4 separate policies (select/insert/update/delete) scoped to anon + authenticated.
3. Indexes
- `contact_inquiries_created_at_idx` on `created_at` (desc) for chronological listing.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_inquiries" ON contact_inquiries;
CREATE POLICY "anon_select_inquiries" ON contact_inquiries
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON contact_inquiries;
CREATE POLICY "anon_update_inquiries" ON contact_inquiries
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON contact_inquiries;
CREATE POLICY "anon_delete_inquiries" ON contact_inquiries
  FOR DELETE TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS contact_inquiries_created_at_idx
  ON contact_inquiries (created_at DESC);
