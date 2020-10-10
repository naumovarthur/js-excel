import {$} from '@core/dom';

/**
 * Root component of app
 */
export class Excel {
  /**
   * Constructor
   * @param {string} selector
   * @param {object} options
   */
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  /**
   * Getter for root field
   * @return {HTMLElement|Dom}
   */
  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);

      return component;
    });
    return $root;
  }

  /**
   * Renders all components to DOM
   */
  render() {
    this.$el.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }
}
