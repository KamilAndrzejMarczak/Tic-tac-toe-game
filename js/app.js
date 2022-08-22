// START Generate Board
let actualTurn = true; // true - X turn | false - Y turn
let board = document.querySelector('#board');
let fields = '';
let fieldsX = [];
let fieldsY = [];
const winFields = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < 9; i++) {
  fields += `<div class="field" id = '${i}'></div>`;
}
board.innerHTML = fields;
// END Generate Board
//START Game support
let field = document.querySelectorAll('.field');
field.forEach((element) => {
  element.addEventListener('click', (e) => {
    const id = e.currentTarget.id;
    if (actualTurn && !fieldsX.includes(id)) {
      fieldsX.push(parseInt(id));
      document.getElementById(id).innerHTML = 'X';
    } else if (!actualTurn && !fieldsY.includes(id)) {
      fieldsY.push(parseInt(id));
      document.getElementById(id).innerHTML = 'O';
    }
    actualTurn = !actualTurn;
  });
});
//END Game support
