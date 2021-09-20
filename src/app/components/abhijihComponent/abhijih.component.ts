/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
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
    selector: 'bh-abhijih',
    templateUrl: './abhijih.template.html'
})

export class abhijihComponent extends NBaseComponent implements OnInit {

    monthlyResults = [
        { month: "December", marks: "100", progress: "backGroundColorRed", percentage: "100%", status: "Completed", action: "",Img: "tree (2).png",  height: "transperantImg", color: "" },
        { month: "January", marks: "120", progress: "backGroundColorRed", percentage: "100%", status: "Completed", action: "",Img: "tree (2).png",  height: "transperantImg", color: "" },
        { month: "December", marks: "100", progress: "backGroundColorRed", percentage: "100%", status: "Completed", action: "",Img: "tree (2).png",  height: "transperantImg", color: "" },
        { month: "January", marks: "120", progress: "backGroundColorRed", percentage: "100%", status: "Completed", action: "",Img: "tree (2).png",  height: "transperantImg", color: "" },
        { month: "February", marks: "00", progress: "backGroundColorBlack", percentage: "0%", status: "Expired", action: "",Img: "tree (2).png",  height: "transperantImg", color: "" },
        { month: "March", marks: "13", redpro: "progress37red", blackpro: "backGroundColorBlack",position: "position", percentage: "37%", status: "Active", Img: "red.svg", color: "" },
    ]

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
