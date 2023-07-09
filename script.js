
count=0
//dynamically creating cell 
for (var i = 0; i < 9; i++) {
    var count = 9 * i;
    var html = "";
    for (var j = 0; j < 9; j++) {
      html += "<div class='cell'><input type='text' id='" + (count + j) + "' class='input'></div>";
    }
    document.getElementsByClassName("box")[i].innerHTML = html;
}


//how to play game button
function help(){
    window.open(
        "https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}


//game stetup code
function setupGame(difficulty) {
    var sudokuInput=generateSudoku(difficulty);
    for (let row = 0; row < 9; row++) {

        for(let col=0;col<9;col++){
            if(sudokuInput[row][col]){
              const i=coordinate_to_id[`${row},${col}`];
              var element = document.getElementById((i).toString());
              element.value = sudokuInput[row][col].toString();
              element.readOnly = true;
            }

        }
        
    }
}
  //start function
  
  function start() {
    for (var i = 0; i < 6; i++) {
      document.getElementsByClassName("label")[i].setAttribute("onclick", "return false;");
    }
  
    timer();

    if (document.getElementById("easy").checked) {
      setupGame("easy");
    } else if (document.getElementById("medium").checked) {
      setupGame("medium");
    } else {
      setupGame("hard");
    }
  
    document.getElementById("start").removeAttribute("onclick");
  }
  
//cheking the given input and in case of wrong live decrease by 1
var id = setInterval(function() {

    if (document.activeElement.className == "input") {
      var activeElement = document.activeElement;
      var activeElementId = activeElement.id;
      var activeElementValue = activeElement.value;
      var cell=id_to_coordinate[activeElementId];
      var row=cell.first;
      var col=cell.second;    
  
      if ( activeElementValue == currentArray[row][col] || activeElementValue == "" ) 
      {
          for (var i = 0; i < 81; i++) {
              if (i==80 && document.getElementById((i).toString()).value != "") {

                alert("You win! Congratulations...");
                clearInterval(id);
                window.location.reload();

              } else if (document.getElementById((i).toString()).value == "") {
                break;
              }
          }

      }
       else
      {
          if (document.getElementById("rem_live").innerHTML == 1) {
              document.getElementById("rem_live").innerHTML = 0;
              alert("You lost!");
              activeElement.value = "";
              window.location.reload();
          }else{
              alert("You chose the wrong number, you lose one life!");
              document.getElementById("rem_live").innerHTML =
                document.getElementById("rem_live").innerHTML - 1;
              activeElement.value = "";
        }
      }
    }
  }, 500);
  

//to show answer
function answer(){

   for (let i = 0; i < 81; i++) {
    const { first, second } = id_to_coordinate[i];
    

      const element = document.getElementById((i).toString());
      
      element.value=currentArray[first][second];
    }

}

//new game
function replay(){
    window.location.reload();
    start();
}

