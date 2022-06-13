import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Ag-Grid';
  constructor(private http: HttpClient) { }
  columnDefs =[
    // { headerName: "id", field: "id" },
    // { headerName: "email", field: "email" },
    // { headerName: "first_name", field: "first_name" },
    // { headerName: "last_name", field: "last_name" },
    // { headerName: "avatar", field: "avatar" },
   
    { headerName: "Make",field: 'make', sortable:true, filter: true, checkboxSelection:true },
    {headerName: "Model", field: 'model',sortable:true, filter: true },
    { headerName: "Price",field: 'price',sortable:true, filter: true }
  ];
  rowData=[];
  
  // [
  //   { Make: 'Toyota', Model: 'Celica', Price: 35000 },
  //   { Make: 'Ford', Model: 'Mondeo', Price: 32000 },
  //   { Make: 'Porsche', Model: 'Boxster', Price: 72000 }
  // ];
  
  ngOnInit() {
    // this.rowData$ = this.http.get<any[]>('https://reqres.in/api/users?page=1');
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result =>result.json())
    .then(rowData =>this.rowData= rowData)
  }
  
 
}







