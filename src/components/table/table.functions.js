/**
 * Recognize resize availability
 * @param {Event} event
 * @return {boolean}
 */
export function shouldResize(event) {
  return !!event.target.dataset.resize;
}
