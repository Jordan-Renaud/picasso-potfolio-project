import "./NewsSnippet.scss";

export default function NewsSnippet({ title, date }) {
  return (
    <div className="NewsSnippet">
      <p className="title">{title}</p>
      <div className="flex-container">
        <p className="greyed">{date}</p>
        <p>➤</p>
      </div>
    </div>
  );
}
