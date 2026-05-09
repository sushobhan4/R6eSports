require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const requiredEnv = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length) {
  throw new Error(
    `Missing required environment variable(s): ${missingEnv.join(", ")}. Add them in Render or your local .env file.`,
  );
}

// Supabase setup:
// 1. Run supabase-schema.sql in your Supabase SQL Editor.
// 2. Put SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Render Environment settings.
// 3. Keep the service role key on the server only. Never place it in frontend code.
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);

module.exports = { supabase };
