/**
 * Dom wrapper
 */
class Dom {
  /**
   * Constructor
   * @param {*} selector
   */
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  /**
   * Adds html to Dom
   * @param {string} html
   * @return {string|Dom}
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  /**
   * Removes all content from Dom element
   * @return {Dom}
   */
  clear() {
    this.html('');
    return this;
  }

  /**
   * Adds event listener from Dom element
   * @param {string} eventType
   * @param {function} callback
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  /**
   * Removes event listener from Dom element
   * @param {string} eventType
   * @param {function} callback
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  /**
   * Adds element to DOM element
   * @param {Dom} node
   * @return {Dom}
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  /**
   * Finds closest DOM element upper in DOM tree
   * @param {string} selector
   * @return {Dom}
   */
  closest(selector) {
    return $(this.$el.closest(selector));
  }

  /**
   * Return all coordinates of element
   * @return {DOMRect}
   */
  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  /**
   * Returns dataset of DOM element
   * @return {DOMStringMap}
   */
  get data() {
    return this.$el.dataset;
  }

  /**
   * Find DOM element by selector
   * @param {string} selector
   * @return {Dom}
   */
  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  /**
   * Finds all elements by selector
   * @param {string} selector
   * @return {HTMLElement[]}
   */
  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  /**
   * Adds styles to DOM object
   * @param {object} styles
   */
  css(styles = {}) {
    Object
        .keys(styles)
        .map((key) => this.$el.style[key] = styles[key]);
  }
}

/**
 * Wrapper for creating DOM objects
 * @param {*} selector
 * @return {Dom}
 */
export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
