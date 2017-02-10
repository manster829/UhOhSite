function clicked(){
  console.log("it's been clicked");
  document.getElementById("changetext").innerHTML = selectIt();

}

var TextOptions = ["Bad call", "that was silly", "I cant believe youve done this"];


var i = 0;

function selectIt(){

    var elem = TextOptions[i];
    i++;
    return elem;
}

console.log(TextOptions);
