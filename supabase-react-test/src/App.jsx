import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://uzlnqvnuvuybwzbieomy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bG5xdm51dnV5Ynd6Ymllb215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MzMxNDYsImV4cCI6MjAwOTUwOTE0Nn0.oDLQnHOjBF5rSxCHlH1kBfx-bXQW0o6bhyX94GyLwRA");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;