import { Routes } from '@angular/router';
import { InterventionFormComponent } from '../forms/intervention-form/intervention-form.component';
import { ProcessingComponent } from '../pages/processing/processing.component';

import { AgentsComponent } from '../pages/agents/agents.component';
import { AgentDetailComponent } from '../pages/agent-detail/agent-detail.component';

export const AppLayoutRoutes: Routes = [
  { path: 'processing', component: ProcessingComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'agent/:agentId', component: AgentDetailComponent },
  { path: 'interventions/:agentId', component: InterventionFormComponent }
]
