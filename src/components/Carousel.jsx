import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Carousel() {
  const newsItems = [
    " ALERT: High rockfall risk predicted in Sector B-12 today",
    " System Update: New prediction algorithm deployed with 95% accuracy",
    " Mine Vision AI wins Industry Innovation Award 2023",
    " Quarterly Report: 37% reduction in incidents since implementation",
  ];

  const images = [
    "https://as1.ftcdn.net/v2/jpg/15/11/82/04/1000_F_1511820404_yb4odCc5yXeXqX7w7dCZMef85AR2y4n7.jpg",
    "https://as2.ftcdn.net/v2/jpg/05/56/44/23/1000_F_556442369_o0bAAu1U6cHGszoLbrDqAuR0IsLapqEf.jpg",
    "https://as1.ftcdn.net/v2/jpg/15/07/10/12/1000_F_1507101211_dfRy5yGnw0Ar68DZxvXzGRK6nv3WjHWE.jpg",
    "https://as2.ftcdn.net/v2/jpg/07/07/09/95/1000_F_707099561_KAl9aeWiFoX9jRKsvMZbC8swvdLIt9Tr.jpg",
    "https://t3.ftcdn.net/jpg/10/10/24/06/240_F_1010240604_qccWV8PwaPThkknxXDf84XUSPhQnmaGd.jpg",
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNewsTicker, setShowNewsTicker] = useState(true);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(newsInterval);
  }, [newsItems.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <main className="w-full h-full mt-[24vh] flex flex-col items-center px-2 gap-[2rem] text-center">
        <div className="w-full max-w-6xl mt-8 mb-12 h-100">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Advanced Monitoring Systems
          </h3>
          <div className="relative w-full h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-[#DAEBA7] to-white border-4 border-white shadow-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
              <img
                 src={image}
                  alt={`Mine monitoring system ${index + 1}`}
                 className="object-cover object-center w-full h-full rounded-xl"
              />

              </div>
            ))}
            <button
              className="absolute p-2 text-white transition-all transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-2 top-1/2 hover:bg-opacity-75"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute p-2 text-white transition-all transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-2 top-1/2 hover:bg-opacity-75"
              onClick={nextImage}
            >
              ›
            </button>
            <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentImageIndex ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            Advanced AI systems monitoring mine stability in real-time
          </p>
        </div>
        {showNewsTicker && (
          <div className="relative w-full max-w-6xl p-3 mt-0 text-white bg-red-600 rounded-t-lg mb-9">
            <div className="flex items-center justify-center">
              <span className="mr-2 font-bold">BREAKING:</span>
              <div className="h-6 overflow-hidden">
                <div
                  className="transition-transform duration-500"
                  style={{
                    transform: `translateY(-${currentNewsIndex * 24}px)`,
                  }}
                >
                  {newsItems.map((item, index) => (
                    <div key={index} className="flex items-center h-6">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="absolute transform -translate-y-1/2 right-3 top-1/2"
              onClick={() => setShowNewsTicker(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default Carousel;
