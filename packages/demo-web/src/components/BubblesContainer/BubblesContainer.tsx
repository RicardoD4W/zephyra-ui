import { useEffect, useRef } from 'react';
import '@site/src/css/animation.css';

export const BubblesContainer = ({ bubbleCount = 20 }) => {
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
    const bubbleContainer = bubbleContainerRef.current;
    const spanCount = 5;
    const pop = new Audio('/audio/bubblepop.mp3');

    if (!bubbleContainer) return;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';

      const randomLeft = Math.random() * 90;
      const randomRight = Math.random() * 90;
      const randomTop = Math.random() * 70;
      const zoomFactor = Math.random() + 0.25;
      const delay = `-${i}s`;

      Object.assign(bubble.style, {
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        animation: 'jiggle 8s ease-in-out infinite',
        left: `${randomLeft}%`,
        right: `${randomRight}%`,
        top: `${randomTop}%`,
        zoom: zoomFactor,
        animationDelay: delay,
      });

      const before = document.createElement('div');
      before.className = 'before';
      Object.assign(before.style, {
        position: 'absolute',
        top: '50px',
        left: '45px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'var(--bubbles-5)',
        zIndex: '-1',
        filter: 'blur(2px)',
      });
      bubble.appendChild(before);

      const after = document.createElement('div');
      after.className = 'after';
      Object.assign(after.style, {
        position: 'absolute',
        top: '80px',
        left: '80px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'var(--bubbles-5)',
        zIndex: '-1',
        filter: 'blur(2px)',
      });
      bubble.appendChild(after);

      for (let j = 0; j < spanCount; j++) {
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.borderRadius = '50%';

        switch (j) {
          case 0:
            Object.assign(span.style, {
              inset: '10px',
              borderLeft: `7px solid var(--bubbles-${j + 1})`,
              filter: 'blur(8px)',
            });
            break;
          case 1:
            Object.assign(span.style, {
              inset: '10px',
              borderRight: `7px solid var(--bubbles-${j + 1})`,
              filter: 'blur(8px)',
            });
            break;
          case 2:
            Object.assign(span.style, {
              inset: '10px',
              borderTop: `7px solid var(--bubbles-${j + 1})`,
              filter: 'blur(8px)',
            });
            break;
          case 3:
            Object.assign(span.style, {
              inset: '30px',
              borderLeft: `7px solid var(--bubbles-${j + 1})`,
              filter: 'blur(12px)',
            });
            break;
          case 4:
            Object.assign(span.style, {
              inset: '10px',
              borderBottom: `5px solid var(--bubbles-${j + 1})`,
              filter: 'blur(8px)',
              transform: 'rotate(330deg)',
            });
            break;
        }
        bubble.appendChild(span);
      }

      bubbleContainer.appendChild(bubble);
    }

    const handleClick = (e) => {
      const bubble = e.target.closest('.bubble');
      if (bubble) {
        pop.volume = 0.5;
        const keyframes = [
          { transform: 'scale(1)', opacity: 1 },
          { transform: 'scale(2.5)', opacity: 0 },
        ];
        const animation = bubble.animate(keyframes, 150);
        pop.play();
        animation.finished.then(() => bubble.remove());
      }
    };

    bubbleContainer.addEventListener('click', handleClick);
    return () => bubbleContainer.removeEventListener('click', handleClick);
  }, []);

  return <div className="bubble-container" ref={bubbleContainerRef}></div>;
};
