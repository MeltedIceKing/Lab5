const list_of_courses = [
    {code: "ACIT 1620",
    name: "Fundamental Web Techonologies",
    key: 1620},
    {code: "COMM 1116",
    name: "Business Communication"},
    {code: "ORGB 1110",
    name: "Organizational Behavior"},
]

let user_input = prompt("Please enter a 4 digit number: ");

if (user_input == null){
    user_input = prompt("Please enter a valid input for a 4 digit number");
}

var length_of_courses = list_of_courses.length;

for(var i = 0; i < length_of_courses; i++) {
    initial_boolean = false;
    course_key_number = list_of_courses[i].key;

    if (user_input === course_key_number) {
        console.log("Yes I am taking the course: " + list_of_courses[i].code + " " + list_of_courses[i].name);
    }else {
        initial_boolean = true;
    }
}

if (initial_boolean === true) {
    list_of_courses.push({
        code: user_input,
        name: null,
        key: parseInt(user_input)
    })
    console.log(list_of_courses)
    console.log("Succesfully added new course")
}