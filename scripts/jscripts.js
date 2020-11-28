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
        console.log(codeString)
        if (user_input == '1620' || user_input == '1116' || user_input == '1110') {
            if (user_input == '1620') {
                document.querySelector('.secone').style.backgroundColor = 'green';
                break;
            }else if (user_input == '1116') {
                document.querySelector('.sectwo').style.backgroundColor = 'green';
                break;
            }else if (user_input == '1110') {
                document.querySelector('.secthree').style.backgroundColor = 'green';
                break;
            }
            console.log(i)
            continue;
        }else {
            courseListed.push(
                {
                    code: user_input,
                    date: 'Fall 2020',
                }
            )

            var divNewtwo = document.createElement("hr");

            var divNew = document.createElement("section");
            divNew.classList.add("coursesection");
            var secNew = document.createElement("section");
            secNew.classList.add("area1");
            secNew.append(courseListed[3].code);
            divNew.append(secNew);

            var secNewtwo = document.createElement("section");
            secNewtwo.classList.add("area2");
            secNewtwo.append('N/A');
            divNew.append(secNewtwo);

            var secNewthree = document.createElement("section");
            secNewthree.classList.add("area3");
            secNewthree.append(courseListed[3].date);
            divNew.append(secNewthree);

            var sectionNew = document.getElementById("bigSection");
            sectionNew.append(divNewtwo)
            sectionNew.append(divNew)
            break;
        }
    }
}

let courseList = createCourseArray()
findCourse(courseList);