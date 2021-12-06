import "./ArticleSection.scss";

export default function ArticleSection({ title, sideWriting, content }) {
  return (
    <section className="ArticleSection">
      <h2>{title}</h2>
      <p>{sideWriting}</p>
      <p>{content}</p>
    </section>
  );
}
