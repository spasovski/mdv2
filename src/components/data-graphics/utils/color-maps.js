/* eslint-disable import/prefer-default-export */

import { schemeTableau10 } from 'd3-scale-chromatic';

export function percentileLineColorMap(percentile) {
  const p = +percentile;
  if (p === 5) return 'var(--digital-blue-300)';
  if (p === 25) return 'var(--digital-blue-500)';
  if (p === 50) return 'var(--cool-gray-600)';
  if (p === 75) return 'var(--pantone-red-500)';
  if (p === 95) return 'var(--pantone-red-300)';
  return 'black';
}

export function percentileLineStrokewidthMap(percentile) {
  if (percentile === 50) return 1.5;
  return 1;
}

export function createCatColorMap(options) {
  // array of options should
  const getID = (value) => options.findIndex((v) => v === value);
  return function catColorMap(v) {
    const i = getID(v);
    if (i >= 10) {
      return 'var(--cool-gray-200)';
    }
    return schemeTableau10[i];
  };
}

export function genericCategoricalColorMap(v) {
  return schemeTableau10[v];
}
