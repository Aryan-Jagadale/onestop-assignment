

import Image1 from "../assets/companies.svg";
import Image2 from "../assets/jobs.svg";
import Image3 from "../assets/articles.svg";
import Image4 from "../assets/Webinar.svg";
import Image5 from "../assets/forums.svg";
import Image6 from "../assets/applicationnotes.svg";

const images = [
    { src: Image1, alt: "Image 1", text: "Companies" },
    { src: Image2, alt: "Image 2", text: "Jobs" },
    { src: Image3, alt: "Image 3", text: "Articles" },
    { src: Image4, alt: "Image 4", text: "Webinars" },
    { src: Image5, alt: "Image 5", text: "Forums" },
    { src: Image6, alt: "Image 6", text: "Notes" },
  ];
  
  const GridImage = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mx-4 sm:mx-8 lg:mx-[110px] my-[30px]">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center justify-end">
            <img
              src={image.src}
              alt={image.alt}
              className="h-[150px] w-[180px] sm:h-[130px] sm:w-[150px] md:h-[140px] md:w-[160px] lg:h-[150px] lg:w-[180px]"
            />
            <div className="font-montserrat text-[10px] absolute bottom-0 left-0 w-full text-white text-center bg-black bg-opacity-0 pt-1 pb-14 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg">
              {image.text}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default GridImage;
  


