import React, { useState } from "react";

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
          }

          .reel-frame {
            width: 100%;
            min-height: 30vw;
            background-color: orange;
          }
          .reel-frame ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <div class="reel">
        <div class="reel-frame">
          <ul class="reel-list">
            {images.map((i) => (
              <li>
                <img src={i.url} alt={i.description} />
              </li>
            ))}
          </ul>
        </div>
        <div>{selectedImage.attributionText}</div>
      </div>
    </>
  );
};

export default Reel;
