import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee-dashboard/employee-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { forbiddenNameValidaor } from 'src/app/validators/name.validator';
import { forbiddenEmailValidaor } from 'src/app/validators/email.validators';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();

  public error = "";
  public msg = "";
  
  public id !: number;
  public nameValue !: any;
  public emailValue !: any;
  public mobileValue !: any;
  public salaryValue !: any;

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
              private route: ActivatedRoute,
              private api : ApiService,
              private router: Router) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      name :['',[Validators.required,Validators.minLength(4),forbiddenNameValidaor(/ /)]],
      email :['',[Validators.required,forbiddenEmailValidaor(/@gmail.com/)]],
      mobile :['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salary :['',[Validators.required,Validators.min(10000)]]
    })

    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.nameValue = this.route.snapshot.paramMap.get('name');
    this.emailValue = this.route.snapshot.paramMap.get('email');
    this.mobileValue = this.route.snapshot.paramMap.get('mobile');
    this.salaryValue = this.route.snapshot.paramMap.get('salary');
    this.onEdit();
  }

  onEdit(){
    this.formValue.controls['name'].setValue(this.nameValue);
    this.formValue.controls['email'].setValue(this.emailValue);
    this.formValue.controls['mobile'].setValue(this.mobileValue);
    this.formValue.controls['salary'].setValue(this.salaryValue);
  }

  updateDetails(){
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelObj,this.id)
    .subscribe(res=>{
      this.msg = "Employee Updated Successfully";
      this.error = "";
      setTimeout(() => {
        this.router.navigate(["/employees"]);
      }, 1000);
    },
    err=>{
      this.msg = "";
      this.error = err;
    })
  }

}
