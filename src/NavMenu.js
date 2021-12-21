import { useState } from "react";
import "./NavMenu.scss";

export default function NavMenu({ title, categories, isLastItem }) {
  const [menuOnScreen, setMenuOnScreen] = useState(false);

  function updateMenuState() {
    menuOnScreen ? setMenuOnScreen(false) : setMenuOnScreen(true);
  }

  return (
    <div className="NavMenu">
      <h3
        className={`title ${menuOnScreen ? "show" : "hide"}`}
        onClick={updateMenuState}
      >
        {title}
      </h3>
      <div className={`contents ${isLastItem ? "no-border" : ""}`}>
        {categories.map((category) => (
          <li key={category} className={`${menuOnScreen ? "show" : "hide"}`}>
            {category}
          </li>
        ))}
      </div>
    </div>
  );
}
