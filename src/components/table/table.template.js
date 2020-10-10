const CODES = {
  A: 65,
  Z: 90,
};

/**
 * Closure function for creating cell template
 * @param {number} row
 * @return {function(string, number): string}
 */
function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-id="${row}:${col}"
       ></div>
    `;
  };
}

/**
 * Creates column
 * @param {string} content
 * @param {number} i
 * @return {string}
 */
function toColumn(content, i) {
  return `
    <div class="column" data-type="resizable" data-col="${i}">
      ${content}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

/**
 * Creates row
 * @param {string} content
 * @param {string|number} num
 * @return {string}
 */
function createRow(content, num = '') {
  const resizer = num ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${num}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

/**
 * Converts numbers to A-Z chars
 * @param {string} _
 * @param {number} i
 * @return {string}
 */
function toChar(_, i) {
  return String.fromCharCode(CODES.A + i);
}

/**
 * Combines toCell and toRow for creating table
 * @param {number} rowsCount
 * @return {string}
 */
export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('');

    rows.push(createRow(cells, row + 1));
  }

  return rows.join('');
}
