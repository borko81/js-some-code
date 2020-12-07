//exam time
function solve(...input){
    let exam_hour_start = Number(input[0]);
    let exam_minute_start = Number(input[1]);

    let student_arrive_hour = Number(input[2]);
    let student_arrive_minute = Number(input[3]);

    let exam = exam_hour_start * 60 + exam_minute_start;
    let student = student_arrive_hour * 60 + student_arrive_minute;

    console.log(student, exam);

    if ((exam - student) <= 30 && (exam - student) > 0) {
        console.log("On time");
    } else if (student > exam) {
        if ((student - exam) > 59) {
            console.log(`Late with ${(student - exam)  / 60}`);    
        } else {
            console.log(`Late with ${(student - exam)}`);
        }
    } else if ((exam - student) >= 60){
        console.log(`Early ${(exam - student) / 60}`);
    } else if ((exam - student) <= 59){
        console.log(`Early ${(exam - student)}`);
    }
}


solve("11",
"30",
"12",
"29")