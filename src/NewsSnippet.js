import "./NewsSnippet.scss";

export default function NewsSnippet({ title, date }) {
  return (
    <div className="NewsSnippet">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>➤</p>
    </div>
  );
}
