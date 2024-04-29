import React from "react";
import portfolio_1 from "@/images/mariage (2).jpg";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      {/* banner portfolio */}
      <section className="banner">
        <div className="container">
          <div className="text-container">
            <div className="animated-text">MARIAGES VEDETTES.</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              vel, odio, quae vitae quasi enim sit culpa tempore maiores cumque
              suscipit numquam nisi dolor magnam assumenda nostrum laboriosam
              blanditiis voluptatibus praesentium impedit? Temporibus odit
              aliquid iusto veniam quo alias molestiae.
            </p>
          </div>
        </div>
      </section>
      {/* banner portfolio end*/}

      {/* VEDETTES portfolio */}
      <section className="vedette">
        <div className="container_content">
          <div className="content">
            <div className="img_mariage">
              <div className="mariage colo_1">
                <div className="name">Seleté et Mariam</div>
                <div className="title">Mariage inspiré de la nature</div>
                <div className="image_1">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <h4>Lieu · Jardin des Tuileries</h4>
                <p>Invités· 250</p>
                <div className="image_2">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <div className="barre_portfolio">
                  <div className="vide"></div>
                  <div className="text">
                    <a href="/contact">Voir l&apos;événement</a>
                  </div>
                  <div className="fleche">fleche</div>
                </div>
              </div>
              <div className="mariage colo_2">
                <div className="name">Nadia et David</div>
                <div className="title">Mariage indien traditionnel</div>
                <div className="image_1">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <h4>Lieu · Jardin du Luxembourg</h4>
                <p>Invités· 300</p>
                <div className="image_2">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <div className="barre_portfolio">
                  <div className="vide"></div>
                  <div className="text">
                    <a href="/contact">Voir l&apos;événement</a>
                  </div>
                  <div className="fleche">fleche</div>
                </div>
              </div>
              <div className="mariage colo_3">
                <div className="name">Rose et Marco</div>
                <div className="title">Mariage dans un jardin</div>
                <div className="image_1">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <h4>Lieu · Domaine de Courson</h4>
                <p>Invités· 220</p>
                <div className="image_2">
                  <Image
                    src={portfolio_1}
                    width={1000}
                    height={300}
                    alt="portfolio-img"
                  />
                </div>
                <div className="barre_portfolio">
                  <div className="vide"></div>
                  <div className="text">
                    <a href="/contact">Voir l&apos;événement</a>
                  </div>
                  <div className="fleche">fleche</div>
                </div>
              </div>
            </div>
            <div className="vide_right"></div>
          </div>
        </div>
      </section>

      <section className="vedette_resp">
        <div className="name">Seleté et Mariam</div>
        <div className="container_content">
          <div className="vide_left"></div>
          <div className="grand_vide"></div>
          <div className="mariage">
            <div className="title">Mariage inspiré de la nature</div>
            <div className="image_1">
              {" "}
              <Image
                src={portfolio_1}
                width={1000}
                height={300}
                alt="portfolio-img"
              />
            </div>
            <h4>Lieu · Jardin des Tuileries</h4>
            <p>Invités· 250</p>
          </div>
          <div className="vide_right"></div>
        </div>
        <div className="barre_portfolio">
          <div className="vide"></div>
          <div className="text">
            <a href="/contact">Voir l&apos;événement</a>
          </div>
          <div className="fleche">fleche</div>
        </div>
        <div className="vide_bottom"></div>
      </section>

      <section className="vedette_resp">
        <div className="name  color">Seleté et Mariam</div>
        <div className="container_content">
          <div className="vide_left color"></div>
          <div className="mariage colo_1 color">
            <div className="title">Mariage inspiré de la nature</div>
            <div className="image_1">
              {" "}
              <Image
                src={portfolio_1}
                width={1000}
                height={300}
                alt="portfolio-img"
              />
            </div>
            <h4>Lieu · Jardin des Tuileries</h4>
            <p>Invités· 250</p>
          </div>
          <div className="grand_vide "></div>
          <div className="vide_right color"></div>
        </div>
        <div className="barre_portfolio color">
          <div className="vide"></div>
          <div className="text">
            <a href="/contact">Voir l&apos;événement</a>
          </div>
          <div className="fleche">fleche</div>
        </div>
        <div className="vide_bottom color"></div>
      </section>

      <section className="vedette_resp">
        <div className="name color_1">Seleté et Mariam</div>
        <div className="container_content">
          <div className="vide_left color_1"></div>
          <div className="grand_vide"></div>
          <div className="mariage color_1">
            <div className="title">Mariage inspiré de la nature</div>
            <div className="image_1">
              {" "}
              <Image
                src={portfolio_1}
                width={1000}
                height={300}
                alt="portfolio-img"
              />
            </div>
            <h4>Lieu · Jardin des Tuileries</h4>
            <p>Invités· 250</p>
          </div>
          <div className="vide_right color_1"></div>
        </div>
        <div className="barre_portfolio color_1">
          <div className="vide"></div>
          <div className="text">
            <a href="/contact">Voir l&apos;événement</a>
          </div>
          <div className="fleche">fleche</div>
        </div>
        <div className="vide_bottom color_1"></div>
      </section>
    </>
  );
};

export default Portfolio;
