/**
 * Helper for table selection
 */
export class TableSelection {
  /**
   * Constructor
   */
  constructor() {
    this.group = [];
  }

  /**
   * Adds element to selection
   * @param {Dom} $el
   */
  select($el) {
    this.group.push($el);
  }

  // selectGroup() {}
}
