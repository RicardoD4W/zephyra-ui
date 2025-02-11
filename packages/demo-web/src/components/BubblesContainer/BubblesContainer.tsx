// import { useEffect, useState } from 'react';
// import './animation.css';

// const pop = new Audio('/audio/bubblepop.mp3');

// export const BubblesContainer = ({ bubbleCount = 20 }) => {
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     const newBubbles = [];
//     for (let i = 0; i < bubbleCount; i++) {
//       const randomLeft = Math.random() * 90;
//       const randomTop = Math.random() * 70;
//       const zoomFactor = Math.random() + 0.25;
//       const delay = `-${i}s`;

//       newBubbles.push({
//         id: i,
//         randomLeft,
//         randomTop,
//         zoomFactor,
//         delay,
//       });
//     }

//     setBubbles(newBubbles);
//   }, [bubbleCount]);

//   const handleBubbleClick = (e, id) => {
//     const bubble = e.target.closest('.bubble');
//     if (bubble) {
//       pop.volume = 0.5;
//       const keyframes = [
//         { transform: 'scale(1)', opacity: 1 },
//         { transform: 'scale(2.5)', opacity: 0 },
//       ];
//       const animation = bubble.animate(keyframes, { duration: 150 });

//       pop.play();
//       animation.finished.then(() => {
//         setBubbles((prevBubbles) =>
//           prevBubbles.filter((bubble) => bubble.id !== id)
//         );
//       });
//     }
//   };

//   return (
//     <div className="absolute w-full h-full bubble-container">
//       {bubbles.map(({ id, randomLeft, randomTop, zoomFactor, delay }) => (
//         <div
//           id={`bubble-${id}`}
//           key={id}
//           className="absolute rounded-full bubble"
//           style={{
//             left: `${randomLeft}%`,
//             top: `${randomTop}%`,
//             zoom: zoomFactor,
//             animation: 'jiggle 8s ease-in-out infinite',
//             animationDelay: delay,
//             width: '200px',
//             height: '200px',
//             filter: 'blur(2px)',
//           }}
//           onClick={(e) => handleBubbleClick(e, id)}
//         >
//           <div
//             className="absolute rounded-full before"
//             style={{
//               top: '50px',
//               left: '45px',
//               width: '30px',
//               height: '30px',
//               backgroundColor: 'var(--bubbles-5)',
//               filter: 'blur(2px)',
//               zIndex: -1,
//             }}
//           />
//           <div
//             className="absolute rounded-full after"
//             style={{
//               top: '80px',
//               left: '80px',
//               width: '20px',
//               height: '20px',
//               backgroundColor: 'var(--bubbles-5)',
//               filter: 'blur(2px)',
//               zIndex: -1,
//             }}
//           />
//           {[...Array(5)].map((_, j) => {
//             const bubbleStyle = {};
//             switch (j) {
//               case 0:
//                 bubbleStyle.inset = '10px';
//                 bubbleStyle.borderLeft = `7px solid var(--bubbles-${j + 1})`;
//                 bubbleStyle.filter = 'blur(8px)';
//                 break;
//               case 1:
//                 bubbleStyle.inset = '10px';
//                 bubbleStyle.borderRight = `7px solid var(--bubbles-${j + 1})`;
//                 bubbleStyle.filter = 'blur(8px)';
//                 break;
//               case 2:
//                 bubbleStyle.inset = '10px';
//                 bubbleStyle.borderTop = `7px solid var(--bubbles-${j + 1})`;
//                 bubbleStyle.filter = 'blur(8px)';
//                 break;
//               case 3:
//                 bubbleStyle.inset = '30px';
//                 bubbleStyle.borderLeft = `7px solid var(--bubbles-${j + 1})`;
//                 bubbleStyle.filter = 'blur(12px)';
//                 break;
//               case 4:
//                 bubbleStyle.inset = '10px';
//                 bubbleStyle.borderBottom = `5px solid var(--bubbles-${j + 1})`;
//                 bubbleStyle.filter = 'blur(8px)';
//                 bubbleStyle.transform = 'rotate(330deg)';
//                 break;
//               default:
//                 break;
//             }

//             return (
//               <span
//                 key={`span-${j}`}
//                 className="absolute rounded-full"
//                 style={bubbleStyle}
//               />
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };
