import {DomListener} from '@core/DomListener';

/**
 * Base component for all others
 */
export class ExcelComponent extends DomListener {
  /**
   * Constructor
   * @param {Dom} $root
   * @param {object} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  /**
   * Returns component's template
   * @return {string}
   */
  toHTML() {
    return '';
  }

  /**
   * Method is called in render method of root component
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * Method is called in render method of root component
   */
  destroy() {
    this.removeDOMListeners();
  }
}
