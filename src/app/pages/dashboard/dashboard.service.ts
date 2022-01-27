import { Injectable } from '@angular/core';
import { InterventionsFormService } from '../../services/forms/interventions.form.service';

@Injectable({ providedIn: 'root', })

export class DashboardService {
    constructor(private _interventionsFormService: InterventionsFormService) {

    }
}