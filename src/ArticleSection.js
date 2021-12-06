import "./ArticleSection.scss";

export default function ArticleSection({ title, sideWriting, content }) {
  return (
    <section className="ArticleSection">
      <p className="side-writing">{sideWriting}</p>
      <h2 className="subheading">
        {title}
        <span>➤</span>
      </h2>
      <p className="paragraph">{content}</p>
    </section>
  );
}
