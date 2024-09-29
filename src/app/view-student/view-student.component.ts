import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [NgFor, RouterModule, RouterOutlet],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.scss'
})
export class ViewStudentComponent {

  studentData: any[] = []; 

  constructor(@Inject(Router) private router: Router) {}
  deleteData(studentId: Number): void {
    const existingStudents = JSON.parse(localStorage.getItem("Student-data") || '[]');
    existingStudents.splice(existingStudents.findIndex((student: any) => student['student-id'] === studentId), 1); 
    localStorage.setItem("Student-data", JSON.stringify(existingStudents));
    this.loadStudents(); 
  }
  editData(studentId: string): void {
    const existingStudents = JSON.parse(localStorage.getItem("Student-data") || '[]');
    const studentToEdit = existingStudents.find((student: any) => student['student-id'] === studentId); 
    this.router.navigate(['edit-student'], { queryParams: studentToEdit });
    this.loadStudents(); 
  }
 

  ngOnInit() {
    this.loadStudents(); 
  }

  loadStudents() {
    const existingStudents = JSON.parse(localStorage.getItem("Student-data") || '[]');
    this.studentData = existingStudents; // Assign to studentData
  }
  trackById(index: number, student: any): string {
    return student['student-id']; // Use the unique ID for tracking
  }


}
