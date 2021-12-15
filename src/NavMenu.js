import { useState } from "react";
import "./NavMenu.scss";

export default function NavMenu({ title, categories }) {
  const [menuOnScreen, setMenuOnScreen] = useState(false);

  function updateMenuState() {
    menuOnScreen ? setMenuOnScreen(false) : setMenuOnScreen(true);
  }

  return (
    <details className="NavMenu">
      <summary
        className={`title ${menuOnScreen ? "show" : "hide"}`}
        onClick={updateMenuState}
      >
        {title}
      </summary>

      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </details>
  );
}
