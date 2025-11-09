import React, { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    const M = window.M;
    const $ = window.$;

    if ($ && M) {
      const carousel = $(".open-carousel");
      carousel.carousel();

      $(".open-carousel-prev").click(() => {
        carousel.carousel("prev");
      });

      $(".open-carousel-next").click(() => {
        carousel.carousel("next");
      });

      // Blur & opacity effect
      carousel.on("click", ".open-carousel-control-next, .open-carousel-control-prev", function () {
        setTimeout(() => {
          const activeIndex = carousel.find(".open-carousel-item.active").index();
          carousel.find(".open-carousel-item").css({
            opacity: 0.7,
            filter: "blur(3px)",
          });
          carousel.find(".open-carousel-item").eq(activeIndex).css({
            opacity: 1,
            filter: "blur(0)",
          });
        }, 100);
      });
    }
  }, []);

  return (
    <div className="open-carousel-wrapper">
      <div className="open-carousel">
        <a className="open-carousel-item" href="#open-one!">
          <div className="open-card blue">
            <div className="open-img-area">
              <img src="https://imgur.com/HVSYQIG.png" alt="HTML" />
            </div>
            <div className="open-card-content white-text">
              <h3>HTML</h3>
            </div>
          </div>
        </a>

        <a className="open-carousel-item" href="#open-two!">
          <div className="open-card blue">
            <div className="open-img-area">
              <img src="https://i.imgur.com/9D3IKqD.png" alt="CSS" />
            </div>
            <div className="open-card-content white-text">
              <h3>CSS</h3>
            </div>
          </div>
        </a>

        <a className="open-carousel-item" href="#open-three!">
          <div className="open-card blue">
            <div className="open-img-area">
              <img src="https://i.imgur.com/rfVXWIs.jpg" alt="JavaScript" />
            </div>
            <div className="open-card-content white-text">
              <h3>JavaScript</h3>
            </div>
          </div>
        </a>

        <a className="open-carousel-item" href="#open-four!">
          <div className="open-card blue">
            <div className="open-img-area">
              <img src="https://i.imgur.com/vTB4EZs.jpg" alt="Python" />
            </div>
            <div className="open-card-content white-text">
              <h3>Python</h3>
            </div>
          </div>
        </a>

        <a className="open-carousel-item" href="#open-five!">
          <div className="open-card blue">
            <div className="open-img-area">
              <img src="https://i.imgur.com/SIbMu4R.png" alt="MySQL" />
            </div>
            <div className="open-card-content white-text">
              <h3>MySQL</h3>
            </div>
          </div>
        </a>
      </div>

      <div className="open-carousel-buttons">
        <button className="open-carousel-prev">❮</button>
        <button className="open-carousel-next">❯</button>
      </div>
    </div>
  );
}
