const CODES = {
  A: 65,
  Z: 90,
}

function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-type="cell"
        data-id="${row}:${col}"
       ></div>
    `
  }
}

function toColumn(content, i) {
  return `
    <div class="column" data-type="resizable" data-col="${i}">
      ${content}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, num = '') {
  const resizer = num ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${num}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')

    rows.push(createRow(cells, row + 1))
  }

  return rows.join('')
}
