import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    cityId: ['', Validators.required],
    countryId: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });
  values: any =[];
  values1: any=[];
  values2: any=[];
  values3: any=[];
private data = [
  {"Stars": this.values },
  {"Stars": this.values1},
  {"Stars": this.values2 },
  {"Stars": this.values3},
  // { "Framework": "Angular", "Stars": this.values[2], "Released": "2016" },
  // { "Framework": "Backbone", "Stars": this.values[3], "Released": "2010" },
];
  private svg: any;
  private margin = 50;
  private width = 300;
  private height = 400;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors:any;
  error: any;
cities: any;
countries: any;
  count: any;
  constructor(private router:Router,private fb: FormBuilder,private service: ApiService) { }
  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
    this.getAll();
    this.getAllMasters()
   console.log(this.data,'jjjjjjjj');
   console.log(this.values,'lk');
   
   
}
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['heat']);
}
submit(){
  let data=this.userForm.value
  this.service.submit(data).subscribe({
    next: (data:any) => {
      console.log('data',data);
    },
    error: (err) => {
      console.log('error',err.error);
      this.error = err.error.err;
    }
  });
  this.userForm.reset()
  this.getAll()
}
getAll() {
  this.service.getAll().subscribe({
    next: (res: any) => {
      this.values = res.data.countCity1;
      this.values1 = res.data.countCity2;
      this.values2 = res.data.countCity3;
      this.values3 = res.data.countCity4;

      // Update the Stars property in the data array
      this.data[0].Stars = this.values;
      this.data[1].Stars = this.values1;
      this.data[2].Stars = this.values2;
      this.data[3].Stars = this.values3;
this.count=res.data.totalCount
      console.log('data', res.data.totalCount);

      // Now call drawChart with updated data
      this.drawChart();
    },
    error: (err) => {
      console.log('error', err.error);
      this.error = err.error.err;
    }
  });
}

getAllMasters(){
  this.service.getAllMasters().subscribe({
    next: (res:any) => {
      this.cities=res.data.city
      this.countries=res.data.country
      console.log('data',this.cities);
    },
    error: (err) => {
      console.log('error',err.error);
      this.error = err.error.err;
    }
  });
  this.userForm.reset()
}
private createSvg(): void {
  this.svg = d3.select("figure#pie")
  .append("svg")
  .attr("width", this.width)
  .attr("height", this.height)
  .append("g")
  .attr(
    "transform",
    "translate(" + this.width / 2 + "," + this.height / 2 + ")"
  );
}
private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Stars.toString()))
  .range(["#FDD83E","#19B670", "#DB3536","#F19712"]);
}
// ...

private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

  // Build the pie chart with a ring structure
  this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(this.radius - 30) // Inner radius (create a ring by setting a value greater than 0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d: any, i: any) => (this.colors(i)))
    .style("stroke-width", "1px");

  // Display count at the center of the pie chart
  this.svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .style('font-size', '50px')
    .style('font-weight', 'bold')
    .text(this.count);

  // Add labels
  const labelLocation = d3.arc()
    .innerRadius(this.radius - 40) // Adjust the inner radius for label placement
    .outerRadius(this.radius);

  this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
}


// ...
onSubmit() {
  if (this.userForm.valid) {
    // Handle form submission
    console.log(this.userForm.value);
  }
}

}
