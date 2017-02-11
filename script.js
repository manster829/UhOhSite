function clicked() {
    console.log("it's been clicked");
    document.getElementById("changetext").innerHTML = selectIt();

}

var TextOptions = ["Bad Call", "That Was Silly", "I Can't Believe You've Done This", "Wow", "That Was Terrible", "Please Don't Do That Again", "You Have Goofed", "Uh Oh", "Can You Not?", "That Was A Mistake"];

function selectIt() {
    var rand = Math.round(Math.random() * 9);
    console.log(rand);
    var elem = TextOptions[rand];
    return elem;
}

console.log(TextOptions);
