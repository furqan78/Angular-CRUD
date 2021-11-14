import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { forbiddenEmailValidaor } from 'src/app/validators/email.validators';
import { forbiddenNameValidaor } from 'src/app/validators/name.validator';
import { EmployeeModel } from '../employee-dashboard/employee-model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();

  public msg = "";
  public error = "";

  get name(){
    return this.formValue.get('name');
  }

  get email(){
    return this.formValue.get('email');
  }

  get mobile(){
    return this.formValue.get('mobile');
  }

  get salary(){
    return this.formValue.get('salary');
  }
  
  constructor(private formbuilder : FormBuilder,
             private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name :['',[Validators.required,Validators.minLength(4),forbiddenNameValidaor(/ /)]],
      email :['',[Validators.required,forbiddenEmailValidaor(/@gmail.com/)]],
      mobile :['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salary :['',[Validators.required,Validators.min(10000)]]
    })
  }

  postEmpolyeeDetails(){
      this.employeeModelObj.name = this.formValue.value.name;
      this.employeeModelObj.email = this.formValue.value.email;
      this.employeeModelObj.mobile = this.formValue.value.mobile;
      this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      this.msg = "Employee Added Successfully";
      this.error = "";
      this.formValue.reset();
    },
    err=>{
      this.msg = "";
      this.error = "something went wrong";
    })
  }

}
