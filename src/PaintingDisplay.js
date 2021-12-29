import Arrow from "./images/Arrow";
import "./PaintingDisplay.scss";

export default function PaintingDisplay({ categoryData, isLastItem }) {
  const catergory = categoryData.catergory;
  const title = categoryData.title;
  const paintingImage = categoryData.paintingImage;
  const year = categoryData.year;

  return (
    <details className={`PaintingDisplay ${isLastItem ? "no-border" : ""}`}>
      <summary className="catergory-title">{catergory}</summary>

      <figure>
        <img
          className="responsive painting"
          src={paintingImage}
          alt={title + " painting"}
        />
        <figcaption className="caption">
          {title},<span> {`${year} year`}</span>
        </figcaption>

        <button className="next">
          <p>Next</p>
          <div className="arrow">
            <Arrow />
          </div>
        </button>
      </figure>
    </details>
  );
}
