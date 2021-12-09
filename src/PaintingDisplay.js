import { useState } from "react";
import "./PaintingDisplay.scss";

export default function PaintingDisplay({ categoryData }) {
  const catergory = categoryData.catergory;
  const title = categoryData.title;
  const paintingImage = categoryData.paintingImage;
  const year = categoryData.year;

  const [showPainting, setShowPainting] = useState(false);
  const [importantHeading, setImportantHeading] = useState("not-important");

  function showHidePainting() {
    setShowPainting(showPainting ? false : true);
    setImportantHeading(
      importantHeading === "not-important" ? "important" : "not-important"
    );
  }

  return (
    <li
      className={`PaintingDisplay ${importantHeading}`}
      onClick={showHidePainting}
    >
      <p className="catergory-title">{catergory}</p>

      <figure className={`${showPainting ? "show" : "hide"}`}>
        <img
          className="responsive painting"
          src={paintingImage}
          alt="Absithe drinker"
        />
        <figcaption className="caption">
          {title}
          <span>, {`${year} year`}</span>
        </figcaption>
        <a className="next" href="#">
          Next ➤
        </a>
      </figure>
    </li>
  );
}
