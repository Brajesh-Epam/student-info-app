import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  student: any = {
    id: 'A1000' + (localStorage.getItem("Student-data") ? JSON.parse(localStorage.getItem("Student-data") || '[]').length : 0) +  'Z'
  };
  studentForm: FormGroup;

  constructor() {
    this.studentForm = new FormGroup({
      'student-id': new FormControl({ value: this.student.id, disabled: true }), // Readonly
      'student-name': new FormControl('', { validators: [Validators.required] }),
      'student-age': new FormControl('', { validators: [Validators.required, Validators.min(18), Validators.max(100)] }),
      'course-enrolled': new FormControl('', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(35)] }),
      'student-email': new FormControl('', { validators: [Validators.required, Validators.email] }),
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      const formData = this.studentForm.value; 
      formData['student-id'] = this.student.id;
      const existingStudents = JSON.parse(window.localStorage.getItem("Student-data") || '[]');
      existingStudents.push(formData);
      window.localStorage.setItem("Student-data", JSON.stringify(existingStudents));
      this.studentForm.reset();
      window.location.reload();
    } else {
      alert('Form is invalid. Please correct the errors.');
    }
  }
  
}
