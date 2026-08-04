/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — nom complet du visiteur
  - `email` (text, not null) — email du visiteur
  - `phone` (text, not null) — téléphone du visiteur
  - `appointment_type` (text, not null) — "showroom" ou "domicile"
  - `message` (text, not null) — message décrivant le projet
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT only (any visiteur peut soumettre le formulaire).
- Aucun SELECT/UPDATE/DELETE public — les messages ne sont lisibles que côté serveur (service role key).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  appointment_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);