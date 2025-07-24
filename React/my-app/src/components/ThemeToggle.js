import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

    const[like,setLike] = useState(false)
  return (
    <div style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#000", padding: "20px" }}>
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>

      <button onClick={() => setLike(!like) } style={ {background: like ? "#333" : "#fff"} }> Like the Page</button>
    </div>
  );
}

export default ThemeToggle;
