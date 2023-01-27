import { CandidatService } from './../../../services/candidat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listCandidats: any = [];

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getCandidats();
  }
  getCandidats():void{
    this.candidatService.getCandidats().subscribe(data=>{
      console.log(data);
      this.listCandidats.push(...data);
    },error=>console.log(error))
  }
  onDelete =(candidatId: number)=>{
    if(confirm('Are you sure you want to delete this candidat')){
      this.candidatService.deleteCandidat(candidatId).subscribe(Response=>{

      }, error=> console.log(error));
    }
  }

}
