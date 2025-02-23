/**
 * Get progress from ease
 * @param {int} t - time from 0 to 1.
 * @param {string} ease - Ease type
 * @returns {number} - Ease progress.
 */

function getEaseProgress(t, ease, s, a) {
  ease ? null : (ease = 'linear');

  switch (ease) {
    case 'easeInOut':
      return easeInOut(t);
      break;
    case 'easeIn':
      return -1;
      break;
    case 'easeOut':
      return -1;
      break;
    case 'easeInOutElastic':
      return customEasing(t);
      break;
    case 'easeInOutBounce':
      return easeInOutBounce(t);
      break;
    case 'easeInBounce':
      return easeInBounce(t);
      break;
    case 'easeOutBounce':
      return easeOutBounce(t, s, a);
      break;
    case 'spring':
      return spring(t, s, a);
      break;
    default:
      return linear(t);
  }
}

//
// EASE FUNCTIONS
//

function linear(t) {
  return t;
}

// Easing function for smooth transitions
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOut(t) {
  // Assuming t is a value between 0 and 1 representing the progress of the animation
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

function easeOutElastic(t, strength) {
  const s = strength == undefined ? 2 : strength;
  const c4 = (strength * Math.PI) / 3;

  return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}

function easeInOutElastic(t, strength, amplitude) {
  const s = strength == undefined ? 2 : strength;
  const a = amplitude == undefined ? 4.5 : amplitude;
  const c5 = (s * Math.PI) / a;

  return t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
        : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
}

function easeOutBounce(t, strenght, amplitude) {
  const n1 = strenght == undefined ? 7.5625 : strenght;
  const d1 = amplitude == undefined ? 2.75 : amplitude;

  if (t < 1 / d1) {
    return n1 * Math.pow(t, 2);
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
}

function easeInBounce(t) {
  return 1 - easeOutBounce(1 - t);
}

function easeInOutBounce(t) {
  return t < 0.5 ? (1 - easeOutBounce(1 - 2 * t)) / 2 : (1 + easeOutBounce(2 * t - 1)) / 2;
}

function spring(t, strenght, amplitude) {
  const s = strenght == undefined ? 7.5625 : strenght;
  const a = amplitude == undefined ? 2.75 : amplitude;

  return 1 - Math.pow(1 - t, 2) * ((2 * Math.sin(s * t)) / a + Math.cos(s * t));
}
