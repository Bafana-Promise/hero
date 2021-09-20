/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

 
export class dashboardComponent extends NBaseComponent implements OnInit,AfterViewInit {
     sideNavResized: boolean = false;
     
     @ViewChild('sideNav') sideNav: any;

    constructor() {
        super();
    }

    ngOnInit() {

    }
    ngAfterViewInit(){
    }
    sideNavToggle(){
        // this.sideNav.toggle();   
        this.sideNavResized = !this.sideNavResized;
    }
    

}
