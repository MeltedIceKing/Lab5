const list_of_courses = [
    {code: "ACIT 1620",
    name: "Introduction to System Administration"},
    {code: "COMM 1116",
    name: "Introduction to System Administration"},
    {code: "ORGB 1110",
    name: "Introduction to System Administration"},
]

let user_input = prompt("Please enter a 4 digit number: ");

if (user_input == null){
    user_input = prompt("Please enter a valid input for a 4 digit number")
}