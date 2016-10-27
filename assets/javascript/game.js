//Data created for each player
var jonathan = {
  name: "Jonathan",
  health: 100,
  attack: 10,
  constant: 10,
  counter: 5,
};

var chiefHopper = {
  name: "Chief Hopper",
  health: 120,
  attack: 18,
  constant: 18,
  counter: 10,
  wins: 0,
};

var eleven = {
  name: "Eleven",
  health: 150,
  attack: 25,
  constant: 25,
  counter: 20,
};

var monster = {
  name: "Monster",
  health: 180,
  attack: 20,
  constant: 20,
  counter: 10,
};

$(document).ready(function(){

  //Begin fighter click function  
  $('.chooseCharacter').on('click', character);
  $('.chooseCharacter').click(function(){
    $('.chooseCharacter').off('click', character);
  });
    
  //Begin opponent click function
  $('.enemySection').on('click', defender);
  $('.enemySection').click(function(){
  });

  //Activate attack function
  $('#fight').click(attack);

}); 

//Function to append yourCharacter and enemies available to their respective sections
function character(){
  $('.enemySection').append($('.chooseCharacter'));
  $('.yourSection').append(this);
} 
//Function to append opponent to respective section
function defender(event){
  $('.defense').append($(event.target).parents('.chooseCharacter'));  
} 

function attack(){
//statemnets to attach to attacker
var fighter = $('.yourSection div span:first').text();
if(fighter == "Jonathan"){
  fighter = jonathan;
  $('#score1').html(fighter.health);
}
if(fighter == "Chief Hopper"){
  fighter = chiefHopper;
  $('#score2').html(fighter.health);
}
if(fighter == "Eleven"){
  fighter = eleven;
  $('#score3').html(fighter.health);
}
if(fighter == "Monster"){
  fighter = monster;
  $('#score4').html(fighter.health);
}

//Statements attach to opponents
var opponent = $('.defense div span:first').text();
if(opponent == "Jonathan"){
  opponent = jonathan;
  $('#score1').html(opponent.health);
}
if(opponent == "Chief Hopper"){
  opponent = chiefHopper;
  $('#score2').html(opponent.health);
}
if(opponent == "Eleven"){
  opponent = eleven;
  $('#score3').html(opponent.health);
}
if(opponent == "Monster"){
  opponent = monster;
  $('#score4').html(opponent.health);
}

//jQuery for current attacks and counter attacks
$('#caption1').html('You attacked ' + opponent.name + ' for ' + fighter.attack + ' damages' + 
  '<br>' + opponent.name + ' attacked you back for ' + opponent.counter + ' damages');
$('#caption2').empty();


  
//Begin logic statements to determ if opponett or fighter wins game 
if(fighter.health >= 0 && opponent.health <= 0){
  fighter.wins++
  console.log(fighter.wins);
  $('#caption2').html('You have killed ' + opponent.name + ' you can choose to fight another player');
  $('.defense div').empty();
  $('#caption1').empty();
  console.log('You win');
}
else if(opponent.health >= 0 && fighter.health <= 0){
  $('#caption2').html('You have been sent to the UPSIDE DOWN!');
  $('#caption1').empty();
  $('#billboard').append('<button id="startOver">Reset</button>');
  $('#startOver').click(reset); 
  console.log('You win');
  
}
else if(fighter.wins == 3){
  $('#caption1').html('You win game over!!!');
  $('#billboard').append('<button id="startOver">Reset</button>');
  $('#startOver').click(reset);
  console.log('you win all');
}

//Statements to update players health and display current attack and counter attack numbers
opponent.health -= fighter.attack;
fighter.health -= opponent.counter;
fighter.attack += fighter.constant;

}

//reset game loss or if game is won
function reset(){
  location.reload();
}


function disable(){
  $('#caption2').html('You have been defeated game over');
}

function no(){
  $('#billboard').append('No');
}
