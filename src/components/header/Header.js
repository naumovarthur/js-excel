import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Header component
 */
export class Header extends ExcelComponent {
  static className = 'excel__header'

  /**
   * HTML representation of header
   * @return {string}
   */
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица">
      <div>
        <div class="button">
          <i class="material-icons">delete</i>
        </div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}
