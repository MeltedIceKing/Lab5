const list_of_courses = []

let createCourseArray  = function(courseCode, courseDate){
    list_of_courses.push(
        {
            code: courseCode,
            date: courseDate,
        }
    )
}

//get the inner hmtl values for course list by using queryselector getelements by id and class name

let user_input = prompt("Please enter a 4 digit number");

while (user_input.length !== 4){
    user_input = prompt("Please enter a  valid 4 digit number");
}

var length_of_courses = list_of_courses.length;
console.log(length_of_courses)

for(var i = 0; i < length_of_courses; i++) {
    course_key_number = list_of_courses[i].class_key
    console.log(course_key_number)
    var initial_boolean = false

    if (user_input == course_key_number) {
        console.log("Yes I am taking the course: " + list_of_courses[i].code + " " + list_of_courses[i].name);
        initial_boolean = false
        break;
    }else if (user_input !== course_key_number) {
        initial_boolean = true
    }
}

if (initial_boolean === true) {
    list_of_courses.push({
        code: user_input,
        name: null,
        class_key: parseInt(user_input)
    })
    console.log(list_of_courses)
    console.log("Succesfully added new course")
}