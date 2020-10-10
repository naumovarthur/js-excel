import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Toolbar component
 */
export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  /**
   * Constructor
   * @param {Dom} $root
   */
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  /**
   * HTML view of component
   * @return {string}
   */
  toHTML() {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>
      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>
      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>
      <div class="button">
        <i class="material-icons">format_underline</i>
      </div>
    `;
  }

  /**
   * Event handler
   * @param {Event} event
   */
  onClick(event) {
    console.log(event.target);
  }
}
