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
        <span className="black">➤</span>
      </h2>
      <div className="paragraph">{content.map((paragraph) => paragraph)}</div>
    </section>
  );
}
