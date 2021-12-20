export const CloseIcon = ({className}): JSX.Element => (
  <svg className={className} width="130px" height="130px" viewBox="0 0 130 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>close</title>
      <defs>
          <filter x="-6.0%" y="-63.1%" width="112.1%" height="226.4%" filterUnits="objectBoundingBox" id="filter-1">
              <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.701183826 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
              <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
          </filter>
          <filter id="filter-2">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.007843 0 0 0 0 1.000000 0 0 0 0 0.725490 0 0 0 1.000000 0"></feColorMatrix>
          </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
          <g id="landing_page_ido_4" transform="translate(-1184.000000, -799.000000)">
              <g id="push" filter="url(#filter-1)" transform="translate(0.000000, 832.000000)">
                  <g filter="url(#filter-2)" id="close">
                      <g transform="translate(1242.000000, 25.000000)">
                          <line x1="1.27272727" y1="1.27272727" x2="12.7272727" y2="12.7272727" id="Line-7" stroke="#979797" stroke-width="3"></line>
                          <line x1="1.27272727" y1="1.27272727" x2="12.7272727" y2="12.7272727" id="Line-7" stroke="#979797" stroke-width="3" transform="translate(7.000000, 7.000000) scale(-1, 1) translate(-7.000000, -7.000000) "></line>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
);
