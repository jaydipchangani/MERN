import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#000", padding: "20px" }}>
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
