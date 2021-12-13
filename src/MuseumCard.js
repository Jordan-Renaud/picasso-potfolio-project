import "./MuseumCard.scss";

export default function MuseumCard({
  imageSrc,
  imageAlt,
  museumName,
  location,
}) {
  return (
    <figure className="MuseumCard">
      <img src={imageSrc} alt={imageAlt} />
      <figcaption>
        <p>{museumName}</p>
        <p className="unimportant-link">{location}</p>
      </figcaption>
    </figure>
  );
}
