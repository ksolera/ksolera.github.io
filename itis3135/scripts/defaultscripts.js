function getResponce()
{
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML ="The Kryptonite Salamander welcomes you, " + name + "! We are glad you are doing " + feeling + "!";
}

var today = new Date();
document.getElementById("timeanddate").innerHTML = "It is " + today.toLocaleTimeString() + " on " + today.toDateString();