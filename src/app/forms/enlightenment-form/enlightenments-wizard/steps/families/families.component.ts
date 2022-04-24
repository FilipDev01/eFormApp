import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
    selector: 'app-enlightenment-wizard-step-families',
    templateUrl: './families.component.html'
})

export class EnlightenmentsWizardStepFamilies implements OnInit {
    @Input() section: FormGroup;
    @Input() enlightenmentOptions: Array<any>;
    @Input() wizardStepper: MatStepper
    @Output() saveChanges = new EventEmitter();

    @ViewChild('matSelectB') matSelectB: any = null;

    public isInvalid: boolean;
    public family_codes: FormArray

    constructor() { }

    ngOnInit(): void {
        this.family_codes = this.section.get('family_codes') as FormArray;
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
        this.matSelectB.close();
    }

    public onSubmit() {
        const formData = this.section.value;
        if (!!formData) {
            let total = 0;
            if (Array.isArray(formData?.family_codes)) {
                total = formData.family_codes.reduce((n: any, { count }: any) => n + count, 0);
            }

            this.isInvalid = total !== formData.no_people_in_families
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