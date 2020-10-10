const CODES = {
  A: 65,
  Z: 90
}

function toCell(_, i) {
  return `
    <div class="cell" contenteditable data-col="${i}"></div>
  `
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

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
