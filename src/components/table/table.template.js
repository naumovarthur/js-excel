const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return /* html*/ `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(content) {
  return /* html*/ `
    <div class="column">${content}</div>
  `
}

function createRow(content, num = '') {
  return /* html*/ `
    <div class="row">
      <div class="row-info">${num}</div>
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
