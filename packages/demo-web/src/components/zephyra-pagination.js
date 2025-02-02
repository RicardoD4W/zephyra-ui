export class ZephyraPagination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.actualPage = this.getAttribute('actualPage');
    this.nextPage = this.getAttribute('nextPage');
    this.pastPage = this.getAttribute('pastPage');

    this.shadowRoot.innerHTML = `
        <style>${this.getStyles()}</style>
        ${this.render()}
        `;
  }

  getStyles() {
    return ` .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    color: var(--text-color);
  }

  .pagination-item {
  }

  .item {
    border-radius: 5px;
    border: 1px solid var(--text-s-color);

    padding: 5px 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: inherit;
    text-decoration: none;
  }

  svg {
    width: 20px;
  }`;
  }

  render() {
    return `
<div class='pagination'>
  <div class='pagination-item'>
    ${
      this.pastPage
        ? `
        <a
          href=${this.pastPage}
          class='item'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
            />
          </svg>
          ${this.pastPage.split('/').at(-1)}
        </a>
      `
        : ``
    }
  </div>
  <div>
    ${
      this.nextPage
        ? `
        <a
          href=${this.nextPage}
          class='item'
        >
          ${this.nextPage.split('/').at(-1)}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </a>
      `
        : ``
    }
  </div>
</div>`;
  }
}

customElements.define('zephyra-pagination', ZephyraPagination);
