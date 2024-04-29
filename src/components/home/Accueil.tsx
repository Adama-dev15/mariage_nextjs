"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image_ma from "@/images/mariage (2).jpg";
import image_ma_2 from "@/images/flowers-1854075_640.jpg";
import image_ma_3 from "@/images/wedding-1846114_640.jpg";
import image_ma_4 from "@/images/Wedding_Planners.webp";

{
  /* evenement */
}
import event_1 from "@/images/ev_long (1).jpg";
import event_2 from "@/images/ev_court (1).jpg";
import event_3 from "@/images/ev_court (2).jpg";
import event_4 from "@/images/ev_long (2).jpg";
import event_5 from "@/images/ev_long (3).jpg";
import event_6 from "@/images/ev_court (3).jpg";
{
  /* evenement end*/
}
// temoignage
import temoignage_1 from "@/images/Wedding_Planners.webp";
import temoignage_2 from "@/images/Wedding_Planners.webp";
import temoignage_3 from "@/images/Wedding_Planners.webp";
// temoignage end

const Accueil = () => {
  // temoignage
  // État pour l'index du slide actuel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tableau des témoignages
  const slides = [temoignage_1, temoignage_2, temoignage_3];
  const slideCount = slides.length;

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  // Effet pour changer automatiquement de slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [slideCount]);
  // temoignage end

  return (
    <>
      {/* banner */}
      <section className="banner">
        <div className="container">
          <div className="text-container">
            <div className="animated-text">
              <h2 className="">MARIAGES PLANIFIÉS À LA PERFECTION.</h2>
            </div>
          </div>
        </div>
      </section>
      {/* banner end*/}

      {/* barre */}
      <section className="barre">
        <div className="vide"></div>
        <div className="text">
          <a href="/contact">Commencez</a>
        </div>
        <div className="fleche">fleche</div>
      </section>
      {/* barre end*/}

      {/* image et text */}
      <section className="miniabout">
        <div className="container">
          <div className="miniabout_content">
            <div className="image">
              <Image src={image_ma} width={1000} height={300} alt="image" />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              facilis vitae distinctio labore iure reprehenderit praesentium
              iusto laboriosam consequatur eligendi, tenetur nulla aut quisquam
              officiis nemo! Quidem id omnis voluptatibus quas assumenda fugit
              est culpa quos ducimus quae fuga delectus accusantium explicabo
              nemo rem aliquid expedita, aspernatur officiis possimus corporis.
            </div>
          </div>
        </div>
        <div className="image_two">
          <Image src={image_ma_2} width={1000} height={300} alt="image" />
        </div>
      </section>
      {/* image et text end*/}

      {/* focaliser */}
      <section className="focaliser">
        <div className="focaliser_content">
          <div className="text">
            Focalisez-vous sur le grand jour, nous nous concentrons sur vous.
          </div>
          <div className="image">
            <Image src={image_ma_3} width={1000} height={300} alt="image" />
          </div>
        </div>
      </section>
      {/* focaliser end*/}

      {/* about me */}
      <section className="about">
        <div className="vide"></div>
        <div className="about_content">
          <div className="tetle">Nous sommes Annie et Sarah</div>
          <p className="paragraph">
            Paragraphe. Vous pouvez le modifier et ajouter votre texte.
            Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
            votre contenu et personnaliser la police. Utilisez cet espace pour
            raconter une histoire et vous présenter à vos visiteurs. Vous pouvez
            le faire glisser-déposer où vous le souhaitez sur la page.
          </p>
          <p>
            C&apos;est l&apos;espace idéal pour rédiger un long texte.
            Utilisez-le pour donner plus d&apos;informations sur votre
            entreprise. Vous pouvez présenter votre équipe et les services que
            vous proposez. Vous pouvez également expliquer à vos visiteurs vos
            motivations, votre histoire, vos objectifs, et mettre en avant vos
            avantages par rapport à vos concurrents. Démarquez-vous et captivez
            l&apos;attention de vos visiteurs.
          </p>
          <div className="image">
            <Image src={image_ma_4} width={1000} height={300} alt="image" />
          </div>
        </div>
      </section>
      {/* about me end*/}

      {/* barre_2 */}
      <section className="barre_two">
        <div className="text">
          <a href="/apropos">En savoir plus</a>
        </div>
        <div className="fleche">fleche</div>
        <div className="vide"></div>
      </section>
      {/* barre_2 end*/}

      {/* expertise */}
      <section className="expertise">
        <div className="container_expertise">
          <div className="expertise_inner">
            <div className="title">Notre expertise</div>
            <div className="expertise_content">
              <div className="expertise left">
                <a href="#">PLANIFICATION</a>
              </div>
              <div className="expertise center">
                <a href="#">DESIGN D&apos;ÉVÉNEMENT</a>
              </div>
              <div className="expertise right">
                <a href="#">LOGISTIQUE SUR SITE</a>
              </div>
            </div>
            <div className="barre_expertise">
              <div className="vide"></div>
              <div className="text">
                <a href="/contact">En savoir plus</a>
              </div>
              <div className="fleche">fleche</div>
            </div>
          </div>
        </div>
      </section>
      {/* expertise end*/}

      {/* evenement */}
      <section className="evenement">
        <div className="container">
          <div className="evenement_inner">
            <div className="title">Événements récents</div>
            <div className="images">
              <div className="ev_img flex flex-col gap-5">
                <Image src={event_1} width={1000} height={300} alt="image" />
                <Image src={event_2} width={1000} height={300} alt="image" />
              </div>
              <div className="ev_img flex flex-col gap-5">
                <Image src={event_3} width={1000} height={300} alt="image" />
                <Image src={event_4} width={1000} height={300} alt="image" />
              </div>
              <div className="ev_img flex flex-col gap-5 ev_img_3">
                <Image src={event_5} width={1000} height={300} alt="image" />
                <Image src={event_6} width={1000} height={300} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* evenement end*/}

      {/* barre */}
      <section className="barre_three">
        <div className="vide"></div>
        <div className="text">
          <a href="/contact">Notre Portfolio</a>
        </div>
        <div className="fleche">fleche</div>
      </section>
      {/* barre end*/}

      {/* temoignage */}

      <section className="temoignage">
        <div className="container_temoignage">
          <div className="temoignage_inner">
            <div className="title">
              <p>Lettres d&apos;amour de nos heureux couples</p>
            </div>
            <div className="card_temoignage">
              <div className="slider-container">
                <div
                  className="slider"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                      <Image
                        src={slide}
                        width={1000}
                        height={300}
                        alt={`temoignage_${index}`}
                      />
                      {/* Votre contenu de témoignage */}
                      <p>
                        {index === 0 &&
                          "« Témoignage. Cliquez pour le modifier et ajouter un texte qui valorise vos services et votre activité. »"}
                        {index === 1 &&
                          "« Témoignage. Cliquez pour le modifier et ajouter un texte qui met en valeur vos services et votre activité. Laissez vos clients exprimer tout le bien qu'ils pensent de vous. »"}
                        {index === 2 &&
                          "« Témoignage. Cliquez pour le modifier et ajouter un texte qui valorise vos services et votre activité. »"}
                      </p>
                      {/* Votre contenu de nom et date */}
                      <h4>
                        {index === 0 && "Emma et Nicolas · 2023"}
                        {index === 1 && "Marie et Armand · 2023"}
                        {index === 2 && "Abigaël et Richard · 2023"}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* temoignage end*/}

      {/* PLANIFIER */}
      <section className="planifier">
        <div className="container_planifier">
          <div className="title">COMMENÇONS À PLANIFIER</div>
          <div className="barre_three">
            <div className="vide"></div>
            <div className="text">
              <a href="/contact">Nous Contacter</a>
            </div>
            <div className="fleche">fleche</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accueil;
