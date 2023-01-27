import { CandidatService } from '../../../services/candidat.service';
import { FormationService } from '../../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formCandidat!:FormGroup ;
  submitted:boolean=false;

  listFormations: any[]=[];

  constructor(private candidatService:CandidatService, private fb:FormBuilder, private formationService :FormationService) { }

  ngOnInit(): void {
    this.getFormation();
    this.formCandidat= this.fb.group({
      candidatFirstName:['',Validators.required],
      candidatLastName:['',Validators.required],
      candidatSpecialite:['',Validators.required],
      candidatNiveau:['',Validators.required],
      formationId:['',Validators.required]
    })
  }
  getFormation():void{
    this.formationService.getListFormations().subscribe(data=>{

      this.listFormations.push(...data);
    },error=>{
      console.log(error)
    })

  }

  get f(){
    return this.formCandidat.controls;
  }
  submit():void{
    this.submitted=true;
    if(this.formCandidat.invalid){
      return;
    }else{
      this.candidatService.postCandidats(this.formCandidat.value).subscribe(data=>{
        this.formCandidat.reset();
      },err=>{
        console.log(err)
      });
    }
  }

}
