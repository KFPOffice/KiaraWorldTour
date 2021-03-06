import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { mod } from "../../util.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export interface Image {
  url: string; // Url for loading the image.
  description: string; // Description/alt text for the image.
  attributionText: string; // Person who is attributed for the image.
  attributionUrl?: string; // (Optional) Link to the source of the image. (e.g. twitter)
}

interface Props {
  images: Image[];
}

const Reel = ({ images }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const selectedImage = images[index];

  return (
    <>
      <style>
        {`
          .reel {
            --translationY: var(--l-spacing);
            --translationX: calc(-1 * var(--translationY));

            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: var(--x-spacing);
            margin-right: calc(-1 * var(--translationX));
          }

          .reel-wrapper {
      
            border: 2px solid var(--kiara-blue);
            border-radius: var(--x-border-radius);

            transform: translate(calc(-1 * var(--translationX)), calc(-1 * var(--translationY)));
          }

          .reel-wrapper > * {
            transform: translate(var(--translationX), var(--translationY));
            border-radius: var(--x-border-radius);
            overflow: hidden;
          }


          .reel-image {
            max-width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .reel-image-primary {
            max-height: 500px;
            object-fit: contain;
          }

          .reel-image-secondary {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(20px) brightness(0.7);
            object-fit: cover !important;
            opacity: 0.8;
          }

          .image-label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: var(--m-spacing);
          }

          .image-description {
            color: var(--white);
            font-size: var(--size-h2);
            text-align: center;
          }

          .image-attribution {
            color: var(--light-white);
            font-size: var(--size-small);
            text-decoration: none;
          }
          .image-attribution:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="reel">
        <div className="reel-wrapper">
          <Carousel
            showThumbs={false}
            showStatus={false}
            emulateTouch
            infiniteLoop
            onChange={(index) => setIndex(index)}
            autoPlay
            interval={8000}
          >
            {images.map((i) => (
              <div className="reel-image">
                <img
                  className="reel-image-secondary"
                  src={i.url}
                  alt={i.description}
                />
                <img
                  className="reel-image-primary"
                  src={i.url}
                  alt={i.description}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="image-label">
          <div className="image-description">{selectedImage.description}</div>
          <a className="image-attribution" href={selectedImage.attributionUrl}>
            {selectedImage.attributionText}
          </a>
        </div>
      </div>
    </>
  );
};
{
}

export default Reel;
