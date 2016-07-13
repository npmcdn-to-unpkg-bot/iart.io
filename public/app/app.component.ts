import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'iart-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}

import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    constructor() { }

}

@Routes([
    { path: '/home', component: HomeComponent }
])
