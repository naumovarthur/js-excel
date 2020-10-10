import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Formula component
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  /**
   * Constructor
   * @param {Dom} $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  /**
   * HTML representation of formula
   * @return {string}
   */
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  /**
   * Event handler
   * @param {Event} event
   */
  onInput(event) {
    console.log(this.$root);
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  /**
   * Event handler
   * @param {Event} event
   */
  onClick(event) {}
}
