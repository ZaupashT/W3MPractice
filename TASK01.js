var EnglishMarks = 88;
var UrduMarks = 70;
var avg = (EnglishMarks + UrduMarks) / 2;
var grade;
if (avg >= 80) {
    grade = "A";
}
else if (avg >= 70 && avg < 80) {
    grade = "B";
}
else if (avg >= 65 && avg < 70) {
    grade = "C";
}
else if (avg >= 60 && avg < 65) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Grade: ".concat(grade));
