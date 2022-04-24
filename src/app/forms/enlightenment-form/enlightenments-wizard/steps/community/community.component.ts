import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
    selector: 'app-enlightenment-wizard-step-community',
    templateUrl: './community.component.html'
})

export class EnlightenmentsWizardStepCommunity implements OnInit {
    @Input() section: FormGroup;
    @Input() enlightenmentOptions: Array<any>;
    @Input() wizardStepper: MatStepper
    @Output() saveChanges = new EventEmitter();

    @ViewChild('matSelectD') matSelectD: any = null;

    public isInvalid: boolean;
    public community_center_codes: FormArray

    constructor() { }

    ngOnInit(): void {
        this.community_center_codes = this.section.get('community_center_codes') as FormArray;
    }

    public addCode(section: any, type: string) {
        if (section && section.get(type)) {
            section.updateValueAndValidity();

            const temp: FormArray = section.get(type);
            temp.push(new FormGroup({
                code: new FormControl(''),
                count: new FormControl(null),
                description: new FormControl('')
            }));
        }

        section[type] = !section[type] ? new Array<any>() : section[type];
        section[type].push({ code: '', count: null, description: '' });
    }

    public removeCode(sectionCodes: any, item: any) {
        if (!!sectionCodes && Array.isArray(sectionCodes.controls)) {
            sectionCodes.updateValueAndValidity();
            const ind = sectionCodes.controls.indexOf(item);
            if (ind > -1) {
                sectionCodes.controls.splice(ind, 1);
            }
        } else {
            const ind = sectionCodes.indexOf(item);
            if (ind > -1) {
                sectionCodes.splice(ind, 1);
            }
        }
    }

    public handleSelectionAction(type: string) {
        this.matSelectD.close();
    }

    public onSubmit() {
        let isValid = true;
        const formData = this.section.value;
        if (!!formData) {
            let total = 0;
            if (Array.isArray(formData?.community_center_codes)) {
                total = formData.community_center_codes.reduce((n: any, { count }: any) => n + count, 0);
            }

            this.isInvalid = total !== formData.no_community_center_members
            if (!this.isInvalid) {
                this.saveChanges.emit({ save_action: true });
                this.wizardStepper.next();
            }
        }
    }

    public goBack() {
        this.wizardStepper.previous();
    }
}