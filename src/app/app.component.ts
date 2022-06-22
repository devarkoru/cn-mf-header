import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-header-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-header';

  constructor(private router: Router) { }

  ngOnInit() {
    // do init at here for current route.

    // setTimeout(() => {
    //   this.router.navigate(['portal']);
    // }, 1000);  //1s
  }


}
