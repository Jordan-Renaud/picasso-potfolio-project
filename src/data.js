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
    paintingLink: selfPortrait,
    year: "1896",
  },
  {
    catergory: '"BLUE" PERIOD',
    title: "Absinthe Drinker",
    paintingLink: absintheDrinker,
    year: "1901",
  },
  {
    catergory: '"PINK" PERIOD',
    title: "Acrobat and Young Harlequin",
    paintingLink: acrobatAndYoungHarlequin,
    year: "1905",
  },
  {
    catergory: '"AFRICAN" PERIOD',
    title: "The Young Ladies of Avignon",
    paintingLink: theYoungLadiesOfAvignon,
    year: "1907",
  },
  {
    catergory: "CUBISM",
    title: "Girl with a Mandolin",
    paintingLink: girlWithAMandolin,
    year: "1910",
  },
  {
    catergory: '"CLASSIC" PERIOD',
    title: "Three Women at the Spring",
    paintingLink: threeWomenAtTheSpring,
    year: "1921",
  },
  {
    catergory: "SURREALISM",
    title: "The Weeping Woman",
    paintingLink: theWeepingWoman,
    year: "1937",
  },
  {
    catergory: "WAR IN SPAIN. GUERNICA",
    title: "Guernica",
    paintingLink: guernica,
    year: "1937",
  },
  {
    catergory: "LATE WORKS",
    title: "Self Portrait",
    paintingLink: selfPortraitLateWorks,
    year: "1971",
  },
];
