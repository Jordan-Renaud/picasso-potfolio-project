import creation from "./images/creation.png";
import muses from "./images/muses.png";

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
