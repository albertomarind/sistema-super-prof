import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-rol',
  templateUrl: './alta-rol.component.html',
  styleUrls: ['./alta-rol.component.scss']
})
export class AltaRolComponent implements OnInit {

  form!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        titulo: ['',[Validators.maxLength(5)]],
        descripcion: ['',[Validators.maxLength(5)]],
      });
  }

  guardarRol(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form.value);
  }

}
