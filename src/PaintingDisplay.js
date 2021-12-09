import { useState } from "react";
import "./PaintingDisplay.scss";

export default function PaintingDisplay({ categoryData }) {
  const catergory = categoryData.catergory;
  const title = categoryData.title;
  const paintingImage = categoryData.paintingImage;
  const year = categoryData.year;

  const [showPainting, setShowPainting] = useState(false);

  function showHidePainting() {
    setShowPainting(showPainting ? false : true);
  }

  return (
    <li
      className={`PaintingDisplay ${showPainting ? "show" : "hide"}`}
      onClick={showHidePainting}
    >
      <h2>{catergory}</h2>
      <figure>
        <img className="responsive" src={paintingImage} alt="Absithe drinker" />
        <figcaption>{title}</figcaption>
        <p>{`${year} year`}</p>
        <a href="#">Next ➤</a>
      </figure>
    </li>
  );
}
