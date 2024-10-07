import image1 from "../../assets/D_NQ_778301-MLA79753403297_102024-OO.webp";
import image2 from "../../assets/D_NQ_732245-MLA76247333205_052024-OO.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
];
export const ImageGaleria = () => {
  return (
    <div>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        autoPlay={true}
        slideInterval={6000}
        showBullets={true}
        slideDuration={2000}
      />
    </div>
  );
};
