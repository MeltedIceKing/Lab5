let createCourseArray = () => {
    let dictOfCourses = [];

    var coursesList = document.getElementsByClassName("coursename")
    var datesList = document.getElementsByClassName('schoolyear')

    for (let i = 0; i < coursesList.length; i++) {
        
        dictOfCourses.push(
            {
                code: coursesList[i].innerHTML,
                date: datesList[i].innerHTML,
            }
        )
    }
    console.log(dictOfCourses)
    return dictOfCourses;
}

let findCourse = (courseListed) => {
    let user_input = prompt("Please enter a 4 digit number");

    while (user_input.length !== 4 || user_input == '    '){
        user_input = prompt("Please enter a  valid 4 digit number");
    }

    for (let i = 0; i < courseListed.length; i++){
        let codeString = courseListed[i].code.substring(5, 9)
        if (codeString == user_input) {
            console.log('it worked holy shit')
            document.querySelector('.coursesection')
        } 
    }
}

let courseList = createCourseArray()
findCourse(courseList);


// var length_of_courses = list_of_courses.length;
// console.log(length_of_courses)

// for(var i = 0; i < length_of_courses; i++) {
//     course_key_number = list_of_courses[i].class_key
//     console.log(course_key_number)
//     var initial_boolean = false

//     if (user_input == course_key_number) {
//         console.log("Yes I am taking the course: " + list_of_courses[i].code + " " + list_of_courses[i].name);
//         initial_boolean = false
//         break;
//     }else if (user_input !== course_key_number) {
//         initial_boolean = true
//     }
// }

// if (initial_boolean === true) {
//     list_of_courses.push({
//         code: user_input,
//         name: null,
//         class_key: parseInt(user_input)
//     })
//     console.log(list_of_courses)
//     console.log("Succesfully added new course")
// }