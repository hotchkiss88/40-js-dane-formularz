let objectForm = document.getElementById("form");
let objectOne = document.getElementById("one");
let objectTwo = document.getElementById("two");
let objectThree = document.getElementById("three");
let objectName = document.getElementById("name");
let objectSurname = document.getElementById("surname");
let objectPhone = document.getElementById("phone");
let objectKnop = document.getElementById("knop");

objectKnop.onclick = function myF() {

    if (objectOne.value.length > 0) {
        objectName.textContent = objectOne.value;
    }
    if (objectTwo.value.length > 0) {
        objectSurname.textContent = objectTwo.value;
    }
    if (objectOne.value.length > 0) {
        objectName.textContent = objectOne.value;
    }
    if (objectThree.value.length > 0) {
        objectPhone.textContent = objectThree.value;
    }

    return myF;
}