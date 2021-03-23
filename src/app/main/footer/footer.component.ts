import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public production: boolean;
  constructor() { 
    this.production = environment.production;
  }

  ngOnInit() {
    console.log(environment);
  }

}
