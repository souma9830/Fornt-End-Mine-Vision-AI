// // import { motion } from "framer-motion";
// // import { fadeInUp } from "../utils/animations";
// // import { FaArrowRight, FaTimes } from "react-icons/fa";
// // import { useState, useEffect } from "react";

// // const Hero = () => {
// //   const newsItems = [
// //     " ALERT: High rockfall risk predicted in Sector B-12 today",
// //     " System Update: New prediction algorithm deployed with 95% accuracy",
// //     " Mine Vision AI wins Industry Innovation Award 2023",
// //     " Quarterly Report: 37% reduction in incidents since implementation",
// //   ];

// //   const images = [
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-JW8TcwRNs_dP90miTrZVLJzbVaJS5d4FQ&s",
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszI12Ryn3zTRP_s6Av1w3AaAzUq4fK2cDhQ&s",
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpr3dav9Nbsl2ZMW2hl_cBU0c010tecb5pg&s",
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inUkXW9JFnhAhccRa62kfBSZUosZK0cNIQ&s",
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-If76lxr6JjEFNyRITIoU-quCT5uiDtvzJQ&s",
// //   ];

// //   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [showNewsTicker, setShowNewsTicker] = useState(true);

// //   useEffect(() => {
// //     const newsInterval = setInterval(() => {
// //       setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
// //     }, 4000);

// //     return () => clearInterval(newsInterval);
// //   }, [newsItems.length]);

// //   useEffect(() => {
// //     const imageInterval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 5000);

// //     return () => clearInterval(imageInterval);
// //   }, [images.length]);

// //   const nextImage = () => {
// //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setCurrentImageIndex(
// //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// //     );
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="relative flex items-center justify-center w-screen h-screen p-10 text-center bg-white "
// //     >
// //       <main className="w-full h-full mt-[24vh] flex flex-col items-center px-2 gap-[2rem] text-center">
// //         <div className="w-full max-w-6xl mt-8 mb-12 h-100">
// //           <h3 className="mb-6 text-2xl font-bold text-gray-800">
// //             Advanced Monitoring Systems
// //           </h3>
// //           <div className="relative w-full h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-[#DAEBA7] to-white border-4 border-white shadow-lg">
// //             {images.map((image, index) => (
// //               <div
// //                 key={index}
// //                 className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
// //                   index === currentImageIndex ? "opacity-100" : "opacity-0"
// //                 }`}
// //               >
// //                 <img
// //                   src={image}
// //                   alt={`Mine monitoring system ${index + 1}`}
// //                   className="w-full h-full bg-center bg-cover"
// //                 />
// //               </div>
// //             ))}
// //             <button
// //               className="absolute p-2 text-white transition-all transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-2 top-1/2 hover:bg-opacity-75"
// //               onClick={prevImage}
// //             >
// //               ‹
// //             </button>
// //             <button
// //               className="absolute p-2 text-white transition-all transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-2 top-1/2 hover:bg-opacity-75"
// //               onClick={nextImage}
// //             >
// //               ›
// //             </button>
// //             <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
// //               {images.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   className={`h-3 w-3 rounded-full ${
// //                     index === currentImageIndex ? "bg-black" : "bg-gray-300"
// //                   }`}
// //                   onClick={() => setCurrentImageIndex(index)}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           <p className="mt-4 text-gray-600">
// //             Advanced AI systems monitoring mine stability in real-time
// //           </p>
// //         </div>
// //         {showNewsTicker && (
// //           <div className="relative w-full max-w-6xl p-3 mt-0 text-white bg-red-600 rounded-t-lg mb-9">
// //             <div className="flex items-center justify-center">
// //               <span className="mr-2 font-bold">BREAKING:</span>
// //               <div className="h-6 overflow-hidden">
// //                 <div
// //                   className="transition-transform duration-500"
// //                   style={{
// //                     transform: `translateY(-${currentNewsIndex * 24}px)`,
// //                   }}
// //                 >
// //                   {newsItems.map((item, index) => (
// //                     <div key={index} className="flex items-center h-6">
// //                       {item}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //             <button
// //               className="absolute transform -translate-y-1/2 right-3 top-1/2"
// //               onClick={() => setShowNewsTicker(false)}
// //             >
// //               <FaTimes />
// //             </button>
// //           </div>
// //         )}
// //       </main>
// //       <motion.div
// //         variants={fadeInUp}
// //         initial="hidden"
// //         animate="visible"
// //         className="relative z-10 flex flex-col items-center px-4 mt-16 text-gray-900 max-w-5xl"
// //       >
// //         {/* Main Heading */}
// //         <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
// //           AI-Powered Mining
// //         </h1>
// //         <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl text-accent">
// //           Solutions
// //         </h1>

// //         {/* Description */}
// //         <p className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl">
// //           AI-powered rockfall prediction system for open-pit mines. Helping you
// //           prevent risks before they become disasters.
// //         </p>

// //         {/* Buttons */}
// //         <div className="flex justify-center gap-6">
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             href="#features"
// //             className="px-8 py-3 font-semibold text-white uppercase rounded-full bg-accent shadow-md"
// //           >
// //             Watch a Demo
// //           </motion.a>
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             href="#features"
// //             className="px-8 py-3 font-semibold text-accent uppercase rounded-full border border-accent shadow-md"
// //           >
// //             Dashboard
// //           </motion.a>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import { motion } from "framer-motion";
// import { fadeInUp } from "../utils/animations";
// import { FaArrowRight, FaTimes } from "react-icons/fa";
// import { useState, useEffect } from "react";

// const Hero = () => {
//   const newsItems = [
//     " ALERT: High rockfall risk predicted in Sector B-12 today",
//     " System Update: New prediction algorithm deployed with 95% accuracy",
//     " Mine Vision AI wins Industry Innovation Award 2023",
//     " Quarterly Report: 37% reduction in incidents since implementation",
//   ];

//   const images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-JW8TcwRNs_dP90miTrZVLJzbVaJS5d4FQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszI12Ryn3zTRP_s6Av1w3AaAzUq4fK2cDhQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpr3dav9Nbsl2ZMW2hl_cBU0c010tecb5pg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inUkXW9JFnhAhccRa62kfBSZUosZK0cNIQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-If76lxr6JjEFNyRITIoU-quCT5uiDtvzJQ&s",
//   ];

//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showNewsTicker, setShowNewsTicker] = useState(true);

//   useEffect(() => {
//     const newsInterval = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
//     }, 4000);
//     return () => clearInterval(newsInterval);
//   }, [newsItems.length]);

//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(imageInterval);
//   }, [images.length]);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <section
//       id="home"
//       className="relative flex items-center justify-center w-screen h-screen p-10 text-center bg-gray-50"
//     >
//       <main className="w-full h-full mt-[24vh] flex flex-col items-center px-2 gap-[2rem] text-center">
//         <div className="w-full max-w-6xl mt-8 mb-12">
//           <h3 className="mb-6 text-2xl font-bold text-gray-800">
//             Advanced Monitoring Systems
//           </h3>

//           {/* Image Carousel */}
//           <div className="relative w-full h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-md">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
//                   index === currentImageIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <img
//                   src={image}
//                   alt={`Mine monitoring system ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}

//             {/* Prev/Next Buttons */}
//             <button
//               className="absolute p-2 text-gray-700 bg-white/80 hover:bg-white transition-all transform -translate-y-1/2 rounded-full left-3 top-1/2 shadow"
//               onClick={prevImage}
//             >
//               ‹
//             </button>
//             <button
//               className="absolute p-2 text-gray-700 bg-white/80 hover:bg-white transition-all transform -translate-y-1/2 rounded-full right-3 top-1/2 shadow"
//               onClick={nextImage}
//             >
//               ›
//             </button>

//             {/* Dots */}
//             <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`h-3 w-3 rounded-full ${
//                     index === currentImageIndex
//                       ? "bg-blue-600"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>

//           <p className="mt-4 text-gray-600">
//             Advanced AI systems monitoring mine stability in real-time
//           </p>
//         </div>

//         {/* News Ticker */}
//         {showNewsTicker && (
//           <div className="relative w-full max-w-6xl p-3 mt-0 text-red-800 bg-red-100 border border-red-200 rounded-lg shadow-sm">
//             <div className="flex items-center justify-center">
//               <span className="mr-2 font-bold">BREAKING:</span>
//               <div className="h-6 overflow-hidden">
//                 <div
//                   className="transition-transform duration-500"
//                   style={{
//                     transform: `translateY(-${currentNewsIndex * 24}px)`,
//                   }}
//                 >
//                   {newsItems.map((item, index) => (
//                     <div key={index} className="flex items-center h-6">
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <button
//               className="absolute transform -translate-y-1/2 text-red-500 right-3 top-1/2 hover:text-red-700"
//               onClick={() => setShowNewsTicker(false)}
//             >
//               <FaTimes />
//             </button>
//           </div>
//         )}
//       </main>

//       {/* Hero Text */}
//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 flex flex-col items-center px-4 mt-16 text-gray-900 max-w-5xl"
//       >
//         <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
//           AI-Powered Mining
//         </h1>
//         <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl text-blue-600">
//           Solutions
//         </h1>

//         <p className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl">
//           AI-powered rockfall prediction system for open-pit mines. Helping you
//           prevent risks before they become disasters.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-6">
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="#features"
//             className="px-8 py-3 font-semibold text-white uppercase rounded-full bg-blue-600 shadow-md"
//           >
//             Watch a Demo
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="#features"
//             className="px-8 py-3 font-semibold text-blue-600 uppercase rounded-full border border-blue-600 shadow-md"
//           >
//             Dashboard
//           </motion.a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Hero = () => {
  const newsItems = [
    " ALERT: High rockfall risk predicted in Sector B-12 today",
    " System Update: New prediction algorithm deployed with 95% accuracy",
    " Mine Vision AI wins Industry Innovation Award 2023",
    " Quarterly Report: 37% reduction in incidents since implementation",
  ];

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-JW8TcwRNs_dP90miTrZVLJzbVaJS5d4FQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszI12Ryn3zTRP_s6Av1w3AaAzUq4fK2cDhQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpr3dav9Nbsl2ZMW2hl_cBU0c010tecb5pg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inUkXW9JFnhAhccRa62kfBSZUosZK0cNIQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-If76lxr6JjEFNyRITIoU-quCT5uiDtvzJQ&s",
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNewsTicker, setShowNewsTicker] = useState(true);

  // Rotate news
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(newsInterval);
  }, [newsItems.length]);

  // Rotate images
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
    <section
      id="home"
      className="relative flex items-center justify-center w-screen h-screen p-10 text-center bg-gray-50"
    >
      <main className="w-full h-full mt-[24vh] flex flex-col items-center px-2 gap-[2rem] text-center">
        {/* Title & Carousel */}
        <div className="w-full max-w-6xl mt-8 mb-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Advanced Monitoring Systems
          </h3>

          {/* Image Carousel */}
          <div className="relative w-full h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-md">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Mine monitoring system ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Prev/Next Buttons */}
            <button
              className="absolute p-2 text-gray-700 bg-white/80 hover:bg-white transition-all transform -translate-y-1/2 rounded-full left-3 top-1/2 shadow"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute p-2 text-gray-700 bg-white/80 hover:bg-white transition-all transform -translate-y-1/2 rounded-full right-3 top-1/2 shadow"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentImageIndex
                      ? "bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
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
      </main>

      {/* Hero Text */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4 mt-16 text-gray-900 max-w-5xl"
      >
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
          AI-Powered Mining
        </h1>
        <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl text-blue-600">
          Solutions
        </h1>

        <p className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl">
          AI-powered rockfall prediction system for open-pit mines. Helping you
          prevent risks before they become disasters.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-white uppercase rounded-full bg-blue-600 shadow-md"
          >
            Watch a Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-blue-600 uppercase rounded-full border border-blue-600 shadow-md"
          >
            Dashboard
          </motion.a>
        </div>
      </motion.div>

      {/* News Ticker */}
      {showNewsTicker && (
        <div className="relative w-full max-w-6xl px-4 py-2 text-red-800 bg-red-100 border border-red-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-center">
            <span className="mr-2 font-bold">BREAKING:</span>
            <div className="h-8 overflow-hidden">
              <div
                className="transition-transform duration-500"
                style={{
                  transform: `translateY(-${currentNewsIndex * 32}px)`, // 32px per row
                }}
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center h-8 text-sm md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute transform -translate-y-1/2 text-red-500 right-3 top-1/2 hover:text-red-700"
            onClick={() => setShowNewsTicker(false)}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
