import "./ArticleSection.scss";

export default function ArticleSection({ title, sideWriting, content }) {
  return (
    <section className="ArticleSection">
      <div className="side-writing-container">
        <p className="side-writing">{sideWriting}</p>
      </div>
      <h2 className="subheading">
        {title}
        <span className="black">➤</span>
      </h2>
      <p className="paragraph">{content.map((paragraph) => paragraph)}</p>
    </section>
  );
}
