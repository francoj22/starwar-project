import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { OrderModule } from 'ngx-order-pipe';
import { NgForm } from '@angular/forms';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {

  starships: any;
  mgltValue: number;


  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getStarShips().subscribe(data => {
      this.starships = data.filter(starship => 
        starship.MGLT !== 'unknown'
      );
    });
  }

  searchMGLT(form: NgForm){

    this.starships.forEach((starship, index) => {

        const consumablesSplit = starship.consumables.split(' ');
        const days = this.getDays(consumablesSplit[1]);

        const stops = Math.floor(form.value.mglt/ (consumablesSplit[0] * days * 24 * starship.MGLT));
        
        this.starships[index].stops = stops;
      
    });
  }

  getDays(data) {
    switch (data) {
      case 'year':
      case 'years':
        return 365;
      case 'month':
      case 'months':
        return 30
      case 'week':
      case 'weeks':
        return 7;
      case 'day':
      case 'days':
        return 1;
      default:
        return 0;
    }

  }
  
}
