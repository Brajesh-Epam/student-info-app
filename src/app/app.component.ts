
import { Component, Inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from "./view-student/view-student.component";
import { EditStudentComponent } from './edit-student/edit-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AddStudentComponent, ViewStudentComponent, EditStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(Router) private router: Router) {}

  activeButton: String = '';

  redirectURL(route: string): void {
    this.activeButton = route; 
    if (route === 'add') {
      this.router.navigate(['/add-student']);
    } else if (route === 'view') {
      console.log("hello")
      this.router.navigate(['/view-student']);
    }
  }
}
