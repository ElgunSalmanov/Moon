import { useRef } from "react";
import { useEffect } from "react";
import ultralight from "../../assets/images/moon-ultralight.png";
import moon from "../../assets/images/moon-main.svg";
import "./main.scss";

function Main() {
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   const handleMove = (event) => {
  //     const image = imageRef.current;
  //     const { clientX, clientY } = event;
  //     const { innerWidth, innerHeight } = window;

  //     const moveX = (clientX / innerWidth) * 20 - 15;
  //     const moveY = (clientY / innerHeight) * 20 - 15;

  //     if (image) {
  //       image.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //       image.style.transition = "0.1s";
  //     }
  //   };

  //   window.addEventListener("mousemove", handleMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMove);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="main">
        <div className="main-container">
          <div className="main-container-contain">
            <img
              className="main-container-contain-background"
              src={main}
              alt="background"
            />
            <img
              className="main-container-contain-ultralight"
              ref={imageRef}
              src={ultralight}
              alt="ultra light"
            />
            <p className="main-container-contain-content">Scroll</p>
          </div>
          <div className="main-container-info">
            <h1>Meet Mobile’s Most Revolutionary Lighting Device</h1>
            <p>
              MOON UltraLight is a new, ultra-portable lighting device designed
              with you in mind. Its intuitive touch controls provide
              customizable brightness and tone, allowing you to perfectly
              capture your special moments.
            </p>
          </div>
        </div>
      </div> */}

      <div className="home">
        <div className="bg"></div>
        <div className="home-inner">
          <div className="main">
            <div className="main-sticky">
              <div className="main-sticky-parent">
                <div className="main-sticky-parent-text">
                  <div className="main-sticky-parent-text-c50">
                    <h1>
                      Meet Mobile’s Most <br /> Revolutionary Lighting Device
                    </h1>
                    <p>
                      MOON UltraLight is a new, ultra-portable lighting device
                      designed with you in mind. Its intuitive touch controls
                      provide customizable brightness and tone, allowing you to
                      perfectly capture your special moments.
                    </p>
                  </div>
                </div>
                <div className="main-sticky-parent-content">
                  <div className="main-sticky-parent-content-images-imgOne">
                    <img src={moon} alt="moon" />
                  </div>
                  <div className="main-sticky-parent-content-images-imgTwo">
                    <img src={ultralight} alt="ultralight" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-2">
            <div className="section-2-container">
              <div className="section-2-container-content">
                <h1>Meet Mobile’s Most Revolutionary Lighting Device</h1>
                <p>
                  MOON UltraLight is a new, ultra-portable lighting device
                  designed with you in mind. Its intuitive touch controls
                  provide customizable brightness and tone, allowing you to
                  perfectly capture your special moments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
