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
    if (actualTurn && !fieldsX.includes(e.currentTarget.id)) {
      fieldsX.push(parseInt(e.currentTarget.id));
      console.log(fieldsX);
    } else if (!actualTurn && !fieldsY.includes(e.currentTarget.id)) {
      fieldsY.push(parseInt(e.currentTarget.id));
      console.log(fieldsY);
    }
    actualTurn = !actualTurn;
  });
});
//END Game support
