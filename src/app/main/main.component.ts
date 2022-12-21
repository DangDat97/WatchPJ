import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  // styleUrls: ['./main.component.css']
})
export class MainComponent {

  category: any=[];
  constructor(private route: ActivatedRoute, private subjectService: SubjectService){

  }

  ngOnInit(){
    this.category=this.subjectService.getCategory();
  }

}
