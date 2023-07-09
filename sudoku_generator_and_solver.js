currentArray=[];
//sudoku generator and solver by using backtracking algorithm
function generateSudoku(difficulty) {
    const grid = [];
    var K;
    if(difficulty=="easy"){
        K=21;
    }else if(difficulty=="medium"){
        K=31;
    }else{
        K=41;
    }

    // Function to check if a number can be placed in a specific cell
    function isValid(row, col, num) {
      // Check row
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num) {
          return false;
        }
      }

      // Check column
      for (let i = 0; i < 9; i++) {
        if (grid[i][col] === num) {
          return false;
        }
      }

      // Check 3x3 box
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }

      return true;
    }

    // Function to fill diagonal 3x3 matrices
    function fillDiagonal() {
      //filling upper diagonal
      var startRow=0,startCol=0;
      var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          const randomIndex = Math.floor(Math.random() * nums.length);
          const num = nums[randomIndex];
          nums.splice(randomIndex, 1);
          grid[i][j] = num;
        }
      }

      //filling middle diagonal
      startRow=3,startCol=3;
      nums=[1, 2, 3, 4, 5, 6, 7, 8, 9];

      for(let i=startRow;i<startRow+3;i++){
          for(let j=startCol;j<startCol+3;j++){
            const randomIndex = Math.floor(Math.random() * nums.length);
            const num = nums[randomIndex];
            nums.splice(randomIndex, 1);
            grid[i][j] = num;
          }
      }

      //filling lower diagonal
      startRow=6,startCol=6;
      nums=[1, 2, 3, 4, 5, 6, 7, 8, 9];

      for(let i=startRow;i<startRow+3;i++){
        for(let j=startCol;j<startCol+3;j++){
          const randomIndex = Math.floor(Math.random() * nums.length);
          const num = nums[randomIndex];
          nums.splice(randomIndex, 1);
          grid[i][j] = num;
        }
      }

      
    }

    // Function to recursively fill the remaining non-diagonal cells
    function fillRemaining(row, col) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] == 0) {
            for (let c = 1; c <= 9; c++) {
              if (isValid(i, j, c)) {
                grid[i][j] = c;
    
                if(fillRemaining(i,j)) {
                  return true;
                } else {
                  grid[i][j] = 0;
                }
              }
            }
    
            return false;
          }
        }
      }
    
      return true;
    }

    // Initialize grid with zeroes
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9).fill(0));
    }
    
    function remove_K_element(K){
      const chosenCells = new Set();

      while (chosenCells.size < K) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        const cell = `${row}-${col}`;

        if (!chosenCells.has(cell)) {
          chosenCells.add(cell);
          grid[row][col] = 0;
        }
      }

    }

      while(1){
        fillDiagonal();
        if(fillRemaining(0, 0)) break;
      }
    

      currentArray = JSON.parse(JSON.stringify(grid));
      remove_K_element(K);
      return grid;
  }




