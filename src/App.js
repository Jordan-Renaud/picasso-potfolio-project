import {
  articles,
  newsSnippets,
  paintings,
  exhibits,
  navigationSections,
} from "./data";
import ArticleSection from "./ArticleSection";
import NewsSnippet from "./NewsSnippet";
import PaintingDisplay from "./PaintingDisplay";
import MuseumCard from "./MuseumCard";
import NavMenu from "./NavMenu";
import Arrow from "./images/Arrow";
import artGallery from "./images/artGallery.png";
import logo from "./images/logo.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a
          className="logo center"
          href="https://www.behance.net/gallery/120867209/Picasso-art-website-redesign?tracking_source=curated_galleries_ui-ux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="responsive" src={logo} />
        </a>

        <div className="flex-container">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Ticket
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Address
          </a>
        </div>

        <a
          className="header-img-link"
          href="https://en.wikipedia.org/wiki/Pablo_Picasso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn11.bigcommerce.com/s-feud0ek893/images/stencil/2048x2048/products/10434/20985/bather-opening-a-cabin-32x22-museum-picasso-paris-france_picasso__77879.1582997341.jpg?c=1"
            alt=""
          />
        </a>

        <div className="flex-container">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Menu
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            En
          </a>
        </div>

        <a
          className="collection center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collection
          <span className="arrow">
            <Arrow />
          </span>
        </a>

        <h1 className="title center">WORLD OF PICASSO</h1>
      </header>

      <main>
        <section className="intro">
          <img
            className="responsive indent-left"
            src="https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/original/5ee91a5b30a72c31408b4567/17ef9f08e9fdeabbeeb1a02bcd78f2ea.jpeg"
            alt="Picasso sitting infront of his works"
          />
          <q className="quote">
            I can draw like Raphael, but I need my whole life to draw like a
            child draws.
          </q>
          <img
            className="responsive indent-right"
            src="https://s.abcnews.com/images/International/pablo-picasso-gty-jef-180219_8x11_992.jpg"
            alt="Picasso in a stripped shirt smoking a cigarette."
          />

          <article className="biography">
            <h2 className="subheading">
              Biography
              <br />
              of Pablo Picasso
            </h2>
            <img
              className="responsive"
              src="https://news.artnet.com/app/news-upload/2015/07/5886813703_01fa96bfc2_b-803x1024.jpg"
              alt="Picasso look intently into the camera."
            />
            <p>
              Is considered to be one of the most famous painters in the
              twentieth century. He was born in Malaga, Spain on October 20,
              1881. In addition to painting, Picasso was also a printmaker,
              ceramicist, stage designer, poet and playwright. He spent most of
              his adult life in France.
            </p>
            <a className="unimportant-link" href="#">
              read all
            </a>
          </article>
        </section>

        <ArticleSection
          title={articles[0].title}
          sideWriting={articles[0].sideWriting}
          content={articles[0].content}
        />
        <section className="news">
          {newsSnippets.map((snippet) => (
            <NewsSnippet title={snippet.title} date={snippet.date} />
          ))}

          <img
            className="responsive"
            src="http://graphics8.nytimes.com/images/2013/06/02/t-magazine/02lookout-picasso/02lookout-picasso-custom1.jpg"
            alt="Picasso standing infront of his studio with artworks displayed."
          />

          <div className="side-writing"></div>
        </section>
        <section className="paintings">
          <h2 className="heading">PAINTINGS ARTIST</h2>

          <ul>
            {paintings.map((painting) => (
              <PaintingDisplay categoryData={painting} />
            ))}
          </ul>
        </section>
        <section className="museum">
          <h2 className="subheading">The Medeu Picasso, Barselona</h2>
          <img
            className="responsive indent-left"
            src={artGallery}
            alt="Art gallery"
          />
          <p className="paragraph">
            Picasso lived, worked and worked in many European cities. Thanks to
            the indefatigable character, enormous capacity for work and natural
            talent of the artist, his work has left a mark in many European
            cities. There are several large museums dedicated to Picasso, but
            the museum in Barcelona is one of the most significant and most
            popular, especially during the season when Barelona hotels are full
            of tourists from all over the world.
          </p>
          <button>
            Virtual
            <div className="arrow">
              <Arrow />
            </div>
          </button>
          <img
            className="responsive indent-right"
            src="https://www.citynomads.com/wp-content/uploads/2017/12/edited-221917.-Picasso-a-Barcelona22-Museu-Picasso-Barcelona.jpg"
            alt="gallery"
          />
          <div className="image-container">
            <img
              className="responsive small-image"
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pablo-picasso-raq-med.jpg"
              alt="Painting of lady sitting in a chair"
            />
            <img
              className="responsive small-image border-left"
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MDlfMTE2/MDAxNTkxNjQ5NDE2OTM5.hoRAwECpqZ7Cr0LPnrPOIOblY_LRcx-x-FoGj5LfWf4g.Sp8ymvQvVYRDFQXAW_NqAEsmg9TAv1x1UNoEBCZ4gW8g.JPEG.nadal_2020wkid/89497b26ba6fc57d58f252d806a5f24f.jpg?type=w800"
              alt="landscape"
            />
          </div>
          <p className="paragraph2">
            In particular, the Museu Picasso reveals Picasso's relationship
            witht the city of Catalonia, a relationship that was shaped in his
            youth and adolescence and continued until his death.
          </p>
        </section>
        <section className="exhibit">
          <h2 className="heading">MUSEUM EXHIBITIONS</h2>
          <div className="swipe-container">
            {exhibits.map((exhibit) => (
              <MuseumCard
                imageSrc={exhibit.imageSrc}
                imageAlt={exhibit.imageAlt}
                museumName={exhibit.museumName}
                location={exhibit.location}
              />
            ))}
            <div className="see-more">
              <Arrow />
            </div>
          </div>
        </section>
        <ArticleSection
          title={articles[1].title}
          sideWriting={articles[1].sideWriting}
          content={articles[1].content}
        />
        <footer>
          <nav>
            {navigationSections.map((section) => (
              <NavMenu title={section.title} categories={section.catergories} />
            ))}
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default App;
