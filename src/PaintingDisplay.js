import "./PaintingDisplay.scss";

export default function PaintingDisplay({ isDisplayed, painting, title }) {
  return (
    <figure>
      <img
        className="responsive"
        src="https://www.hermitagemuseum.org/wps/wcm/connect/645f02d4-3652-4ee3-bea9-81b004b26f23/WOA_IMAGE_1.jpg?MOD=AJPERES&867b6225-12ae-4a40-92e4-e373026a669f"
        alt="Absithe drinker"
      />
      <figcaption>Absinthe drinker</figcaption>
      <p>1901 year</p>
      <a href="#">Next ➤</a>
    </figure>
  );
}
