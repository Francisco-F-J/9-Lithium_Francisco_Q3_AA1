//I. string variable declarations
//II. number variable declarations
//III. constant variable declarations and assignments
//IV. boolean variable declarations
//V. other variable declarations (file receivers)
let prof_file;
let real_name;
let gender_housing;
let username;
let description;
let b_yr;

prof_file = prompt("Type the complete link (external file) or complete file path (internal file) for your profile picture");
real_name = prompt("Put your real full name here. (Frist name, Middle Initial, Family name)")
gender_housing = prompt("Biological sex input here. (M = male, F = female)");
username = prompt("Please enter your username here.")
description = prompt("Tell us how you describe yourself.")
b_yr = prompt("Put your birth year here.")

alert ("Customization complete!!!")

document.getElementById("ppic").src = prof_file;
document.getElementById("fname").innerHTML = real_name;
if (gender_housing = "M") {
    document.getElementById("gender").innerHTML = "Male";
}
else if (gender_housing = "F") {
    document.getElementById("gender").innerHTML = "Female";
}
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = b_yr;
document.getElementById("age").innerHTML = 2023 - b_yr;
