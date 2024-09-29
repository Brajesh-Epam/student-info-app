import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.studentForm = new FormGroup({
      'student-id': new FormControl(''),
      'student-name': new FormControl(''),
      'student-age': new FormControl(''),
      'course-enrolled': new FormControl(''),
      'student-email': new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentForm.patchValue(params);
    });
  }

  updateStudent() {
    if (this.studentForm.valid) {
        const updatedStudent = this.studentForm.value; 
        
        const existingStudents = JSON.parse(localStorage.getItem("Student-data") || '[]');
        console.log('Existing Students:', existingStudents);
        console.log('Updated Student:', updatedStudent);
        const index = existingStudents.findIndex((student:any) => student['student-id'] === updatedStudent['student-id']);
        if (index !== -1) {
            existingStudents[index] = updatedStudent;
            localStorage.setItem("Student-data", JSON.stringify(existingStudents));
            console.log('Updated Students:', existingStudents);
            this.router.navigate(['/view-student']);
        } else {
            alert('Student not found.');
        }
    } else {
        alert('Form is invalid. Please correct the errors.');
    }
  }
}
 