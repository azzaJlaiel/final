import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  futureDate: Date = new Date('28.05.2022');
  currentDate: Date = new Date();
  date1: Date = new Date();
  date2: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
  /*isDateEqual() {
    if (this.date1.getTime() === this.date2.getTime())
      return true;
    return false;
  }*/
  compareDates(){
    if(this.futureDate.getTime()<this.currentDate.getTime()){
      console.log("date1 is before current date")
    }
    return true;
    
  }
   
}
