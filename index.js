var userClickedPattern=[];

var colors= ["red","blue","green", "yellow"];
var pattern=[];
var start=false;
var level=0;
$(document).keypress(function(){
    if(!start){
        $("#level-tite").text("level"+level);
        sequence();
        start=true;
    }
});

$(".btn").click(function (){
    var userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    
    playsound(userChosenColor);
    animatePress(userChosenColor)
});

function sequence(){
    level++;
    $("#level-title").text("level " + level);
    var randomNUmber= Math.floor(Math.random() *4);
    var sequenceColor= colors[randomNUmber];
    pattern.push(sequenceColor); 

    $("#"+sequenceColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playsound(sequenceColor);
}

function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },100)
}