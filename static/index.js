var trump = 0;
var blm = 206;

function addTrump() {
    trump = trump + 1;
    document.getElementById('trump').innerHTML = "<p>Total Trump: " + trump + "</p>";
}

function addBLM() {
    blm = blm + 1;
    document.getElementById('blm').innerHTML = "<p>Total BLM: " + blm + "</p>";
    document.getElementById('message').innerHTML = "<h1>There are currently " + blm + " BLM supporters here.<br />I support #BlackLivesMatter</h1>";
}
