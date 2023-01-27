import { FormationService } from '../../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  submitted = false;
  formaForm: FormGroup;

  constructor(private fb:FormBuilder,private formService: FormationService) { }

  ngOnInit(): void {
    this.formaForm=this.fb.group({
      formationName:['',Validators.required],
      duree:['',Validators.required]

    })
  }
  get f() { return this.formaForm.controls }

  submit() :void{

    this.submitted = true;
    if(this.formaForm.invalid){
      return;
    }else{
        console.log(this.formaForm.value)
        //ici on recupére le nom de formation
        this.formService.postFormations(this.formaForm.value).subscribe(response =>{
          console.log("ok")
        },error=>console.log(error))
    }

  }

}
