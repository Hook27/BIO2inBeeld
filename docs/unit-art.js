// Sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in index.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  neutral grey instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in index.html (see .lift there).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const Bar = (x, y, h, cls = 'a') => `<rect class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" width="44" height="${h}" rx="2" fill="currentColor" stroke="none"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // A Het kader: four organisations of unequal level, and the baseline that the lower ones are lifted to.
    reset(P('M250 152H572', 'a') +
      Bar(280, 104, 48) + Bar(354, 46, 106) + Bar(428, 84, 68) + Bar(502, 28, 124) +
      `<rect class="t lift" style="--k:${k++}" x="280" y="70" width="44" height="34" rx="2" fill="currentColor" stroke="none"/>` +
      `<rect class="t lift" style="--k:${k++}" x="428" y="70" width="44" height="14" rx="2" fill="currentColor" stroke="none"/>` +
      P('M236 70H586') + Tx(236, 54, 'basisniveau', 14)),
    // B Maatregelen voor de organisatie: a control from ISO 27002 and the government measures that hang under it.
    reset(P('M252 60H348V120H252Z', 'a') + Tx(300, 99, '5.1', 24, 'a', 'middle') +
      P('M348 90C380 90 372 52 404 52', 'a') + P('M348 90C380 90 372 128 404 128', 'a') +
      P('M404 34H576V70H404Z') + P('M404 110H576V146H404Z') +
      Tx(420, 58, '5.01.01', 16) + Tx(420, 134, '5.01.02', 16)),
    // C Mens, gebouw en techniek: a person, a building with a zone inside a zone, and a device.
    reset(P('M276 70a14 14 0 1 0 28 0a14 14 0 1 0 -28 0', 'a') + P('M260 132C260 96 320 96 320 132', 'a') +
      P('M364 34H476V140H364Z') + P('M394 66H446V108H394Z') +
      P('M512 60H572V104H512Z', 'a') + P('M498 122H586L572 104H512Z', 'a') +
      Tx(290, 166, 'mens', 14, 'a', 'middle') + Tx(420, 166, 'gebouw', 14, '', 'middle') + Tx(542, 166, 'techniek', 14, 'a', 'middle')),
  ];
})();
