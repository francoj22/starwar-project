import { PostService } from '../post.service';
import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {} from 'jasmine';
import { BlogPostComponent } from './blog-post.component';
import { of } from 'rxjs';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import data from '../../assets/db.json';
import result from '../../assets/result.json';
import { NgForm } from '@angular/forms';
describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  let postService;

  let starships  = data;
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ BlogPostComponent ],
      providers: [
        PostService
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([PostService], s => {
    postService = s;
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStartships', async(() => {
    const response: [] = [];

    spyOn(postService, 'getStarShips').and.returnValue(of(response));

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.starships).toEqual(response);
  }));

  it('should retrive stops', () => {
    const testForm = <NgForm>{
      value: {
        mglt: 1000000
      }
  }; 
    component.starships = starships;

    fixture.detectChanges();

    component.searchMGLT(testForm);
    expect(component.starships).toEqual(result);
  });

});
