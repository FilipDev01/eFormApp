import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InterventionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnlightenmentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnlightenmentCodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActivitiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgentEnlightenmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgentEnlightenmentCodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CovidMonitoringMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Interventions {
  readonly id: string;
  readonly user_id?: string;
  readonly date?: string;
  readonly a1?: number;
  readonly a2?: number;
  readonly a3?: number;
  readonly a4?: number;
  readonly b1?: number;
  readonly b2?: number;
  readonly b3?: number;
  readonly b4?: number;
  readonly c1?: number;
  readonly c2?: number;
  readonly c3?: number;
  readonly c4?: number;
  readonly c5?: number;
  readonly d1?: number;
  readonly d2?: number;
  readonly d3?: number;
  readonly d4?: number;
  readonly d5?: number;
  readonly d6?: number;
  readonly d7?: number;
  readonly d8?: number;
  readonly e1?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Interventions, InterventionsMetaData>);
  static copyOf(source: Interventions, mutator: (draft: MutableModel<Interventions, InterventionsMetaData>) => MutableModel<Interventions, InterventionsMetaData> | void): Interventions;
}

export declare class Enlightenments {
  readonly id: string;
  readonly user_id?: string;
  readonly date?: string;
  readonly no_individuals?: number;
  readonly no_families?: number;
  readonly no_people_in_families?: number;
  readonly school_name?: string;
  readonly school_year?: string;
  readonly no_students?: number;
  readonly community_center_name?: string;
  readonly no_community_center_members?: number;
  readonly enlightenmentCodes?: (EnlightenmentCode | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Enlightenments, EnlightenmentsMetaData>);
  static copyOf(source: Enlightenments, mutator: (draft: MutableModel<Enlightenments, EnlightenmentsMetaData>) => MutableModel<Enlightenments, EnlightenmentsMetaData> | void): Enlightenments;
}

export declare class EnlightenmentCode {
  readonly id: string;
  readonly enlightenmentID: string;
  readonly type?: number;
  readonly f1?: number;
  readonly f2?: number;
  readonly f3?: number;
  readonly f4?: number;
  readonly f5?: number;
  readonly f6?: number;
  readonly f7?: number;
  readonly f8?: number;
  readonly f9?: number;
  readonly f10?: number;
  readonly f11?: number;
  readonly f12?: number;
  readonly f13?: number;
  readonly f14?: number;
  readonly f15?: number;
  readonly f16?: number;
  readonly f17?: number;
  readonly f18?: number;
  readonly f19?: number;
  readonly f20?: number;
  readonly f21?: number;
  readonly f22?: number;
  readonly f23?: number;
  readonly f24?: number;
  readonly f25?: number;
  readonly f26?: number;
  readonly f27?: number;
  readonly f28?: number;
  readonly f29?: number;
  readonly f30?: number;
  readonly enlightenment?: Enlightenments;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EnlightenmentCode, EnlightenmentCodeMetaData>);
  static copyOf(source: EnlightenmentCode, mutator: (draft: MutableModel<EnlightenmentCode, EnlightenmentCodeMetaData>) => MutableModel<EnlightenmentCode, EnlightenmentCodeMetaData> | void): EnlightenmentCode;
}

export declare class Activities {
  readonly id: string;
  readonly user_id?: string;
  readonly date?: string;
  readonly time?: string;
  readonly activity?: string;
  readonly done?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activities, ActivitiesMetaData>);
  static copyOf(source: Activities, mutator: (draft: MutableModel<Activities, ActivitiesMetaData>) => MutableModel<Activities, ActivitiesMetaData> | void): Activities;
}

export declare class AgentEnlightenment {
  readonly id: string;
  readonly user_id?: string;
  readonly date?: string;
  readonly no_individuals?: number;
  readonly no_families?: number;
  readonly no_people_in_families?: number;
  readonly school_name?: string;
  readonly school_year?: string;
  readonly no_students?: number;
  readonly community_center_name?: string;
  readonly no_community_center_members?: number;
  readonly enlightenmentCodes?: (AgentEnlightenmentCode | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AgentEnlightenment, AgentEnlightenmentMetaData>);
  static copyOf(source: AgentEnlightenment, mutator: (draft: MutableModel<AgentEnlightenment, AgentEnlightenmentMetaData>) => MutableModel<AgentEnlightenment, AgentEnlightenmentMetaData> | void): AgentEnlightenment;
}

export declare class AgentEnlightenmentCode {
  readonly id: string;
  readonly agentEnlightenmentID: string;
  readonly type?: number;
  readonly f1?: number;
  readonly f2?: number;
  readonly f3?: number;
  readonly f4?: number;
  readonly f5?: number;
  readonly f6?: number;
  readonly f7?: number;
  readonly f8?: number;
  readonly f9?: number;
  readonly f10?: number;
  readonly f11?: number;
  readonly f12?: number;
  readonly f13?: number;
  readonly f14?: number;
  readonly f15?: number;
  readonly f16?: number;
  readonly f17?: number;
  readonly f18?: number;
  readonly f19?: number;
  readonly f20?: number;
  readonly f21?: number;
  readonly f22?: number;
  readonly f23?: number;
  readonly f24?: number;
  readonly f25?: number;
  readonly f26?: number;
  readonly f27?: number;
  readonly f28?: number;
  readonly f29?: number;
  readonly f30?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AgentEnlightenmentCode, AgentEnlightenmentCodeMetaData>);
  static copyOf(source: AgentEnlightenmentCode, mutator: (draft: MutableModel<AgentEnlightenmentCode, AgentEnlightenmentCodeMetaData>) => MutableModel<AgentEnlightenmentCode, AgentEnlightenmentCodeMetaData> | void): AgentEnlightenmentCode;
}

export declare class CovidMonitoring {
  readonly id: string;
  readonly user_id?: string;
  readonly date?: string;
  readonly a1?: number;
  readonly a2?: number;
  readonly a3?: number;
  readonly a4?: number;
  readonly a5?: number;
  readonly b1?: number;
  readonly b2?: number;
  readonly b3?: number;
  readonly b4?: number;
  readonly b5?: number;
  readonly c1?: number;
  readonly d1?: number;
  readonly d2?: number;
  readonly d3?: number;
  readonly d4?: number;
  readonly e1?: number;
  readonly e2?: number;
  readonly e3?: number;
  readonly e4?: number;
  readonly e5?: number;
  readonly e6?: number;
  readonly e7?: number;
  readonly f1?: number;
  readonly f2?: number;
  readonly f3?: number;
  readonly f4?: number;
  readonly f5?: number;
  readonly f6?: number;
  readonly f7?: number;
  readonly f8?: number;
  readonly f9?: number;
  readonly f10?: number;
  readonly g1?: string;
  readonly h1?: number;
  readonly h2?: number;
  readonly h3?: number;
  readonly h4?: number;
  readonly h5?: number;
  readonly h6?: number;
  readonly h7?: number;
  readonly h8?: number;
  readonly h9?: number;
  readonly h10?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CovidMonitoring, CovidMonitoringMetaData>);
  static copyOf(source: CovidMonitoring, mutator: (draft: MutableModel<CovidMonitoring, CovidMonitoringMetaData>) => MutableModel<CovidMonitoring, CovidMonitoringMetaData> | void): CovidMonitoring;
}

export declare class Agent {
  readonly id: string;
  readonly user_id?: string;
  readonly name?: string;
  readonly coordinator_name?: string;
  readonly location?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agent, AgentMetaData>);
  static copyOf(source: Agent, mutator: (draft: MutableModel<Agent, AgentMetaData>) => MutableModel<Agent, AgentMetaData> | void): Agent;
}