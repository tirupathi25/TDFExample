import { Component ,OnInit} from '@angular/core';
import { FormControl , FormGroup ,Validators } from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
 //MDF With FormBuilder
//  registrationForm:FormGroup;
//  constructor(private _formbBuilder:FormBuilder){}

// ngOnInit(){

// this.registrationForm = this._formbBuilder.group({
//   name : ['tirupathi',[[Validators.required,Validators.minLength(4),Validators.maxLength(10)]]],
//   email:[],
//   phone:[],
//   address:this._formbBuilder.group({
//     street:[],
//     city:[],
//     zip:[null,[[Validators.pattern("^[1-9][0-9]{4}$")]]]
//   })
// })
// }


//MDF
 registrationForm = new FormGroup({

  name:new FormControl('Tirupathi',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  email:new FormControl(),
  phone:new FormControl(),
  address:new FormGroup({
    street:new FormControl(),
    city:new FormControl(),
    zip:new FormControl(null,[Validators.pattern("^[1-9][0-9]{4}$")])
  })

 });



onSubmitForm(){

console.log(this.registrationForm.value);

}


}
