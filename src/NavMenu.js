import "./NavMenu.scss";

export default function NavMenu({ title, categories }) {
  return (
    <div className="NavMenu">
      <h3>{title}</h3>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
}
