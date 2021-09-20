/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dialogComponent } from '../dialogComponent/dialog.component';
import { MatDialog } from '@angular/material/dialog';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-service',
    templateUrl: './service.template.html'
})

export class serviceComponent extends NBaseComponent implements OnInit {

    plansRemarks = [
        { parameter: "Workshop Labour", no: "No", response: "", yes: "Yes", actions: "Have so I was to hell the be when their soft decision-making ", date: "", documents: "" },
        { parameter: "Workshop Display Board", no: "No", response: "", yes: "Yes", actions: "Have so I was to hell the be when their soft decision-making ", date: "", documents: "", color: "uploadIcon" },
        { parameter: "Front Fascia", no: "No", response: "", yes: "Yes", actions: "Have so I was to hell the be when their soft decision-making ", date: "", documents: "" },
        { parameter: "Workshop Labour", no: "No", response: "", yes: "Yes", actions: "Have so I was to hell the be when their soft decision-making ", date: "", documents: "", color: "uploadIcon" },
        { parameter: "Workshop Labour", no: "No", response: "", yes: "Yes", actions: "Have so I was to hell the be when their soft decision-making ", date: "", documents: "" }

    ]
    tableleDat = [
        { text: "TSM Feedback", para: "White something here...", subpara: "Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...", colorGrey: "servTableTxtlightGreyColor", darkColor: "servTableTxtDarkGreyColor", fontSize: "servTableTxtFontSize" },
        { text: "ASM Feedback", para: "White something here...", subpara: "Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...", color: "servTableTxtlightGreyColor", fontSize: "servTableTxtFontSize" },
        { text: "ZSM Feedback", para: "White something here...", subpara: "Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...", color: "servTableTxtlightGreyColor", fontSize: "servTableTxtFontSize" }
        ]

    constructor( private dialog: MatDialog ) {
        super();
    }

    ngOnInit() {

    }

    openDialog(){
        this.dialog.open(dialogComponent, {
            width: '641px',height: '508px'
            
        }
        ).afterClosed().subscribe(result => {
            console.log(result)
        })
    }

}
