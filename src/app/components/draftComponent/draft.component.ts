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
    selector: 'bh-draft',
    templateUrl: './draft.template.html'
})

export class draftComponent extends NBaseComponent implements OnInit {

    netWorks = [
        { code: "#225947", name: "Sravani Motors Pvt.Ltd", zone: "North", area: "South-end Circle, Bangalore", status: "greenColor"},
        { code: "#223134", name: "Maruthi Motors Pvt.Ltd", zone: "South", area: "JP Nagar, Bangalore", status: "orangeColor"},
        { code: "#125947", name: "Banglaore India Motors Pvt.Ltd", zone: "North", area: "Jaya Nagar, Bangalore", status: "greenColor"},
        { code: "#325947", name: "Ramakalakshmi Two Wheelars Pvt.Ltd", zone: "East", area: "Maruthi Nagar, Bangalore", status: "greenColor"},
        { code: "#435947", name: "Abhijith Motors Pvt.Ltd", zone: "North", area: "Mahalakshmi Layout, Bangalore", status: "greenColor"},
        { code: "#224875", name: "Sri Mahalkashmi Motors Pvt.Ltd", zone: "South", area: "Nagasandra, Bangalore", status: "greenColor"},
        { code: "#332654", name: "Ronald Motors Pvt.Ltd", zone: "South", area: "Hosur, Bangalore", status: "redColor"},
        { code: "#021548", name: "Whitefield Motors Pvt.Ltd", zone: "North", area: "Whitefield, Bangalore", status: "greenColor"}
        ]

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
