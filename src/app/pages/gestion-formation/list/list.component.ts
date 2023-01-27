import { FormationService } from '../../../services/formation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public formations: any = [];
  constructor(private forService: FormationService) { }

  ngOnInit(): void {
    this.loadListFormations();
  }
  loadListFormations():void{
    this.forService.getListFormations().subscribe(data=>{
      //console.log(data)
      this.formations.push(...data);},
      err=>console.log(err));
    }
  }


