// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// const memes = {
//   "01-01": "/content/puls.mp4", // Ensure the file is in the public/content/ folder
//   "01-02": "/content/huh_cat.jpg",
// };

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
// const getStartDay = (month, year) => new Date(year, month - 1, 1).getDay();

// const MemeCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const videoRef = useRef(null); // Reference for video container

//   const handleDateClick = (date) => {
//     setSelectedDate(date);

//     // Delay to ensure state updates before scrolling
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

//         // Play the video after scrolling
//         const videoElement = videoRef.current.querySelector("video");
//         if (videoElement) {
//           videoElement.play();
//         }
//       }
//     }, 300);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-white min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-black">2025 Meme Calendar</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {months.map((month, monthIndex) => {
//           const days = daysInMonth(monthIndex + 1, 2025);
//           const startDay = getStartDay(monthIndex + 1, 2025);
//           return (
//             <div key={month} className="p-4 border border-black rounded-lg shadow-lg bg-gray-100">
//               <h2 className="text-lg font-bold text-center mb-2 bg-blue-200 p-1 uppercase">{month}</h2>
//               <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-900 border-b border-gray-500 pb-1">
//                 {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                   <div key={i} className="w-8 h-8 flex items-center justify-center">{d}</div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-7 gap-1 mt-1">
//                 {[...Array(startDay)].map((_, i) => (
//                   <div key={i} className="w-8 h-8"></div>
//                 ))}
//                 {[...Array(days)].map((_, day) => {
//                   const dateKey = `${String(monthIndex + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
//                   return (
//                     <motion.div
//                       key={dateKey}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-8 h-8 flex items-center justify-center border border-gray-500 cursor-pointer bg-white hover:bg-gray-300 text-sm font-medium rounded-md"
//                       onClick={() => handleDateClick(dateKey)}
//                     >
//                       {day + 1}
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {selectedDate && memes[selectedDate] && (
//         <div ref={videoRef} className="mt-6 w-full max-w-sm p-4 bg-gray-200 rounded-lg shadow-md">
//           <h2 className="text-center text-lg font-semibold text-black mb-3">Selected Date: {selectedDate}</h2>
//           <video controls autoPlay className="w-full rounded-md">
//             <source src={memes[selectedDate]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MemeCalendar;

// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// const mediaFiles = {
//   "01-01": "/content/puls.mp4", // Video file
//   "01-02": "/content/huh_cat.jpg", // Another video
//   "01-03": "/content/drake.jpg", // Image file
//   "01-04": "/content/image2.png", // Another image
// };

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
// const getStartDay = (month, year) => new Date(year, month - 1, 1).getDay();

// const MemeCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const mediaRef = useRef(null); // Reference for media container

//   const handleDateClick = (date) => {
//     setSelectedDate(date);

//     setTimeout(() => {
//       if (mediaRef.current) {
//         mediaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

//         // Auto-play the video if it's a video file
//         const videoElement = mediaRef.current.querySelector("video");
//         if (videoElement) {
//           videoElement.play();
//         }
//       }
//     }, 300);
//   };

//   const getFileType = (file) => {
//     if (!file) return null;
//     if (file.endsWith(".mp4")) return "video";
//     if (file.match(/\.(jpg|jpeg|png|gif)$/)) return "image";
//     return null;
//   };

//   const mediaFile = mediaFiles[selectedDate];
//   const mediaType = getFileType(mediaFile);

//   return (
//     <div className="flex flex-col items-center p-6 bg-white min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-black">2025 Meme Calendar</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {months.map((month, monthIndex) => {
//           const days = daysInMonth(monthIndex + 1, 2025);
//           const startDay = getStartDay(monthIndex + 1, 2025);
//           return (
//             <div key={month} className="p-4 border border-black rounded-lg shadow-lg bg-gray-100">
//               <h2 className="text-lg font-bold text-center mb-2 bg-blue-200 p-1 uppercase">{month}</h2>
//               <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-900 border-b border-gray-500 pb-1">
//                 {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                   <div key={i} className="w-8 h-8 flex items-center justify-center">{d}</div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-7 gap-1 mt-1">
//                 {[...Array(startDay)].map((_, i) => (
//                   <div key={i} className="w-8 h-8"></div>
//                 ))}
//                 {[...Array(days)].map((_, day) => {
//                   const dateKey = `${String(monthIndex + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
//                   return (
//                     <motion.div
//                       key={dateKey}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-8 h-8 flex items-center justify-center border border-gray-500 cursor-pointer bg-white hover:bg-gray-300 text-sm font-medium rounded-md"
//                       onClick={() => handleDateClick(dateKey)}
//                     >
//                       {day + 1}
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {selectedDate && mediaFile && (
//         <div ref={mediaRef} className="mt-6 w-full max-w-sm p-4 bg-gray-200 rounded-lg shadow-md">
//           <h2 className="text-center text-lg font-semibold text-black mb-3">Selected Date: {selectedDate}</h2>

//           {mediaType === "video" ? (
//             <video controls autoPlay className="w-full rounded-md">
//               <source src={mediaFile} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : mediaType === "image" ? (
//             <img src={mediaFile} alt="Selected meme" className="w-full rounded-md" />
//           ) : (
//             <p className="text-center text-red-500">No media available for this date.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MemeCalendar;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const mediaFiles = {
//   "01-01": "/content/puls.mp4",
//   "01-02": "/content/huh_cat.jpg",
//   "01-03": "/content/drake.jpg",
//   "01-04": "/content/image2.png",
// };

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
// const getStartDay = (month, year) => new Date(year, month - 1, 1).getDay();

// const MemeCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedDate(null);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const getFileType = (file) => {
//     if (!file) return null;
//     if (file.endsWith(".mp4")) return "video";
//     if (file.match(/\.(jpg|jpeg|png|gif)$/)) return "image";
//     return null;
//   };

//   const mediaFile = mediaFiles[selectedDate];
//   const mediaType = getFileType(mediaFile);

//   return (
//     <div className="flex flex-col items-center p-6 bg-white min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-black">2025 Meme Calendar</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {months.map((month, monthIndex) => {
//           const days = daysInMonth(monthIndex + 1, 2025);
//           const startDay = getStartDay(monthIndex + 1, 2025);
//           return (
//             <div key={month} className="p-4 border border-black rounded-lg shadow-lg bg-gray-100">
//               <h2 className="text-lg font-bold text-center mb-2 bg-blue-200 p-1 uppercase">{month}</h2>
//               <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-900 border-b border-gray-500 pb-1">
//                 {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                   <div key={i} className="w-8 h-8 flex items-center justify-center">{d}</div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-7 gap-1 mt-1">
//                 {[...Array(startDay)].map((_, i) => (
//                   <div key={i} className="w-8 h-8"></div>
//                 ))}
//                 {[...Array(days)].map((_, day) => {
//                   const dateKey = `${String(monthIndex + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
//                   return (
//                     <motion.div
//                       key={dateKey}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-8 h-8 flex items-center justify-center border border-gray-500 cursor-pointer bg-white hover:bg-gray-300 text-sm font-medium rounded-md"
//                       onClick={() => handleDateClick(dateKey)}
//                     >
//                       {day + 1}
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Modal for playing media */}
//       <AnimatePresence>
//         {isModalOpen && mediaFile && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="relative bg-gray-900 p-4 rounded-lg shadow-lg w-[80%] max-w-md"
//             >
//               <button
//                 className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
//                 onClick={closeModal}
//               >
//                 ✖
//               </button>
//               <h2 className="text-center text-lg font-semibold text-white mb-3">
//                 {selectedDate}
//               </h2>

//               <div className="flex justify-center items-center">
//                 {mediaType === "video" ? (
//                   <video controls autoPlay className="w-full max-h-[300px] rounded-md">
//                     <source src={mediaFile} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : mediaType === "image" ? (
//                   <img src={mediaFile} alt="Selected meme" className="w-full max-h-[300px] rounded-md object-contain" />
//                 ) : (
//                   <p className="text-center text-red-500">No media available for this date.</p>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MemeCalendar;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const mediaFiles = {
//   "01-01": "/content/puls.mp4",
//   "01-02": "/content/huh_cat.jpg",
//   "01-03": "/content/drake.jpg",
//   "01-04": "/content/image2.png",
// };

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
// const getStartDay = (month, year) => new Date(year, month - 1, 1).getDay();

// const MemeCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedDate(null);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const getFileType = (file) => {
//     if (!file) return null;
//     if (file.endsWith(".mp4")) return "video";
//     if (file.match(/\.(jpg|jpeg|png|gif)$/)) return "image";
//     return null;
//   };

//   const mediaFile = mediaFiles[selectedDate];
//   const mediaType = getFileType(mediaFile);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/content/onichan.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay Content (Meme Calendar) */}
//       <div className="relative z-10 flex flex-col items-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg w-[90%] max-w-6xl">
//         <h1 className="text-4xl font-bold mb-6 text-black">2025 Meme Calendar</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {months.map((month, monthIndex) => {
//             const days = daysInMonth(monthIndex + 1, 2025);
//             const startDay = getStartDay(monthIndex + 1, 2025);
//             return (
//               <div key={month} className="p-4 border border-black rounded-lg shadow-lg bg-gray-100">
//                 <h2 className="text-lg font-bold text-center mb-2 bg-blue-200 p-1 uppercase">{month}</h2>
//                 <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-900 border-b border-gray-500 pb-1">
//                   {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                     <div key={i} className="w-8 h-8 flex items-center justify-center">{d}</div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-7 gap-1 mt-1">
//                   {[...Array(startDay)].map((_, i) => (
//                     <div key={i} className="w-8 h-8"></div>
//                   ))}
//                   {[...Array(days)].map((_, day) => {
//                     const dateKey = `${String(monthIndex + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
//                     return (
//                       <motion.div
//                         key={dateKey}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="w-8 h-8 flex items-center justify-center border border-gray-500 cursor-pointer bg-white hover:bg-gray-300 text-sm font-medium rounded-md"
//                         onClick={() => handleDateClick(dateKey)}
//                       >
//                         {day + 1}
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Modal for playing media */}
//       <AnimatePresence>
//         {isModalOpen && mediaFile && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="relative bg-gray-900 p-4 rounded-lg shadow-lg w-[80%] max-w-md"
//             >
//               <button
//                 className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
//                 onClick={closeModal}
//               >
//                 ✖
//               </button>
//               <h2 className="text-center text-lg font-semibold text-white mb-3">
//                 {selectedDate}
//               </h2>

//               <div className="flex justify-center items-center">
//                 {mediaType === "video" ? (
//                   <video controls autoPlay className="w-full max-h-[300px] rounded-md">
//                     <source src={mediaFile} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : mediaType === "image" ? (
//                   <img src={mediaFile} alt="Selected meme" className="w-full max-h-[300px] rounded-md object-contain" />
//                 ) : (
//                   <p className="text-center text-red-500">No media available for this date.</p>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MemeCalendar;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { div, h2 } from "motion/react-client";

// const mediaFiles = {
//   "01-01": "/content/puls.mp4",
//   "01-02": "/content/huh_cat.jpg",
//   "01-03": "/content/drake.jpg",
//   "01-04": "/content/onichan.mp4",
//   "01-05": "/content/puls.mp4",
//   "01-06": "/content/meme0106.mp4",
//   "01-07": "/content/meme0107.mp4",
//   "01-08": "/content/meme0108.png",
//   "01-09": "/content/meme0109.jpg",
//   "01-10": "/content/meme0110.png",
//   "01-11": "/content/meme0111.png",
//   "01-12": "/content/meme0112.mp4",
//   "01-13": "/content/meme0113.jpg",
//   "01-14": "/content/meme0114.mp4",
//   "01-15": "/content/meme0115.mp4",
//   "01-16": "/content/meme0116.mp4",
//   "01-17": "/content/meme0117.mp4",
//   "01-18": "/content/meme0118.mp4",
//   "01-19": "/content/meme0119.mp4",
//   "01-20": "/content/meme0120.mp4",
//   "01-21": "/content/meme0121.mp4",
//   "01-22": "/content/meme0122.mp4",
//   "01-23": "/content/meme0123.mp4",
//   "01-24": "/content/meme0124.mp4",
//   "01-25": "/content/meme0125.mp4",
//   "01-26": "/content/meme0126.mp4",
//   "01-27": "/content/meme0127.mp4",
//   "01-28": "/content/meme0128.mp4",
//   "01-29": "/content/meme0129.mp4",
//   "01-30": "/content/meme0130.mp4",
//   "01-31": "/content/meme0131.mp4",

// };

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
// const getStartDay = (month, year) => new Date(year, month - 1, 1).getDay();

// const MemeCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedDate(null);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const getFileType = (file) => {
//     if (!file) return null;
//     if (file.endsWith(".mp4")) return "video";
//     if (file.match(/\.(jpg|jpeg|png|gif)$/)) return "image";
//     return null;
//   };

//   const mediaFile = mediaFiles[selectedDate];
//   const mediaType = getFileType(mediaFile);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/content/onichan.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/*
//         Main Container:
//         - bg-white with a lower bg-opacity (e.g., 40%) to make it more transparent
//         - backdrop-blur-md to give a subtle blur effect
//       */}
//       <div className="relative z-10 flex flex-col items-center p-6 bg-white/70 bg-opacity-100  rounded-lg shadow-lg w-[90%] max-w-6xl">
//         <h1 className="text-4xl font-bold mb-6 text-black">2025 Meme Calendar</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
//           {months.map((month, monthIndex) => {
//             const days = daysInMonth(monthIndex + 1, 2025);
//             const startDay = getStartDay(monthIndex + 1, 2025);
//             return (
//               <div
//                 key={month}
//                 /*
//                   Month Container:
//                   - Use bg-gray-100 with some opacity so the video shows through
//                   - Optionally add backdrop-blur-md for each small container
//                 */
//                 className="p-2 border border-black rounded-lg shadow-lg bg-rose-50 bg-opacity-70 backdrop-blur-md"
//               >
//                 <h2 className="text-lg font-bold text-center mb-2 bg-slate-50 p-1 uppercase">
//                   {month}
//                 </h2>
//                 <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-900 border-b border-gray-500 pb-1">
//                   {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                     <div key={i} className="w-8 h-8 flex items-center justify-center">
//                       {d}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-7 gap-2 mt-1">
//                   {[...Array(startDay)].map((_, i) => (
//                     <div key={i} className="w-8 h-8 "></div>
//                   ))}
//                   {[...Array(days)].map((_, day) => {
//                     const dateKey = `${String(monthIndex + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
//                     return (
//                       <motion.div
//                         key={dateKey}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="w-8 h-8  flex items-center justify-center border border-gray-500 cursor-pointer bg-stone-100 hover:bg-gray-300 text-sm font-medium rounded-md"
//                         onClick={() => handleDateClick(dateKey)}
//                       >
//                         {day + 1}
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Modal for playing media */}
//       <AnimatePresence>
//         {isModalOpen && mediaFile && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-opacity-75 flex justify-center items-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="relative bg-gray-900 p-4 rounded-lg shadow-lg w-[80%] max-w-md"
//             >
//               <button
//                 className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
//                 onClick={closeModal}
//               >
//                 ✖
//               </button>
//               <h2 className="text-center text-lg font-semibold text-white mb-3">
//                 {selectedDate}
//               </h2>

//               <div className="flex justify-center items-center">
//                 {mediaType === "video" ? (

//                   <video controls autoPlay className="w-full max-h-[300px] rounded-md">

//                     <source src={mediaFile} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : mediaType === "image" ? (
//                   <img
//                     src={mediaFile}
//                     alt="Selected meme"
//                     className="w-full max-h-[300px] rounded-md object-contain"
//                   />
//                 ) : (
//                   <p className="text-center text-red-500">
//                     No media available for this date.
//                   </p>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MemeCalendar;