import React from "react";

const Contact = () => {
  return (
    <>
      {/* banner contact */}
      <section className="banner">
        <div className="container">
          <div className="text-container">
            <div className="animated-text">NOUS AIMERIONS VOUS VOIR !</div>
            <div className="contact">
              <div className="content"> E-mail · traoadamakoleba@gmail.com</div>
              <div className="content"> Téléphone · 05 85 58 98 12</div>
            </div>
          </div>
        </div>
      </section>

      {/* form contact */}
      <div className="contact_form">
        <div className="container_contact">
          <div className="title">Nous contacter</div>
          <div className="formulaire">
            <div className="vide_1"></div>
            <form action="">
              <div className="left">
                <div className="block">
                  <label htmlFor="nom">Prénom *</label>
                  <input type="text" id="nom" />
                </div>

                <div className="block">
                  <label htmlFor="famille">Nom de famille *</label>
                  <input type="text" id="famille" />
                </div>

                <div className="block">
                  <label htmlFor="email">E-mail*</label>
                  <input type="text" id="email" />
                </div>

                <div className="block">
                  <label htmlFor="partenaire">
                    Nom complet du partenaire *
                  </label>
                  <input type="text" id="partenaire" />
                </div>

                <div className="block">
                  <label htmlFor="demande">Type de demande *</label>
                  <select name="#" id="demande">
                    <option value="1">consultation</option>
                    <option value="2">planification de mariage</option>
                    <option value="3">planification dévénement</option>
                  </select>
                </div>
              </div>

              <div className="right">
                <div className="block">
                  <label htmlFor="montant">
                    Montant prévu pour les invités*
                  </label>
                  <input
                    type="number"
                    id="montant"
                    placeholder="saisissez un montont"
                  />
                </div>

                <div className="block">
                  <label htmlFor="tête">Qu&apos;aviez-vous en tête ?</label>
                  <input
                    type="text"
                    id="tête"
                    placeholder="veuillez partager quelque détail sur ce que vous cherchez..."
                  />
                </div>

                <div className="block">
                  <label htmlFor="Parlez">Parlez-nous un peu de vous</label>
                  <input
                    type="text"
                    id="Parlez"
                    placeholder="comment vous vous rencontrés"
                  />
                </div>

                <div className="block">
                  <label htmlFor="découvert">
                    Comment nous avez-vous découvert·e·s ?
                  </label>
                  <select name="#" id="découvert">
                    <option value="f">Média sociaux</option>
                    <option value="r">Recommendation d&apos;un·e ami·e </option>
                    <option value="i">Autre</option>
                  </select>
                </div>
                <div className="submit">
                  <input type="submit" value="Envoyer" />
                </div>
              </div>
            </form>
            <div className="vide_2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
