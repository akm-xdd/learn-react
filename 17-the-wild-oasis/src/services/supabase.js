import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efrrevotsalofrefmeur.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcnJldm90c2Fsb2ZyZWZtZXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5Mjk5MDUsImV4cCI6MjAwNzUwNTkwNX0.X_jWU3zHGXjcLbAxYxiOPQrhSs2RYthwH_s7yIIEl_k"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;