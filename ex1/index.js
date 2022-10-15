//1
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hour = today.getHours();
var min = today.getMinutes();

var suffix = (hour >= 12) ? " PM" : " AM";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === "0" && suffix === " PM") {
    if (min === "0" && sec === "0") {
        hour = 12;
        suffix = " Noon";
    }
}
else if (hour === "0" && suffix === " AM") {
    if (min === "0" && sec === "0") {
        hour = 12;
        suffix = " Midnight";
    }
}

var todayHTML = document.getElementById("Day");
var timeHTML = document.getElementById("Time");

todayHTML.innerHTML = "Today is: " + daylist[day];
timeHTML.innerHTML = "Current time is: " + hour + suffix + " " + min;

//2
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

//3
fetch('https://httpbin.org/cookies', {
    headers: {
        Cookie: 'xxx=yyy'
    }
}).then(response => response.json())
    .then(data => console.log(JSON.stringify(data, null, 2)));

//4
const checkjs = obj => {
    try {
        JSON.parse(obj);
        return true;
    } catch (i) {
        return false;
    }
};
console.log(checkjs('{"Myname":"Loc","age":21}'));
console.log(checkjs('{"Myname":"Loc",age:"21"}'));
console.log(checkjs(null));






