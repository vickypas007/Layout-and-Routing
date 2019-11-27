import { StudentService } from './student.service';
import { Student } from './student-model';
import { Component, OnInit   } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'routing-project';
  students: Student[] = [];

  constructor(private studentservice: StudentService) {}

  ngOnInit() {
      const studentsObservable = this.studentservice.getStudent();
      studentsObservable.subscribe((studentsData: Student[]) => {
          this.students = studentsData;
      });
  }

}
