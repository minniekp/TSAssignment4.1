namespace StudentNameSpace {
    export interface Student {
      name: string;
      email: string;
      id: number;
    }
  
    export function StudentDetail(student: Student) {
      console.log(` The student details are : name ${student.name} , 
       Email ${student.email} and the student id is ${student.id}`);
    };
  }