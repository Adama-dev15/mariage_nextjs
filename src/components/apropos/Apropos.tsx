import Image from "next/image";
import React from "react";
import apropos_1 from "@/images/Flowers_About_Page_02.webp";
import apropos_2 from "@/images/apropos_img.webp";
import swiper_1 from "@/images/wedding-1836315_640.jpg";
import swiper_2 from "@/images/Wedding_Planners.webp";
import swiper_3 from "@/images/Flowers_About_Page_02.webp";
import swiper_4 from "@/images/beach-1854076_640.jpg";
import swiper_5 from "@/images/Indian_Wedding_03.webp";
import swiper_6 from "@/images/Flowers_About_Page_02.webp";
import swiper_7 from "@/images/ev_long (2).jpg";
import swiper_8 from "@/images/Flowers_About_Page_02.webp";
import swiper_9 from "@/images/ev_court (1).jpg";

const Apropos = () => {
  return (
    <>
      {" "}
      {/* banner a propos */}
      <section className="banner">
        <div className="container">
          <div className="text-container">
            <div className="animated-text">NOUS SOMMES HAMED ET ASSANA.</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              vel, odio, quae vitae quasi enim sit culpa tempore maiores cumque
              suscipit numquam nisi dolor magnam assumenda nostrum laboriosam
              blanditiis.
            </p>
          </div>
        </div>
      </section>
      {/* banner a propos end*/}
      {/* a propos */}
      <section className="apropos">
        <div className="apropos_container">
          <div className="title">À propos</div>
          <div className="apropos_content">
            <div className="vide_1"></div>
            <div className="text">
              <p className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus veritatis soluta ab nesciunt provident, optio totam
                eaque aliquid error veniam laudantium maiores repellendus
                exercitationem sit, dolore pariatur beatae earum eos! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                veritatis. Tempora adipisci dicta quae modi.
              </p>
              <p className="content bott">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus veritatis soluta ab nesciunt provident, optio totam
                eaque aliquid error veniam laudantium maiores repellendus
                exercitationem sit, dolore pariatur beatae earum eos! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                veritatis. Tempora adipisci dicta quae modi.
              </p>
            </div>
            <div className="image">
              <div className="position">
                <Image
                  src={apropos_1}
                  width={1000}
                  height={300}
                  alt="apropos-img"
                />
              </div>
              <div className="img_2 mt-16 md:mt-0">
                <Image
                  src={apropos_2}
                  width={1000}
                  height={300}
                  alt="apropos-img"
                />
              </div>
            </div>
            <div className="vide_2"></div>
          </div>
        </div>
      </section>
      {/* a propos end*/}
      {/* notre aproche */}
      <section className="aproche">
        <div className="aproche_container">
          <div className="vide"></div>
          <div className="title">Notre approche</div>
          <div className="text">
            <div className="content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veritatis soluta ab nesciunt provident, optio totam
              eaque aliquid error veniam laudantium maiores repellendus
              exercitationem sit, dolore pariatur beatae earum eos! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maiores, veritatis.
              Tempora adipisci dicta quae modi.
            </div>
            <div className="content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veritatis soluta ab nesciunt provident, optio totam
              eaque aliquid error veniam laudantium maiores repellendus
              exercitationem sit, dolore pariatur beatae earum eos! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maiores, veritatis.
              Tempora adipisci dicta quae modi.
            </div>
          </div>
          <div className="sliderImage">
            {/* Swiper  */}
            {/* <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_1}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_2}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_3}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_4}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_5}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_6}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_7}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_8}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
                <div className="swiper-slide">
                  {" "}
                  <Image
                    src={swiper_9}
                    width={1000}
                    height={300}
                    alt="apropos-img"
                  />
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div> */}
          </div>
          <div className="vide bottom"></div>
        </div>
      </section>
      {/* notre aproche end*/}
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

export default Apropos;
