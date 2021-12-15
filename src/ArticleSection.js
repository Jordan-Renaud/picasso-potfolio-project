import Arrow from "./images/Arrow";
import "./ArticleSection.scss";

export default function ArticleSection({ title, sideWriting, content }) {
  return (
    <section className="ArticleSection">
      <div
        className="side-writing"
        style={{ backgroundImage: `url(${sideWriting})` }}
      ></div>
      <h2 className="subheading">
        {title}
        <span className="black">
          <Arrow />
        </span>
      </h2>
      <div className="paragraph">
        {content.map((paragraph, index) => (
          <div className="inline" key={index}>
            {paragraph}
          </div>
        ))}
      </div>
    </section>
  );
}
