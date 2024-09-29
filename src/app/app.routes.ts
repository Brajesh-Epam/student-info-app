import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component'; 
import { ViewStudentComponent } from './view-student/view-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'view-student', component: ViewStudentComponent },
  { path: 'edit-student', component: EditStudentComponent}
];

// Typically, you may also export RouterModule like this
export const AppRoutingModule = RouterModule.forRoot(routes);