//default
$("p").hide();
$("button").click(function(){
    $("p").fadeIn();
});
$("button").click(function(){
    var age = $(".age").val(); 
    var days = 11244;
    $(".blank1").text(age * days);
});

$("button").click(function(){
    var watch = $(".watch").val();
    var week = 823;
    $(".blank2").text(watch * week);
});

$("button").click(function(){
    var food = $(".food").val(); 
    $(".blank3").text(food);
});

$("button").click(function(){
    var time = $(".times").val();
    var month =  969;
    $(".blank4").text(time * month);
});