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
          PICASSO<span>ART</span>
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
          Collection ➤
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

        <section>
          <div>creation</div>
          <h2>
            Creation <span>➤</span>
          </h2>
          <p>
            The creative biography of Pablo Picasso is truly extreme. Marc
            Chagall once said that Picasso changes style more often than socks.
            In each subsequent period, it is so different that it seems as if it
            was written by different people.
            <q>Everyone has the right to change, even artists,</q>
            Picasso himself joked about this. And although he went down in the
            history of world art as the creator of cubism, cubism as such was
            only one of the periods of his work and took only one decade. And he
            worked for over 70 years! And this is not counting the decades of
            the early period of his apprenticeship at home, in Spain, when he
            was just looking for himself.
          </p>
        </section>
        <section>
          <nav>
            <a href="#">
              Picasso's painting sold at auction for almost $103.5 million
            </a>
            <p>14/05/21</p>
            <a href="#">➤</a>
            <a href="#">
              Analysts predicted a record rise in the value of the painting by
              Picasso
            </a>
            <p>29/04/21</p>
            <a href="#">➤</a>
            <a href="#">
              Two portraits by Picasso sold at auction for $33.5 million
            </a>
            <p>24/03/21</p>
            <a href="#">➤</a>
            <a href="#">Picasso's golden plate</a>
            <p>27/03/21</p>
            <a href="#">➤</a>
            <a href="#">Another news article</a>
            <p>27/03/21</p>
            <a href="#">➤</a>
          </nav>

          <img
            className="make-it-small"
            src="http://graphics8.nytimes.com/images/2013/06/02/t-magazine/02lookout-picasso/02lookout-picasso-custom1.jpg"
            alt="Picasso standing infront of his studio with artworks displayed."
          />

          <p>NEWS</p>
        </section>
        <section>
          <h2>PAINTINGS ARTIST</h2>
          <ul>
            <li>EARLY WORK</li>
            <li>"BLUE" PERIOD</li>
            <figure>
              <img
                className="make-it-small"
                src="https://www.hermitagemuseum.org/wps/wcm/connect/645f02d4-3652-4ee3-bea9-81b004b26f23/WOA_IMAGE_1.jpg?MOD=AJPERES&867b6225-12ae-4a40-92e4-e373026a669f"
                alt="Absithe drinker"
              />
              <figcaption>Absinthe drinker</figcaption>
              <p>1901 year</p>
              <a href="#">Next ➤</a>
            </figure>
            <li>"PINK" PERIOD</li>
            <li>"AFRICAN" PERIOD</li>
            <li>CUBISM</li>
            <li>"classNameIC" PERIOD</li>
            <li>SURREALISM</li>
            <li>WAR IN SPAIN. GUERNICA</li>
            <li>LATE WORKS</li>
          </ul>
        </section>
        <section>
          <h2>The Medeu Picasso, Barselona</h2>
          <img
            className="make-it-small"
            src="https://www.tripendy.com/sites/default/files/gallery/unnamed_205.jpg"
            alt="Art gallery"
          />
          <p>
            Picasso lived, worked and worked in many European cities. Thanks to
            the indefatigable character, enormous capacity for work and natural
            talent of the artist, his work has left a mark in many European
            cities. There are several large museums dedicated to Picasso, but
            the museum in Barcelona is one of the most significant and most
            popular, especially during the season when Barelona hotels are full
            of tourists from all over the world.
          </p>
          <button>Virtual ➤</button>
          <img
            className="make-it-small"
            src="https://www.citynomads.com/wp-content/uploads/2017/12/edited-221917.-Picasso-a-Barcelona22-Museu-Picasso-Barcelona.jpg"
            alt="gallery"
          />
          <img
            className="make-it-small"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pablo-picasso-raq-med.jpg"
            alt="Painting of lady sitting in a chair"
          />
          <img
            className="make-it-small"
            src="https://www.pablopicasso.org/images/paintings/mediterranean-landscape.jpg"
            alt="landscape"
          />
          <p>
            In particular, the Museu Picasso reveals Picasso's relationship
            witht the city of Catalonia, a relationship that was shaped in his
            youth and adolescence and continued until his death.
          </p>
        </section>
        <section>
          <h2>MUSEUM EXHIBITIONS</h2>
          <figure>
            <img
              className="make-it-small"
              src="https://www.pkua.fr/wp-content/uploads/2018/06/musee-national-picasso-inside-arch-e1560619314866.jpg"
              alt="Arch framing a painting of Picasso's"
            />
            <figcaption>
              MUSEE NATIONAL PICASSO <span>FRANCE, PARIS</span>
            </figcaption>
          </figure>
          <figure>
            <img
              className="make-it-small"
              src="https://www.moma.org/d/c/installation_images/W1siZiIsIjM2MTg5NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDE1MzZ4MTUzNlx1MDAzZSJdXQ.jpg?sha=cc9741c417a51126"
              alt="Doorway framing a painting of Picasso's"
            />
            <figcaption>
              MOMA <span>USA, NEW YORK</span>
            </figcaption>
          </figure>
          <figure>
            <img
              className="make-it-small"
              src="https://images.myguide-cdn.com/moscow/companies/pushkin-museum-of-fine-arts/large/pushkin-museum-of-fine-arts-126123.jpg"
              alt="Looking into a gallery"
            />
            <figcaption>
              THE PUSHKIN MUSEUM <span>RUSSIA, MOSCOW</span>
            </figcaption>
          </figure>
          <figure>
            <img
              className="make-it-small"
              src="http://4.bp.blogspot.com/-aB0P87NNOKE/TlZD0nEUnQI/AAAAAAAABsY/-zrKNLEgXaI/s1600/Interior+del+Museo+Picasso+en+Ma%25CC%2581laga+I.jpg"
              alt="A gallery with people walking around"
            />
            <figcaption>
              MUSEO PICASSO <span>SPAIN, MALAGA</span>
            </figcaption>
          </figure>
          <div>➤</div>
        </section>
        <section>
          <p>MUSES</p>
          <h2>Muses of Picasso ➤</h2>
          <p>
            Unlike those who remained "outside the frame",
            <strong>these seven women</strong> were fortunate enough to take
            part not only in Picasso's personal life. Fascinated by the servants
            of the rite of art, they ascended to the sacrificial podium,
            completely surrendering to their high priest, Each of them, embodied
            on canvases, marks a certain period or periods of the artist's
            career.
          </p>
        </section>
        <footer>
          <nav>
            <a href="#">Contact us</a>
            <a href="#">Pablo Picasso</a>
            <a href="#">Periodisation</a>
            <a href="#">Picasso Museums</a>
            <a href="#">Other</a>
            <div></div>
            <ul>
              <li>Biography</li>
              <li>Childhood and years of study</li>
              <li>Personal life</li>
              <li>Awards</li>
              <li>Image in culture</li>
            </ul>
            <ul>
              <li>Early period</li>
              <li>"Blue" period</li>
              <li>"Pink" period</li>
              <li>"African" period</li>
              <li>Cubism</li>
              <li>"classNameic" period</li>
              <li>Surrealism</li>
              <li>War. Guernica</li>
              <li>Late works</li>
            </ul>
            <ul>
              <li>The Museo Picasso, Barselona</li>
              <li>Museo Reina Sofia, Madrid</li>
              <li>Museo Picasso, Malaga</li>
              <li>Moma, New York</li>
              <li>Musee National Picasso, Paris</li>
              <li>The Pushkin Museum, Moskow</li>
              <li>Hermitage, Saint Petersburg</li>
              <li>Museo Picasso, Cairo</li>
              <li>...</li>
            </ul>
            <ul>
              <li>Photo</li>
              <li>Video</li>
              <li>Exhibitions</li>
              <li>Books</li>
              <li>Quote</li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default App;
