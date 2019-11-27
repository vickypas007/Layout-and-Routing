import { StudentService } from './../student.service';
import { Student } from './../student-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
students : Student[] =[];

  constructor(public studentservice : StudentService) { }

  ngOnInit() {
    const studentObservable = this.studentservice.getStudent();
    studentObservable.subscribe(arg =>
        {
          this.students = arg
        } );
    
  }

}
