import { Student } from './student-model';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students : Student[] = [{
    id: 1,
    name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
  id: 2,
    name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
}

  ];

  constructor() { }

  public getStudent():any{
    const studentObservable = new Observable(observable =>{
      setTimeout(() =>{
        observable.next(this.students);
      }, 2000)
    });
    return studentObservable;
  }
}
