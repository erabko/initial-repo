var player1 = 0;
var player2 = 0;

player1 = player1 + randomDiap(1, 6);
player2 = player2 + randomDiap(1, 6);
player1 = player1 + randomDiap(1, 6);
player2 = player2 + randomDiap(1, 6);
player1 = player1 + randomDiap(1, 6);
player2 = player2 + randomDiap(1, 6);


if (player1 > player2) {
  console.log('player1 win', player1 + ' > ' + player2);
} else if(player1 < player2) {
  console.log('player2 win', player1 + ' < ' +  player2);
} else ('draw', player1 + ' === ' + player2);

function  randomDiap(begin, end) {
  return Math.floor(Math.random() * (end - begin + 1)) + begin;
}