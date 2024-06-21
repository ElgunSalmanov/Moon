import { features } from "../../utils/features";
import { products } from "../../utils/products";
import ReactCompareImage from "react-compare-image";
import Product from "../../components/product/Product";
import Features from "../features/Features";
import ultralight from "../../assets/images/ultralight.jpg";
import calendarlight from "../../assets/icon/calendar-light.svg";
import undolight from "../../assets/icon/undo-light.svg";
import shippingfast from "../../assets/icon/shipping-fast-light-icon.svg";
import doublephone from "../../assets/images/doublephone.png";
import mancup from "../../assets/images/man-cup.png";
import capofman from "../../assets/images/cap-of-man.png";
import salatdark from "../../assets/images/salat-dark.png";
import womandark from "../../assets/images/woman-dark.png";
import salatlight from "../../assets/images/salat-light.png";
import womanlight from "../../assets/images/woman-light.png";
import "./shop.scss";

function Shop() {
  return (
    <>
      <section className="product">
        <div className="product-images">
          <img
            className="product-images-image"
            src={ultralight}
            alt="ultra light"
          />
          <span className="product-images-line"></span>
        </div>
        <div className="product-container">
          <h1 className="product-container-title">
            <span className="product-container-title-text">MOON</span>{" "}
            UltraLight
          </h1>
          <p className="product-container-content">
            A new, ultra-portable lighting accessory designed with intuitive
            touch controls that provide customizable brightness and tone,
            allowing you to perfectly capture your beautiful moment.
          </p>
          <p className="product-container-price">$79.99</p>
          <ul className="product-container-list">
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={calendarlight}
                alt="calendar light"
              />
              PRE-ORDER Shipping Dec 2019
            </li>
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={undolight}
                alt="undo light"
              />
              <p>
                Free 30 day{" "}
                <span className="product-container-list-item-text">
                  Returns
                </span>
              </p>
            </li>
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={shippingfast}
                alt="shipping fast"
              />
              <p>
                Fast Worldwide{" "}
                <span className="product-container-list-item-text">
                  Shipping
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="features">
        <div className="features-container">
          {features.map((feature) => (
            <Features key={feature.id} feature={feature} />
          ))}
        </div>
        <img className="features-image" src={doublephone} alt="double phone" />
      </section>
      <section className="difference">
        <h1 className="difference-title">See the Difference</h1>
        <div className="difference-container">
          <ReactCompareImage leftImage={salatdark} rightImage={salatlight} />
          <ReactCompareImage leftImage={capofman} rightImage={mancup} />
          <ReactCompareImage leftImage={womandark} rightImage={womanlight} />
        </div>
      </section>
      <section className="specs">
        <h1 className="specs-title">Technical Specs</h1>
        <div className="specs-container">
          <div className="specs-container-info">
            <div className="specs-container-info-compatibility">
              <h3 className="specs-container-info-compatibility-title">
                Compatibility
              </h3>
              <p className="specs-container-info-compatibility-content">
                Present to fit devices 6mm - 10mm thick Manually adjustable clip
                to fit thinnger of thicker devices
              </p>
            </div>
            <div className="specs-container-info-block">
              <div className="specs-container-info-block-size">
                <h3 className="specs-container-info-size-title">
                  Size & Weight
                </h3>
                <div className="specs-container-info-block-size-contents">
                  <p className="specs-container-info-block-size-contents-content">
                    Height: 1.38 inches (35mm)
                  </p>
                  <p className="specs-container-info-block-size-contents-content">
                    Width: 0.98 inches (25mm)
                  </p>
                  <p className="specs-container-info-block-size-contents-content">
                    Depth: 0.94 inch (24mm)
                  </p>
                  <p className="specs-container-info-block-size-contents-content">
                    Weight: 2.11 ounces (6 grams)
                  </p>
                </div>
              </div>
              <div className="specs-container-info-block-size">
                <h3 className="specs-container-info-block-size-title">
                  Advanced Features
                </h3>
                <div className="specs-container-info-block-size-contents">
                  <p className="specs-container-info-block-size-contents-content">
                    Anti-Flicker Lighting: Smooth Transitions and Continuous
                    Lighting (i.e. videos)
                  </p>
                  <p className="specs-container-info-block-size-contents-content">
                    Smart Power Management: Maintains Performance and Brightness
                    even on Low Battery
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="specs-container-features">
            <div className="specs-container-features-lighting">
              <h3 className="specs-container-features-lighting-title">
                Lighting
              </h3>
              <div className="specs-container-features-lighting-contents">
                <p className="specs-container-features-lighting-contents-content">
                  Preset to fit devices 6mm - 10mm thick
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Tungsten color tone 27ook CCT
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Daylight color tone 5000CCT
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Luminous Flux: 28 Lumens (typical)
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Frosted diffusion lens
                </p>
              </div>
            </div>
            <div className="specs-container-features-lighting">
              <h3 className="specs-container-features-lighting-title">
                Power & Battery
              </h3>
              <div className="specs-container-features-lighting-contents">
                <p className="specs-container-features-lighting-contents-content">
                  Last over 24 hours on normal use (e.g. turn off after use)
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Lasts up to 3.5 hours on continuous (e.g. video mode)
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Fast-charge capable: Up to 60% charge in 30 minutes
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Built-in rechargeable lithium-ion battery
                </p>
                <p className="specs-container-features-lighting-contents-content">
                  Charging via Micro USB to power bank/adapter or computer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="included">
        <h1 className="included-title">What's Included</h1>
        <div className="included-container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
