function userPrompt()
{
    var sideCount = prompt("The Kryptonite Salamander requests you enter a number between 3-12 and the name of the polygon will be presented!");
    sideCount = parseFloat(sideCount);
    validateEntry(sideCount);
}

function validateEntry(_sideCount)
{
    while(isNaN(_sideCount) || Math.abs(Math.round(_sideCount)) > 12 || Math.abs(Math.round(_sideCount)) < 3)
    {
        _sideCount = prompt("Invalid Entry! Enter a number between 3-12 and try again!");
    }

    getShape(Math.abs(Math.round(_sideCount)));
}

function getShape(_count)
{
    var polygons = [
                        "Triangle",
                        "Quadrilateral",
                        "Pentagon",
                        "Hexagon",
                        "Heptagon",
                        "Octagon",
                        "Enneagon",
                        "Decagon",
                        "Hendecagon",
                        "Dodecagon",
                    ]

    document.getElementById("polygon-output").innerHTML = "A polygon with " + _count + " sides is called a " + polygons[_count-3] + ".";
}