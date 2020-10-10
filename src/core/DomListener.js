import {capitalize} from './utils';

/**
 * Base class for all components
 */
export class DomListener {
  /**
   * Constructor
   * @param {Dom} $root
   * @param {string[]} listeners
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  /**
   * Adds all event listeners to component
   */
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented on ${this.name} component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  /**
   * Removes all listeners from component
   */
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

/**
 * Converts event name to method name
 * @param {string} eventName
 * @return {string}
 */
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
