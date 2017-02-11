function clicked(){
  console.log("it's been clicked");
  document.getElementById("changetext").innerHTML = selectIt();

}

var TextOptions = ["Bad call", "that was silly", "I cant believe youve done this", "wow", "That was terrible", "please not again"];




function selectIt(){
    var rand = Math.round(Math.random() * 5);
console.log(rand);
        var elem = TextOptions[rand];

    return elem;
}

console.log(TextOptions);
