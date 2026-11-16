
"use strict";
// No runtime animation: original 390-frame timeline is expressed entirely in CSS.
const activation = document.querySelector('.click-area');
activation.addEventListener('click', (event) => {
  if (event.button !== 0) return;
  if (typeof window.callClick === 'function') window.callClick();
});

// Visual glyph-ink alignment after the exact Roboto Condensed Light font has loaded.
// Typography-only calculation; ALL animation remains CSS keyframes.
(function alignMortgageWarningInk() {
  const line1 = document.querySelector('.mortgage-warning-1 span');
  const line2 = document.getElementById('mortgage-warning-2-text');
  if (!line1 || !line2 || !document.fonts || !document.fonts.ready) return;
  const font = '300 20px "Roboto Condensed Source Light"';
  Promise.all([document.fonts.load(font, line1.textContent), document.fonts.ready]).then(() => {
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return;
    ctx.font = font;
    const a = line1.textContent.trim(), b = line2.textContent.trim();
    const m1 = ctx.measureText(a), m2 = ctx.measureText(b);
    const right1 = (Number.isFinite(m1.actualBoundingBoxRight) ? m1.actualBoundingBoxRight : m1.width)
      + (a.length - 1) * 15.91;
    const naturalRight2 = Number.isFinite(m2.actualBoundingBoxRight) ? m2.actualBoundingBoxRight : m2.width;
    const spacing = (right1 - naturalRight2) / (b.length - 1);
    if (!Number.isFinite(spacing)) return;
    line2.style.letterSpacing = spacing.toFixed(6) + 'px';
    line2.dataset.inkTrackingPx = spacing.toFixed(6);
    line2.dataset.targetInkRightPx = right1.toFixed(3);
    line2.dataset.measuredInkRightPx = (naturalRight2 + (b.length - 1)*spacing).toFixed(3);
    line2.dataset.inkRightMarginPx = (1200 - right1).toFixed(3);
    const leftInk1 = Number.isFinite(m1.actualBoundingBoxLeft) ? -m1.actualBoundingBoxLeft : 0;
    const leftInk2 = Number.isFinite(m2.actualBoundingBoxLeft) ? -m2.actualBoundingBoxLeft : 0;
    line2.dataset.inkLeftOffsetPx = (leftInk2 - leftInk1).toFixed(3);
    line2.dataset.glyphCheck = right1 <= 1200 && Math.abs(leftInk2-leftInk1) <= .5 ? 'CALCULATED_IN_BOUNDS' : 'REVIEW_REQUIRED';
  }).catch(() => { line2.dataset.glyphCheck = 'FONT_MEASUREMENT_NOT_AVAILABLE'; });
})();

