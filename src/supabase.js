
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ptsmjjqhxtcoqewkznjz.supabase.co'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0c21qanFoeHRjb3Fld2t6bmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMTE1MTYsImV4cCI6MjAyODY4NzUxNn0.2QY8q04W1xGEI42-z1_mQrTbq3HM6HnxOKyXU-0IG3Y"
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

export default supabase;
