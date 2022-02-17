import { Routes } from '@angular/router';

import { ProcessingComponent } from '../pages/processing/processing.component';
import { AgentsComponent } from '../pages/agents/agents.component';
import { AgentDetailComponent } from '../pages/agent-detail/agent-detail.component';

import { InterventionFormComponent } from '../forms/intervention-form/intervention-form.component';

import { EnlightenmentFormComponent } from '../forms/enlightenment-form/enlightenment-form.component';
import { MonitoringCovidFormComponent } from '../forms/covid-monitoring/covid-monitoring-form.component';

export const AppLayoutRoutes: Routes = [
  { path: 'processing', component: ProcessingComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'agent/:agentId', component: AgentDetailComponent },
  { path: 'interventions/:agentId', component: InterventionFormComponent },
  { path: 'enlightenments/:agentId', component: EnlightenmentFormComponent },
  { path: 'covidmonitoring/:agentId', component: MonitoringCovidFormComponent }
]
