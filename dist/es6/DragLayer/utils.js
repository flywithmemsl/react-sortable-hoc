import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import { clamp } from '../utils';

export function distanceRect(x, y, rect) {
  var dx = x - clamp(x, rect.left, rect.right);
  var dy = y - clamp(y, rect.top, rect.bottom);

  return Math.sqrt(dx * dx + dy * dy);
}

export function closestRect(x, y, containers) {
  var distances = containers.map(function (c) {
    return distanceRect(x, y, c.getBoundingClientRect());
  });
  return distances.indexOf(Math.min.apply(Math, _toConsumableArray(distances)));
}