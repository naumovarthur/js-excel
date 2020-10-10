import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';

/**
 * Table component
 */
export class Table extends ExcelComponent {
  static className = 'excel__table'

  /**
   * Constructor
   * @param {Dom} $root
   */
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  /**
   * HTML representation of table
   * @return {string}
   */
  toHTML() {
    return createTable(100);
  }

  /**
   * Init table component
   */
  init() {
    super.init();
    this.selection = new TableSelection();
    this.selection.select();
  }

  /**
   * Event handler
   * @param {Event} event
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
