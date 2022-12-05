
function play(){

 var randomNumber1=Math.random();
 randomNumber1=Math.floor(randomNumber1 * 6) + 1;

 var randomdiceimage1="images/dice"+randomNumber1+ ".png ";

 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomdiceimage1);

 /*-------------------------------------------------------------*/

 var randomNumber2=Math.random();
 randomNumber2=Math.floor(randomNumber2 * 6) + 1;

 var randomdiceimage2="images/dice"+randomNumber2+ ".png ";

 var image2=document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomdiceimage2);

/*---------------------------------------------------------------*/

 if(randomNumber1>randomNumber2)
 {
  document.querySelector("h1").textContent="Player 1 wins";
 }
 else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins";
 }
 else{
    document.querySelector("h1").textContent="DRAW!";
 }
}
