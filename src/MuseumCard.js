import "./MuseumCard.scss";

export default function MuseumCard({
  imageSrc,
  imageAlt,
  museumName,
  location,
}) {
  return (
    <figure>
      <img src={imageSrc} alt={imageAlt} />
      <figcaption>
        <p>{museumName}</p>
        <p>{location}</p>
      </figcaption>
    </figure>
  );
}
