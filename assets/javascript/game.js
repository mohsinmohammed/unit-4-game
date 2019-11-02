
//Creating global variables
var targetNumber = Math.floor(Math.random() * (99)) + 21;
var numWins = 0, numLosses = 0, score = 0;

//We put initial values into the html tags
$("#number-to-guess").text(targetNumber);
$("#score").text(score);
$("#wins").text(numWins);
$("#losses").text(numLosses);
  

  // Creating multiple crystals each with their own unique number value.
  // We begin with an array of links to the crystal images.
  var crystalLinks = ["assets/images/crystal-1.jpg", "assets/images/crystal-2.jpg", "assets/images/crystal-3.jpg",  "assets/images/crystal-4.jpg"];
  var imageIds = ["pic1", "pic2", "pic3", "pic4"]
  var randomCrystalValue;
  // Next we have a loop to create crystals for all links.

  
  for (var i = 0; i < crystalLinks.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-images");

    // Each imageCrystal is given a src link to the crystal image
    imageCrystal.attr("src", crystalLinks[i]);
    imageCrystal.attr("id", imageIds[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // And data attribute is set equal to a random number between 1 and 12.
    randomCrystalValue = Math.floor(Math.random() * 10) + 2;
    imageCrystal.attr("data-crystalvalue", randomCrystalValue);

    // Crystal image is then added to the page.
    $("#crystals").append(imageCrystal);
  }

  
// function would reset the data-crystalvalue  
var resetCrystalValues = function(){
    for(var j=0; j<imageIds.length; j++){
        var setImageValue = $("#" + imageIds[j]);
         randomCrystalValue = Math.floor(Math.random() * 10) + 2;
         setImageValue.attr("data-crystalvalue", randomCrystalValue);
    }
};

  $(".crystal-images").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // The click on every crystal adds to the global score.
    score += crystalValue;

    $("#score").text(score);

    if (score === targetNumber) {
        alert("You win!");
    //increment the wins and reset values when score matches with target number
      numWins++;
      $("#wins").text(numWins);
      targetNumber = Math.floor(Math.random() * (99)) + 21;
      $("#number-to-guess").text(targetNumber);
      score = 0;
      $("#score").text(score);
      resetCrystalValues();

    }

    else if (score >= targetNumber) {
     // increment the loss counter and reset values when the score go more than target number
      numLosses++;
      $("#losses").text(numLosses);
      alert("You lose!!");
      targetNumber = Math.floor(Math.random() * (99)) + 21;
      $("#number-to-guess").text(targetNumber); 
      score = 0;
      $("#score").text(score);
      resetCrystalValues();
    }

  });