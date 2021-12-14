import creation from "./images/creation.png";
import muses from "./images/muses.png";

import selfPortrait from "./images/paintings/selfPortrait.jpg";
import absintheDrinker from "./images/paintings/absintheDrinker.jpg";
import acrobatAndYoungHarlequin from "./images/paintings/acrobatAndYoungHarlequin.jpg";
import theYoungLadiesOfAvignon from "./images/paintings/theYoungLadiesOfAvignon.jpg";
import girlWithAMandolin from "./images/paintings/girlWithAMandolin.jpg";
import threeWomenAtTheSpring from "./images/paintings/threeWomenAtTheSpring.jpg";
import theWeepingWoman from "./images/paintings/theWeepingWoman.jpg";
import guernica from "./images/paintings/guernica.jpg";
import selfPortraitLateWorks from "./images/paintings/selfPortraitLateWorks.jpg";

export const articles = [
  {
    title: "Creation",
    sideWriting: creation,
    content: [
      <p>
        The creative biography of Pablo Picasso is truly extreme. Marc Chagall
        once said that Picasso changes style more often than socks. In each
        subsequent period, it is so different that it seems as if it was written
        by different people.
      </p>,
      <q>Everyone has the right to change, even artists.</q>,
      <p>
        Picasso himself joked about this. And although he went down in the
        history of world art as the creator of cubism, cubism as such was only
        one of the periods of his work and took only one decade. And he worked
        for over 70 years! And this is not counting the decades of the early
        period of his apprenticeship at home, in Spain, when he was just looking
        for himself.
      </p>,
    ],
  },
  {
    title: "Muses of Picasso",
    sideWriting: muses,
    content: [
      <p className="inline">Unlike those who remained "outside the frame",</p>,
      <strong className="inline"> these seven women </strong>,
      <p className="inline">
        were fortunate enough to take part not only in Picasso's personal life.
        Fascinated by the servants of the rite of art, they ascended to the
        sacrificial podium, completely surrendering to their high priest, Each
        of them, embodied on canvases, marks a certain period or periods of the
        artist's career.
      </p>,
    ],
  },
];

export const newsSnippets = [
  {
    title: "Picasso's painting sold at auction for almost $103.5 million",
    date: "14/05/21",
  },
  {
    title:
      "Analysts predicted a record rise in the value of the painting by Picasso",
    date: "29/04/21",
  },
  {
    title: "Two portraits by Picasso sold at auction for $33.5 million",
    date: "24/03/21",
  },
  { title: "Picasso's golden plate", date: "27/03/21" },
  { title: "Another news article", date: "27/03/21" },
];

export const paintings = [
  {
    catergory: "EARLY WORK",
    title: "Self-Portrait",
    paintingImage: selfPortrait,
    year: "1896",
  },
  {
    catergory: '"BLUE" PERIOD',
    title: "Absinthe Drinker",
    paintingImage: absintheDrinker,
    year: "1901",
  },
  {
    catergory: '"PINK" PERIOD',
    title: "Acrobat and Young Harlequin",
    paintingImage: acrobatAndYoungHarlequin,
    year: "1905",
  },
  {
    catergory: '"AFRICAN" PERIOD',
    title: "The Young Ladies of Avignon",
    paintingImage: theYoungLadiesOfAvignon,
    year: "1907",
  },
  {
    catergory: "CUBISM",
    title: "Girl with a Mandolin",
    paintingImage: girlWithAMandolin,
    year: "1910",
  },
  {
    catergory: '"CLASSIC" PERIOD',
    title: "Three Women at the Spring",
    paintingImage: threeWomenAtTheSpring,
    year: "1921",
  },
  {
    catergory: "SURREALISM",
    title: "The Weeping Woman",
    paintingImage: theWeepingWoman,
    year: "1937",
  },
  {
    catergory: "WAR IN SPAIN. GUERNICA",
    title: "Guernica",
    paintingImage: guernica,
    year: "1937",
  },
  {
    catergory: "LATE WORKS",
    title: "Self Portrait",
    paintingImage: selfPortraitLateWorks,
    year: "1971",
  },
];

export const exhibits = [
  {
    imageSrc:
      "https://www.pkua.fr/wp-content/uploads/2018/06/musee-national-picasso-inside-arch-e1560619314866.jpg",
    imageAlt: "Arch framing a painting of Picasso's",
    museumName: "MUSEE NATIONAL PICASSO",
    location: "FRANCE, PARIS",
  },
  {
    imageSrc:
      "https://www.moma.org/d/c/installation_images/W1siZiIsIjM2MTg5NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDE1MzZ4MTUzNlx1MDAzZSJdXQ.jpg?sha=cc9741c417a51126",
    imageAlt: "Doorway framing a painting of Picasso's",
    museumName: "MOMA",
    location: "USA, NEW YORK",
  },
  {
    imageSrc:
      "https://images.myguide-cdn.com/moscow/companies/pushkin-museum-of-fine-arts/large/pushkin-museum-of-fine-arts-126123.jpg",
    imageAlt: "Looking into a gallery",
    museumName: "THE PUSHKIN MUSEUM",
    location: "RUSSIA, MOSCOW",
  },
  {
    imageSrc:
      "http://4.bp.blogspot.com/-aB0P87NNOKE/TlZD0nEUnQI/AAAAAAAABsY/-zrKNLEgXaI/s1600/Interior+del+Museo+Picasso+en+Ma%25CC%2581laga+I.jpg",
    imageAlt: "A gallery with people walking around",
    museumName: "MUSEO PICASSO",
    location: "SPAIN, MALAGA",
  },
];

export const navigationSections = [
  { title: "Contact us", catergories: [] },
  {
    title: "Pablo Picasso",
    catergories: [
      "Biography",
      "Childhood and years of study",
      "Personal life",
      "Awards",
      "Image in culture",
    ],
  },
  {
    title: "Periodisation",
    catergories: [
      "Early period",
      '"Blue" period',
      '"Pink" period',
      '"African" period',
      "Cubism",
      '"classNameic" period',
      "Surrealism",
      "War. Guernica",
      "Late works",
    ],
  },
  {
    title: "Picasso Museums",
    catergories: [
      "The Museo Picasso, Barselona",
      "Museo Reina Sofia, Madrid",
      "Museo Picasso, Malaga",
      "Moma, New York",
      "Musee National Picasso, Paris",
      "The Pushkin Museum, Moskow",
      "Hermitage, Saint Petersburg",
      "Museo Picasso, Cairo",
      "...",
    ],
  },
  {
    title: "Other",
    catergories: ["Photo", "Video", "Exhibitions", "Books", "Quote"],
  },
];
