import "./NewsSnippet.scss";
import Arrow from "./images/Arrow";

export default function NewsSnippet({ title, date, isLastItem }) {
  return (
    <div className={`NewsSnippet ${isLastItem ? "no-border" : ""}`}>
      <p className="title">{title}</p>
      <div className="flex-container">
        <p className="greyed">{date}</p>
        <div className="arrow-container">
          <Arrow />
        </div>
      </div>
    </div>
  );
}
