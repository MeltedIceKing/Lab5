let createCourseArray = () => {
    let dictOfCourses = [];

    let coursesList = document.getElementsByClassName("coursename")
    console.log(coursesList)
    let datesList = document.getElementsByClassName('schoolyear')

    for (let i = 0; i < coursesList.length; i++) {
        let codeList = coursesList[i].innerHTML;
        let dateList = datesList[i].innerHTML;
        dictOfCourses.push(
            {
                code: codeList,
                date: dateList,
            }
        )
    return dictOfCourses;
    }
}

let courseList = createCourseArray()

let findCourse = (courseListed) => {
    let user_input = prompt("Please enter a 4 digit number");

    while (user_input.length !== 4 || user_input == '    '){
        user_input = prompt("Please enter a  valid 4 digit number");
    }

    for (let j = 0; j < courseListed.length; j++){
        codeStringList = (courseListed[j].code).split(" ");
        if (codeStringList[1] == user_input) {
            console.log('it worked holy shit')
        } 
    }
}

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