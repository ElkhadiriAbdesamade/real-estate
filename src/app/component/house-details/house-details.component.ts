import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  

  constructor(private router: Router, private route: ActivatedRoute) { }

  imageObject: Array<object> = [{
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'alt of image',
    
},
{
  image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  thumbImage: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  alt: 'alt of image',
  
}]

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams['id']);
    
  }

}
