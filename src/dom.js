import { clickFunc, MainGame } from './Game';
import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';

function renderPBoard(game) {
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      if (game.grid[row][col].ship != null) {
        button.setAttribute('class', 'ship');
      }
      if (game.grid[row][col].bounded == true) {
        button.setAttribute('class', 'bounded');
      }
      button.setAttribute('id', `Com${row}${col}`);
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function renderEBoard(currentPlayer, enemy) {
  const game = currentPlayer.board;
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `p${row}${col}`);
      button.onclick = () => {
        clickFunc(currentPlayer, enemy, row, col);
        if (game.grid[row][col].ship != null) {
          button.setAttribute('class', 'ship');
        } else {
          button.innerHTML = '*';
          button.setAttribute('class', 'pressed');
        }
        button.onclick = null;
      };
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function renderComBoard(currentPlayer, enemy) {
  const game = currentPlayer.board;
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `s${row}${col}`);
      button.onclick = () => {
        clickFunc(currentPlayer, enemy, row, col);
        document.getElementById(`Com${row}${col}`).innerHTML = '*';
        if (game.grid[row][col].ship != null) {
          button.setAttribute('class', 'ship');
        } else {
          button.innerHTML = '*';
          button.setAttribute('class', 'pressed');
        }
        button.onclick = null;
      };
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function shipPosBoard(player, ship, hor) {
  document.getElementById('setup-board').innerHTML = ' ';
  const game = player.board;
  const boardOne = document.createElement('table');

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `s${row}${col}`);
      button.onclick = () => {
        player.board.putShip(ship, row, col, hor);
        shipPosBoard(player, ship, hor);
        button.onclick = null;
      };
      if (game.grid[row][col].ship != null) {
        button.setAttribute('class', 'ship');
        button.onclick = null;
      }
      if (game.grid[row][col].bounded == true) {
        button.setAttribute('class', 'bounded');
        button.onclick = null;
      }
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  document.getElementById('setup-board').appendChild(boardOne);

}

function shipPlacement(player) {
  const selectors = document.getElementById('selector');
  const direction = document.createElement('input');
  direction.type = 'checkbox';

  const carrierBtn = document.createElement('button');
  carrierBtn.innerHTML = 'Carrier L5';
  carrierBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[0], false);
    } else {
      shipPosBoard(player, player.board.ships[0], true);
    }
    
    carrierBtn.disabled = true;
  };

  const battleshipBtn = document.createElement('button');
  battleshipBtn.innerHTML = 'BattleShip L4';
  battleshipBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[1], false);
    } else {
      shipPosBoard(player, player.board.ships[1], true);
    }
    battleshipBtn.disabled = true;
  };
  const submarineBtn = document.createElement('button');
  submarineBtn.innerHTML = 'Submarine L3';
  submarineBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[2], false);
    } else {
      shipPosBoard(player, player.board.ships[2], true);
    }
    
    submarineBtn.disabled = true;
  };
  const destroyerBtn = document.createElement('button');
  destroyerBtn.innerHTML = 'Destroyer L3';
  destroyerBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[3], false);
    } else {
      shipPosBoard(player, player.board.ships[3], true);
    }
    
    destroyerBtn.disabled = true;
  };
  const patrolboatBtn = document.createElement('button');
  patrolboatBtn.innerHTML = 'PatrolBoat L2';
  patrolboatBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[4], false);
    } else {
      shipPosBoard(player, player.board.ships[4], true);
    }
    patrolboatBtn.disabled = true;
  };

  selectors.appendChild(carrierBtn);
  selectors.appendChild(battleshipBtn);
  selectors.appendChild(submarineBtn);
  selectors.appendChild(destroyerBtn);
  selectors.appendChild(patrolboatBtn);
  selectors.appendChild(direction);
}

const compPosition = (computerBoard) => {
  const shipAry = shuffle(computerBoard.ships);
  const iterator = [0, 1, 2, 3, 4];
  const coords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const vertHor = () => sampleSize([true, false], 1);
  const coorDice = () => sampleSize(coords, 1); 
  iterator.forEach(x => {
    computerBoard.putShip(shipAry[x], coorDice()[0], coorDice()[0], vertHor()[0])
  })
  return computer;
}

function dispInit(player1, player2) {
  shipPlacement(player1);
  document.getElementById('board-1').appendChild(renderPBoard(player1.board));
  document.getElementById('board-2').appendChild(renderEBoard(player2, player1));
  document.getElementById('board-3').appendChild(renderComBoard(player1, player2));
}

export default dispInit;
export { compPosition };