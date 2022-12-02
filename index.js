require('dotenv-vault-core').config()
console.log(process.env) // for debugging purposes. remove when ready

// Import Supabase Client
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.URL
const supabaseKey = process.env.KEY
const supabase = createClient(supabaseUrl, supabaseKey)
console.log(supabase); // displays general supabase instance information
console.log(supabaseUrl) // displays supabase client url
console.log(supabaseKey.slice(0,15)) // displays supabase client access
