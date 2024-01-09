import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  firstFloor:{id:number,name:string}[]=[{id:1,name:"Rahul"},{id:2,name:"Sachin"}];
  secondFloor:{id:number,name:string}[]=[{id:3,name:"dhoni"},{id:4,name:"SKY"}];
  thirdFloor:{id:number,name:string}[]=[{id:5,name:"Sudhanshu"},{id:6,name:"praveen"}];

  floors = [this.firstFloor,this.secondFloor, this.thirdFloor];

  constructor() { }

  ngOnInit(): void {
  }

  changeFloor(id:number,fromFloor:number,toFloor:number)
  {

      let floorToRemoveFrom = this.floors[fromFloor];

      let floorToAddIn = this.floors[toFloor];

      for(let i=0; i < floorToRemoveFrom.length; i++)
      {
        if(floorToRemoveFrom[i].id == id)
        {
          floorToAddIn.push(floorToRemoveFrom[i]);

          floorToRemoveFrom.splice(i,1);
          break;
        }
      }
  }

}
