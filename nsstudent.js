var StudentNameSpace;
(function (StudentNameSpace) {
    function StudentDetail(student) {
        console.log(" The student details are : name " + student.name + " , \n       Email " + student.email + " and the student id is " + student.id);
    }
    StudentNameSpace.StudentDetail = StudentDetail;
    ;
})(StudentNameSpace || (StudentNameSpace = {}));
