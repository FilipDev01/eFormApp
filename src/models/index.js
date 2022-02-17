// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Interventions, Enlightenments, EnlightenmentCode, Activities, AgentEnlightenment, AgentEnlightenmentCode, CovidMonitoring, Agent } = initSchema(schema);

export {
  Interventions,
  Enlightenments,
  EnlightenmentCode,
  Activities,
  AgentEnlightenment,
  AgentEnlightenmentCode,
  CovidMonitoring,
  Agent
};