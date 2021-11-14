import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-model';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  employeeData !: any;
  public error = "";
  public msg !: any;

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();

  constructor(private api : ApiService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.msg = this.route.snapshot.paramMap.get('msg');
  }

  //the getAllEmployee() method which exist in api.services.ts
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  //the deleteEmployeee() method which exist in api.services.ts
  deleteEmployeee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      this.msg = "Employee has been deleted."
      this.getAllEmployee();
    })
  }

  //navigate to add employee component with passing the parameters
  onSelect(row: any){
    this.router.navigate(['/employees', row.id,row.name,row.email,row.mobile,row.salary])
  }

}
