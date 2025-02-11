export class BubblesContainer extends HTMLElement {
  _bubbleCount = (window.innerWidth / window.innerHeight) * 15;
  _spanCount = 5;
  _$bubbleContainner;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
        <style>${this._getStyles()}</style>
        <div class='bubble-container'></div>
        `;
  }

  connectedCallback() {
    this._$bubbleContainner = this.shadowRoot.querySelector(
      'div.bubble-container'
    );

    this._render();
    this._agregateAnimation();
  }

  _getStyles() {
    return /*css */ ` 
    .bubble-container {
    position: absolute;
    width: 100%;
    height: 100dvh;
    user-select: none;
  }

  .bubble {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    user-select: none;
    z-index: 2;
  }

  .bubble.explode {
    animation: explode 0.5s ease-out forwards;
  }

  @keyframes jiggle {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }`;
  }

  _render() {
    for (let i = 0; i < this._bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';

      const randomLeft = Math.random() * 80;
      const randomTop = Math.random() * 40;
      const zoomFactor = Math.random() + 0.25;
      const delay = -i + 's';

      bubble.style.position = 'absolute';
      bubble.style.width = '200px';
      bubble.style.height = '200px';
      bubble.style.borderRadius = '50%';
      bubble.style.animation = `jiggle 8s ease-in-out infinite`;
      bubble.style.left = `${randomLeft}%`;
      bubble.style.right = `${randomLeft}%`;
      bubble.style.top = `${randomTop}%`;
      bubble.style.zoom = zoomFactor;
      bubble.style.animationDelay = delay;
      bubble.style.filter = 'blur(2px)';

      const before = document.createElement('div');
      before.className = 'before';
      before.style.position = 'absolute';
      before.style.top = '50px';
      before.style.left = '45px';
      before.style.width = '30px';
      before.style.height = '30px';
      before.style.borderRadius = '50%';
      before.style.background = 'var(--bubbles-5)';
      before.style.zIndex = '-1';
      before.style.filter = 'blur(2px)';
      bubble.appendChild(before);

      const after = document.createElement('div');
      after.className = 'after';
      after.style.position = 'absolute';
      after.style.top = '80px';
      after.style.left = '80px';
      after.style.width = '20px';
      after.style.height = '20px';
      after.style.borderRadius = '50%';
      after.style.background = 'var(--bubbles-5)';
      after.style.zIndex = '-1';
      after.style.filter = 'blur(2px)';
      bubble.appendChild(after);

      for (let j = 0; j < this._spanCount; j++) {
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.borderRadius = '50%';

        switch (j) {
          case 0:
            span.style.inset = '10px';
            span.style.borderLeft = `7px solid var(--bubbles-${j + 1})`;
            span.style.filter = `blur(8px)`;
            break;
          case 1:
            span.style.inset = '10px';
            span.style.borderRight = `7px solid var(--bubbles-${j + 1})`;
            span.style.filter = `blur(8px)`;
            break;
          case 2:
            span.style.inset = '10px';
            span.style.borderTop = `7px solid var(--bubbles-${j + 1})`;
            span.style.filter = `blur(8px)`;
            break;
          case 3:
            span.style.inset = '30px';
            span.style.borderLeft = `7px solid var(--bubbles-${j + 1})`;
            span.style.filter = `blur(12px)`;
            break;
          case 4:
            span.style.inset = '10px';
            span.style.borderBottom = `5px solid var(--bubbles-${j + 1})`;
            span.style.filter = `blur(8px)`;
            span.style.transform = `rotate(330deg)`;
            break;

          default:
            break;
        }

        bubble.appendChild(span);
      }

      this._$bubbleContainner?.appendChild(bubble);
    }
  }

  _agregateAnimation() {
    const keyframes = [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(2.5)', opacity: 0 },
    ];

    this._$bubbleContainner?.addEventListener('click', (e) => {
      const bubbleContainer = e.target;
      const bubble = bubbleContainer.closest('.bubble');

      if (bubble && !bubble.classList.contains('clicked')) {
        bubble.classList.add('clicked');

        const bubbleSize = parseFloat(bubble.style.zoom || 1);
        const volume = Math.min(0.5 + (bubbleSize - 1) * 0.5, 1);

        const popAudio = new Audio('/audio/bubblepop.mp3');
        popAudio.volume = volume;

        const animation = bubble.animate(keyframes, 150);
        popAudio.play();

        animation.finished.then(() => {
          bubble.remove();
          bubble.classList.remove('clicked');
        });
      }
    });
  }
}

if (!customElements.get('bubbles-container')) {
  window.customElements.define('bubbles-container', BubblesContainer);
}
