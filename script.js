let result = '';
    let score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      Lose: 0,
      Tie: 0,
    };

    scoreUpdate();

    function playerMove(Move) {
      let computerMove = pickcomputerMove();

      if (Move === 'Rock') {
        if (computerMove === 'Rock')
          result = 'Tie';
        else if (computerMove === 'Paper')
          result = 'You Lose';
        else
          result = 'You Win';
      }
      else if (Move === 'Paper') {
        if (computerMove === 'Rock')
          result = 'You Win';
        else if (computerMove === 'Paper')
          result = 'Tie';
        else
          result = 'You Lose';
      }
      else if (Move === 'Scissor') {
        if (computerMove === 'Rock')
          result = 'You Lose';
        else if (computerMove === 'Paper')
          result = 'You Win';
        else
          result = 'Tie';
      }

      if (result === 'You Win')
        score.win++;
      else if (result === 'You Lose')
        score.Lose++;
      else if (result === 'Tie')
        score.Tie++;

      document.querySelector('.js-status').innerHTML = `You <img src="../Images/${Move}-emoji.png" alt="" width="60px">
      <img src="../Images/${computerMove}-emoji.png" alt="" width="60px"> Computer`;
      document.querySelector('.js-move').innerHTML = result;
      scoreUpdate();
      localStorage.setItem('score', JSON.stringify(score));


    }

    function scoreUpdate() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win}, Lose: ${score.Lose}, Tie: ${score.Tie}`;
    }

    function pickcomputerMove() {
      let computerMove = '';

      const randomNumber = Math.random();
      if (randomNumber > 0 && randomNumber <= 1 / 3) {
        computerMove = 'Rock';
      }
      else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'Paper';
      }
      else if (randomNumber > 2 / 3 && randomNumber <= 1) {
        computerMove = 'Scissor';
      }

      return computerMove;
    }

