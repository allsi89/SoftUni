function studentInfo(name, age, grade) {
    let studentName = name;
    let studentAge = Number(age);
    let studentGrade = Number(grade).toFixed(2);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade}`);
}
studentInfo("pesho", 15, 5);