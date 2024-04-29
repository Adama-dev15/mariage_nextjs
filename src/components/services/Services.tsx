import React from "react";

const Services = () => {
  return (
    <>
      {/* banner service */}
      <section className="banner">
        <div className="container">
          <div className="text-container">
            <div className="animated-text">CE QUE NOUS OFFRONS.</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              vel, odio, quae vitae quasi enim sit culpa tempore maiores cumque
              suscipit numquam nisi dolor magnam assumenda nostrum laboriosam
              blanditiis.
            </p>
          </div>
        </div>
      </section>

      {/* banner service end*/}

      {/* nos services */}
      <section className="services">
        <div className="container_service">
          <div className="title_service">Notre expertise</div>
          <div className="service_content">
            <div className="service border">
              <p className="title">Planification d&apos;événements</p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre propre
                texte. Double-cliquez ici ou cliquez sur « Modifier le texte »
                pour ajouter votre contenu et personnaliser la police.
                C&apos;est l&apos;espace idéal pour raconter une histoire et
                vous présenter à vos visiteurs.
              </p>
            </div>
            <div className="service">
              <p className="title">Design d&apos;événement</p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre propre
                texte. Double-cliquez ici ou cliquez sur « Modifier le texte »
                pour ajouter votre contenu et personnaliser la police.
                C&apos;est l&apos;espace idéal pour raconter une histoire et
                vous présenter à vos visiteurs.
              </p>
            </div>
            <div className="service bottom">
              <p className="title">Logistique sur site</p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre propre
                texte. Double-cliquez ici ou cliquez sur « Modifier le texte »
                pour ajouter votre contenu et personnaliser la police.
                C&apos;est l&apos;espace idéal pour raconter une histoire et
                vous présenter à vos visiteurs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* nos services end*/}

      {/* nos services */}
      <section className="services ">
        <div className="container_service border_bottom">
          <div className="title_service">Forfaits</div>
          <div className="service_content">
            <div className="service border">
              <p className="title">
                Planification complète : Laissez-nous faire
              </p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre texte.
                Double-cliquez ici ou cliquez sur « Modifier le texte » pour
                ajouter votre contenu et personnaliser la police.
              </p>
              <h4>À partir de 1 000 €</h4>
            </div>
            <div className="service">
              <p className="title">
                Planification à la carte : Nous travaillerons ensemble
              </p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre texte.
                Double-cliquez ici ou cliquez sur « Modifier le texte » pour
                ajouter votre contenu et personnaliser la police.
              </p>
              <h4>À partir de 500 €</h4>
            </div>
            <div className="service bottom">
              <p className="title">
                Événement personnalisé : À la mesure de vos rêves
              </p>
              <p className="text">
                Paragraphe. Vous pouvez le modifier et ajouter votre texte.
                Double-cliquez ici ou cliquez sur « Modifier le texte » pour
                ajouter votre contenu et personnaliser la police.
              </p>
              <h4>À partir de 1 500 €</h4>
            </div>
          </div>
        </div>
      </section>
      {/* nos services end*/}

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
      {/* PLANIFIER end*/}
    </>
  );
};

export default Services;
