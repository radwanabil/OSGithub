//Lab1 task1
var firstName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: ");
if (firstName.length > 0 && firstName != "null" && lastName.length > 0 && lastName != "null") {
    alert('your name is ' + firstName + " " + lastName);
    console.log(firstName + lastName);
    var birthYear = prompt("Please enter your birth year: ");
    if (isNaN(birthYear)) {
        alert('Please enter you birth year correctly');
    } else {

        var age = 2023 - Number(birthYear);
        alert("Welcome " + firstName + " " + lastName + " you are " + age + " years old");
    }
} else {
    alert('your name is anonymous');
}

