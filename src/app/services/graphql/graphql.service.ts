/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateInterventions: OnCreateInterventionsSubscription;
  onUpdateInterventions: OnUpdateInterventionsSubscription;
  onDeleteInterventions: OnDeleteInterventionsSubscription;
  onCreateEnlightenments: OnCreateEnlightenmentsSubscription;
  onUpdateEnlightenments: OnUpdateEnlightenmentsSubscription;
  onDeleteEnlightenments: OnDeleteEnlightenmentsSubscription;
  onCreateEnlightenmentCode: OnCreateEnlightenmentCodeSubscription;
  onUpdateEnlightenmentCode: OnUpdateEnlightenmentCodeSubscription;
  onDeleteEnlightenmentCode: OnDeleteEnlightenmentCodeSubscription;
  onCreateActivities: OnCreateActivitiesSubscription;
  onUpdateActivities: OnUpdateActivitiesSubscription;
  onDeleteActivities: OnDeleteActivitiesSubscription;
  onCreateAgentEnlightenment: OnCreateAgentEnlightenmentSubscription;
  onUpdateAgentEnlightenment: OnUpdateAgentEnlightenmentSubscription;
  onDeleteAgentEnlightenment: OnDeleteAgentEnlightenmentSubscription;
  onCreateAgentEnlightenmentCode: OnCreateAgentEnlightenmentCodeSubscription;
  onUpdateAgentEnlightenmentCode: OnUpdateAgentEnlightenmentCodeSubscription;
  onDeleteAgentEnlightenmentCode: OnDeleteAgentEnlightenmentCodeSubscription;
  onCreateCovidMonitoring: OnCreateCovidMonitoringSubscription;
  onUpdateCovidMonitoring: OnUpdateCovidMonitoringSubscription;
  onDeleteCovidMonitoring: OnDeleteCovidMonitoringSubscription;
  onCreateAgent: OnCreateAgentSubscription;
  onUpdateAgent: OnUpdateAgentSubscription;
  onDeleteAgent: OnDeleteAgentSubscription;
};

export type CreateInterventionsInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  _version?: number | null;
};

export type ModelInterventionsConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelIntInput | null;
  a3?: ModelIntInput | null;
  a4?: ModelIntInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelIntInput | null;
  b4?: ModelIntInput | null;
  c1?: ModelIntInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelIntInput | null;
  c5?: ModelIntInput | null;
  d1?: ModelIntInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelIntInput | null;
  d4?: ModelIntInput | null;
  d5?: ModelIntInput | null;
  d6?: ModelIntInput | null;
  d7?: ModelIntInput | null;
  d8?: ModelIntInput | null;
  e1?: ModelIntInput | null;
  and?: Array<ModelInterventionsConditionInput | null> | null;
  or?: Array<ModelInterventionsConditionInput | null> | null;
  not?: ModelInterventionsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Interventions = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateInterventionsInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  _version?: number | null;
};

export type DeleteInterventionsInput = {
  id: string;
  _version?: number | null;
};

export type CreateEnlightenmentsInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  _version?: number | null;
};

export type ModelEnlightenmentsConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  no_individuals?: ModelIntInput | null;
  no_families?: ModelIntInput | null;
  no_people_in_families?: ModelIntInput | null;
  school_name?: ModelStringInput | null;
  no_students?: ModelIntInput | null;
  community_center_name?: ModelStringInput | null;
  no_community_center_members?: ModelIntInput | null;
  and?: Array<ModelEnlightenmentsConditionInput | null> | null;
  or?: Array<ModelEnlightenmentsConditionInput | null> | null;
  not?: ModelEnlightenmentsConditionInput | null;
};

export type Enlightenments = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: ModelEnlightenmentCodeConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelEnlightenmentCodeConnection = {
  __typename: "ModelEnlightenmentCodeConnection";
  items: Array<EnlightenmentCode | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type EnlightenmentCode = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: Enlightenments | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type UpdateEnlightenmentsInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  _version?: number | null;
};

export type DeleteEnlightenmentsInput = {
  id: string;
  _version?: number | null;
};

export type CreateEnlightenmentCodeInput = {
  id?: string | null;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  _version?: number | null;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type ModelEnlightenmentCodeConditionInput = {
  enlightenmentID?: ModelIDInput | null;
  type?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  f11?: ModelIntInput | null;
  f12?: ModelIntInput | null;
  f13?: ModelIntInput | null;
  f14?: ModelIntInput | null;
  f15?: ModelIntInput | null;
  f16?: ModelIntInput | null;
  f17?: ModelIntInput | null;
  f18?: ModelIntInput | null;
  f19?: ModelIntInput | null;
  f20?: ModelIntInput | null;
  f21?: ModelIntInput | null;
  f22?: ModelIntInput | null;
  f23?: ModelIntInput | null;
  f24?: ModelIntInput | null;
  f25?: ModelIntInput | null;
  f26?: ModelIntInput | null;
  f27?: ModelIntInput | null;
  f28?: ModelIntInput | null;
  f29?: ModelIntInput | null;
  f30?: ModelIntInput | null;
  and?: Array<ModelEnlightenmentCodeConditionInput | null> | null;
  or?: Array<ModelEnlightenmentCodeConditionInput | null> | null;
  not?: ModelEnlightenmentCodeConditionInput | null;
  enlightenmentsEnlightenmentCodesId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateEnlightenmentCodeInput = {
  id: string;
  enlightenmentID?: string | null;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  _version?: number | null;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type DeleteEnlightenmentCodeInput = {
  id: string;
  _version?: number | null;
};

export type CreateActivitiesInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  _version?: number | null;
};

export type ModelActivitiesConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  time?: ModelStringInput | null;
  activity?: ModelStringInput | null;
  done?: ModelIntInput | null;
  and?: Array<ModelActivitiesConditionInput | null> | null;
  or?: Array<ModelActivitiesConditionInput | null> | null;
  not?: ModelActivitiesConditionInput | null;
};

export type Activities = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateActivitiesInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  _version?: number | null;
};

export type DeleteActivitiesInput = {
  id: string;
  _version?: number | null;
};

export type CreateAgentEnlightenmentInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  _version?: number | null;
};

export type ModelAgentEnlightenmentConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  no_individuals?: ModelIntInput | null;
  no_families?: ModelIntInput | null;
  no_people_in_families?: ModelIntInput | null;
  school_name?: ModelStringInput | null;
  no_students?: ModelIntInput | null;
  community_center_name?: ModelStringInput | null;
  no_community_center_members?: ModelIntInput | null;
  and?: Array<ModelAgentEnlightenmentConditionInput | null> | null;
  or?: Array<ModelAgentEnlightenmentConditionInput | null> | null;
  not?: ModelAgentEnlightenmentConditionInput | null;
};

export type AgentEnlightenment = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: ModelAgentEnlightenmentCodeConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelAgentEnlightenmentCodeConnection = {
  __typename: "ModelAgentEnlightenmentCodeConnection";
  items: Array<AgentEnlightenmentCode | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type AgentEnlightenmentCode = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAgentEnlightenmentInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  _version?: number | null;
};

export type DeleteAgentEnlightenmentInput = {
  id: string;
  _version?: number | null;
};

export type CreateAgentEnlightenmentCodeInput = {
  id?: string | null;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  _version?: number | null;
};

export type ModelAgentEnlightenmentCodeConditionInput = {
  agentEnlightenmentID?: ModelIDInput | null;
  type?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  f11?: ModelIntInput | null;
  f12?: ModelIntInput | null;
  f13?: ModelIntInput | null;
  f14?: ModelIntInput | null;
  f15?: ModelIntInput | null;
  f16?: ModelIntInput | null;
  f17?: ModelIntInput | null;
  f18?: ModelIntInput | null;
  f19?: ModelIntInput | null;
  f20?: ModelIntInput | null;
  f21?: ModelIntInput | null;
  f22?: ModelIntInput | null;
  f23?: ModelIntInput | null;
  f24?: ModelIntInput | null;
  f25?: ModelIntInput | null;
  f26?: ModelIntInput | null;
  f27?: ModelIntInput | null;
  f28?: ModelIntInput | null;
  f29?: ModelIntInput | null;
  f30?: ModelIntInput | null;
  and?: Array<ModelAgentEnlightenmentCodeConditionInput | null> | null;
  or?: Array<ModelAgentEnlightenmentCodeConditionInput | null> | null;
  not?: ModelAgentEnlightenmentCodeConditionInput | null;
};

export type UpdateAgentEnlightenmentCodeInput = {
  id: string;
  agentEnlightenmentID?: string | null;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  _version?: number | null;
};

export type DeleteAgentEnlightenmentCodeInput = {
  id: string;
  _version?: number | null;
};

export type CreateCovidMonitoringInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  _version?: number | null;
};

export type ModelCovidMonitoringConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelIntInput | null;
  a3?: ModelIntInput | null;
  a4?: ModelIntInput | null;
  a5?: ModelIntInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelIntInput | null;
  b4?: ModelIntInput | null;
  b5?: ModelIntInput | null;
  c1?: ModelIntInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelIntInput | null;
  d1?: ModelIntInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelIntInput | null;
  d4?: ModelIntInput | null;
  e1?: ModelIntInput | null;
  e2?: ModelIntInput | null;
  e3?: ModelIntInput | null;
  e4?: ModelIntInput | null;
  e5?: ModelIntInput | null;
  e6?: ModelIntInput | null;
  e7?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  g1?: ModelStringInput | null;
  and?: Array<ModelCovidMonitoringConditionInput | null> | null;
  or?: Array<ModelCovidMonitoringConditionInput | null> | null;
  not?: ModelCovidMonitoringConditionInput | null;
};

export type CovidMonitoring = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCovidMonitoringInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  _version?: number | null;
};

export type DeleteCovidMonitoringInput = {
  id: string;
  _version?: number | null;
};

export type CreateAgentInput = {
  id?: string | null;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  _version?: number | null;
};

export type ModelAgentConditionInput = {
  user_id?: ModelStringInput | null;
  name?: ModelStringInput | null;
  coordinator_name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAgentConditionInput | null> | null;
  or?: Array<ModelAgentConditionInput | null> | null;
  not?: ModelAgentConditionInput | null;
};

export type Agent = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAgentInput = {
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  _version?: number | null;
};

export type DeleteAgentInput = {
  id: string;
  _version?: number | null;
};

export type ModelInterventionsFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelIntInput | null;
  a3?: ModelIntInput | null;
  a4?: ModelIntInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelIntInput | null;
  b4?: ModelIntInput | null;
  c1?: ModelIntInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelIntInput | null;
  c5?: ModelIntInput | null;
  d1?: ModelIntInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelIntInput | null;
  d4?: ModelIntInput | null;
  d5?: ModelIntInput | null;
  d6?: ModelIntInput | null;
  d7?: ModelIntInput | null;
  d8?: ModelIntInput | null;
  e1?: ModelIntInput | null;
  and?: Array<ModelInterventionsFilterInput | null> | null;
  or?: Array<ModelInterventionsFilterInput | null> | null;
  not?: ModelInterventionsFilterInput | null;
};

export type ModelInterventionsConnection = {
  __typename: "ModelInterventionsConnection";
  items: Array<Interventions | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelEnlightenmentsFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  no_individuals?: ModelIntInput | null;
  no_families?: ModelIntInput | null;
  no_people_in_families?: ModelIntInput | null;
  school_name?: ModelStringInput | null;
  no_students?: ModelIntInput | null;
  community_center_name?: ModelStringInput | null;
  no_community_center_members?: ModelIntInput | null;
  and?: Array<ModelEnlightenmentsFilterInput | null> | null;
  or?: Array<ModelEnlightenmentsFilterInput | null> | null;
  not?: ModelEnlightenmentsFilterInput | null;
};

export type ModelEnlightenmentsConnection = {
  __typename: "ModelEnlightenmentsConnection";
  items: Array<Enlightenments | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelEnlightenmentCodeFilterInput = {
  id?: ModelIDInput | null;
  enlightenmentID?: ModelIDInput | null;
  type?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  f11?: ModelIntInput | null;
  f12?: ModelIntInput | null;
  f13?: ModelIntInput | null;
  f14?: ModelIntInput | null;
  f15?: ModelIntInput | null;
  f16?: ModelIntInput | null;
  f17?: ModelIntInput | null;
  f18?: ModelIntInput | null;
  f19?: ModelIntInput | null;
  f20?: ModelIntInput | null;
  f21?: ModelIntInput | null;
  f22?: ModelIntInput | null;
  f23?: ModelIntInput | null;
  f24?: ModelIntInput | null;
  f25?: ModelIntInput | null;
  f26?: ModelIntInput | null;
  f27?: ModelIntInput | null;
  f28?: ModelIntInput | null;
  f29?: ModelIntInput | null;
  f30?: ModelIntInput | null;
  and?: Array<ModelEnlightenmentCodeFilterInput | null> | null;
  or?: Array<ModelEnlightenmentCodeFilterInput | null> | null;
  not?: ModelEnlightenmentCodeFilterInput | null;
  enlightenmentsEnlightenmentCodesId?: ModelIDInput | null;
};

export type ModelActivitiesFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  time?: ModelStringInput | null;
  activity?: ModelStringInput | null;
  done?: ModelIntInput | null;
  and?: Array<ModelActivitiesFilterInput | null> | null;
  or?: Array<ModelActivitiesFilterInput | null> | null;
  not?: ModelActivitiesFilterInput | null;
};

export type ModelActivitiesConnection = {
  __typename: "ModelActivitiesConnection";
  items: Array<Activities | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAgentEnlightenmentFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  no_individuals?: ModelIntInput | null;
  no_families?: ModelIntInput | null;
  no_people_in_families?: ModelIntInput | null;
  school_name?: ModelStringInput | null;
  no_students?: ModelIntInput | null;
  community_center_name?: ModelStringInput | null;
  no_community_center_members?: ModelIntInput | null;
  and?: Array<ModelAgentEnlightenmentFilterInput | null> | null;
  or?: Array<ModelAgentEnlightenmentFilterInput | null> | null;
  not?: ModelAgentEnlightenmentFilterInput | null;
};

export type ModelAgentEnlightenmentConnection = {
  __typename: "ModelAgentEnlightenmentConnection";
  items: Array<AgentEnlightenment | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAgentEnlightenmentCodeFilterInput = {
  id?: ModelIDInput | null;
  agentEnlightenmentID?: ModelIDInput | null;
  type?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  f11?: ModelIntInput | null;
  f12?: ModelIntInput | null;
  f13?: ModelIntInput | null;
  f14?: ModelIntInput | null;
  f15?: ModelIntInput | null;
  f16?: ModelIntInput | null;
  f17?: ModelIntInput | null;
  f18?: ModelIntInput | null;
  f19?: ModelIntInput | null;
  f20?: ModelIntInput | null;
  f21?: ModelIntInput | null;
  f22?: ModelIntInput | null;
  f23?: ModelIntInput | null;
  f24?: ModelIntInput | null;
  f25?: ModelIntInput | null;
  f26?: ModelIntInput | null;
  f27?: ModelIntInput | null;
  f28?: ModelIntInput | null;
  f29?: ModelIntInput | null;
  f30?: ModelIntInput | null;
  and?: Array<ModelAgentEnlightenmentCodeFilterInput | null> | null;
  or?: Array<ModelAgentEnlightenmentCodeFilterInput | null> | null;
  not?: ModelAgentEnlightenmentCodeFilterInput | null;
};

export type ModelCovidMonitoringFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelIntInput | null;
  a3?: ModelIntInput | null;
  a4?: ModelIntInput | null;
  a5?: ModelIntInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelIntInput | null;
  b4?: ModelIntInput | null;
  b5?: ModelIntInput | null;
  c1?: ModelIntInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelIntInput | null;
  d1?: ModelIntInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelIntInput | null;
  d4?: ModelIntInput | null;
  e1?: ModelIntInput | null;
  e2?: ModelIntInput | null;
  e3?: ModelIntInput | null;
  e4?: ModelIntInput | null;
  e5?: ModelIntInput | null;
  e6?: ModelIntInput | null;
  e7?: ModelIntInput | null;
  f1?: ModelIntInput | null;
  f2?: ModelIntInput | null;
  f3?: ModelIntInput | null;
  f4?: ModelIntInput | null;
  f5?: ModelIntInput | null;
  f6?: ModelIntInput | null;
  f7?: ModelIntInput | null;
  f8?: ModelIntInput | null;
  f9?: ModelIntInput | null;
  f10?: ModelIntInput | null;
  g1?: ModelStringInput | null;
  and?: Array<ModelCovidMonitoringFilterInput | null> | null;
  or?: Array<ModelCovidMonitoringFilterInput | null> | null;
  not?: ModelCovidMonitoringFilterInput | null;
};

export type ModelCovidMonitoringConnection = {
  __typename: "ModelCovidMonitoringConnection";
  items: Array<CovidMonitoring | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAgentFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  name?: ModelStringInput | null;
  coordinator_name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAgentFilterInput | null> | null;
  or?: Array<ModelAgentFilterInput | null> | null;
  not?: ModelAgentFilterInput | null;
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection";
  items: Array<Agent | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateInterventionsMutation = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateInterventionsMutation = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteInterventionsMutation = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateEnlightenmentCodeMutation = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type UpdateEnlightenmentCodeMutation = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type DeleteEnlightenmentCodeMutation = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type CreateActivitiesMutation = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateActivitiesMutation = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteActivitiesMutation = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateAgentEnlightenmentMutation = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAgentEnlightenmentMutation = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAgentEnlightenmentMutation = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateAgentEnlightenmentCodeMutation = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAgentEnlightenmentCodeMutation = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAgentEnlightenmentCodeMutation = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCovidMonitoringMutation = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCovidMonitoringMutation = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCovidMonitoringMutation = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateAgentMutation = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAgentMutation = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAgentMutation = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetInterventionsQuery = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListInterventionsQuery = {
  __typename: "ModelInterventionsConnection";
  items: Array<{
    __typename: "Interventions";
    id: string;
    user_id?: string | null;
    date?: string | null;
    a1?: number | null;
    a2?: number | null;
    a3?: number | null;
    a4?: number | null;
    b1?: number | null;
    b2?: number | null;
    b3?: number | null;
    b4?: number | null;
    c1?: number | null;
    c2?: number | null;
    c3?: number | null;
    c4?: number | null;
    c5?: number | null;
    d1?: number | null;
    d2?: number | null;
    d3?: number | null;
    d4?: number | null;
    d5?: number | null;
    d6?: number | null;
    d7?: number | null;
    d8?: number | null;
    e1?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncInterventionsQuery = {
  __typename: "ModelInterventionsConnection";
  items: Array<{
    __typename: "Interventions";
    id: string;
    user_id?: string | null;
    date?: string | null;
    a1?: number | null;
    a2?: number | null;
    a3?: number | null;
    a4?: number | null;
    b1?: number | null;
    b2?: number | null;
    b3?: number | null;
    b4?: number | null;
    c1?: number | null;
    c2?: number | null;
    c3?: number | null;
    c4?: number | null;
    c5?: number | null;
    d1?: number | null;
    d2?: number | null;
    d3?: number | null;
    d4?: number | null;
    d5?: number | null;
    d6?: number | null;
    d7?: number | null;
    d8?: number | null;
    e1?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetEnlightenmentsQuery = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListEnlightenmentsQuery = {
  __typename: "ModelEnlightenmentsConnection";
  items: Array<{
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncEnlightenmentsQuery = {
  __typename: "ModelEnlightenmentsConnection";
  items: Array<{
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetEnlightenmentCodeQuery = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type ListEnlightenmentCodesQuery = {
  __typename: "ModelEnlightenmentCodeConnection";
  items: Array<{
    __typename: "EnlightenmentCode";
    id: string;
    enlightenmentID: string;
    type?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    f11?: number | null;
    f12?: number | null;
    f13?: number | null;
    f14?: number | null;
    f15?: number | null;
    f16?: number | null;
    f17?: number | null;
    f18?: number | null;
    f19?: number | null;
    f20?: number | null;
    f21?: number | null;
    f22?: number | null;
    f23?: number | null;
    f24?: number | null;
    f25?: number | null;
    f26?: number | null;
    f27?: number | null;
    f28?: number | null;
    f29?: number | null;
    f30?: number | null;
    enlightenment?: {
      __typename: "Enlightenments";
      id: string;
      user_id?: string | null;
      date?: string | null;
      no_individuals?: number | null;
      no_families?: number | null;
      no_people_in_families?: number | null;
      school_name?: string | null;
      no_students?: number | null;
      community_center_name?: string | null;
      no_community_center_members?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    enlightenmentsEnlightenmentCodesId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncEnlightenmentCodesQuery = {
  __typename: "ModelEnlightenmentCodeConnection";
  items: Array<{
    __typename: "EnlightenmentCode";
    id: string;
    enlightenmentID: string;
    type?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    f11?: number | null;
    f12?: number | null;
    f13?: number | null;
    f14?: number | null;
    f15?: number | null;
    f16?: number | null;
    f17?: number | null;
    f18?: number | null;
    f19?: number | null;
    f20?: number | null;
    f21?: number | null;
    f22?: number | null;
    f23?: number | null;
    f24?: number | null;
    f25?: number | null;
    f26?: number | null;
    f27?: number | null;
    f28?: number | null;
    f29?: number | null;
    f30?: number | null;
    enlightenment?: {
      __typename: "Enlightenments";
      id: string;
      user_id?: string | null;
      date?: string | null;
      no_individuals?: number | null;
      no_families?: number | null;
      no_people_in_families?: number | null;
      school_name?: string | null;
      no_students?: number | null;
      community_center_name?: string | null;
      no_community_center_members?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    enlightenmentsEnlightenmentCodesId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetActivitiesQuery = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListActivitiesQuery = {
  __typename: "ModelActivitiesConnection";
  items: Array<{
    __typename: "Activities";
    id: string;
    user_id?: string | null;
    date?: string | null;
    time?: string | null;
    activity?: string | null;
    done?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncActivitiesQuery = {
  __typename: "ModelActivitiesConnection";
  items: Array<{
    __typename: "Activities";
    id: string;
    user_id?: string | null;
    date?: string | null;
    time?: string | null;
    activity?: string | null;
    done?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAgentEnlightenmentQuery = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAgentEnlightenmentsQuery = {
  __typename: "ModelAgentEnlightenmentConnection";
  items: Array<{
    __typename: "AgentEnlightenment";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelAgentEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAgentEnlightenmentsQuery = {
  __typename: "ModelAgentEnlightenmentConnection";
  items: Array<{
    __typename: "AgentEnlightenment";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelAgentEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAgentEnlightenmentCodeQuery = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAgentEnlightenmentCodesQuery = {
  __typename: "ModelAgentEnlightenmentCodeConnection";
  items: Array<{
    __typename: "AgentEnlightenmentCode";
    id: string;
    agentEnlightenmentID: string;
    type?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    f11?: number | null;
    f12?: number | null;
    f13?: number | null;
    f14?: number | null;
    f15?: number | null;
    f16?: number | null;
    f17?: number | null;
    f18?: number | null;
    f19?: number | null;
    f20?: number | null;
    f21?: number | null;
    f22?: number | null;
    f23?: number | null;
    f24?: number | null;
    f25?: number | null;
    f26?: number | null;
    f27?: number | null;
    f28?: number | null;
    f29?: number | null;
    f30?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAgentEnlightenmentCodesQuery = {
  __typename: "ModelAgentEnlightenmentCodeConnection";
  items: Array<{
    __typename: "AgentEnlightenmentCode";
    id: string;
    agentEnlightenmentID: string;
    type?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    f11?: number | null;
    f12?: number | null;
    f13?: number | null;
    f14?: number | null;
    f15?: number | null;
    f16?: number | null;
    f17?: number | null;
    f18?: number | null;
    f19?: number | null;
    f20?: number | null;
    f21?: number | null;
    f22?: number | null;
    f23?: number | null;
    f24?: number | null;
    f25?: number | null;
    f26?: number | null;
    f27?: number | null;
    f28?: number | null;
    f29?: number | null;
    f30?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCovidMonitoringQuery = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCovidMonitoringsQuery = {
  __typename: "ModelCovidMonitoringConnection";
  items: Array<{
    __typename: "CovidMonitoring";
    id: string;
    user_id?: string | null;
    date?: string | null;
    a1?: number | null;
    a2?: number | null;
    a3?: number | null;
    a4?: number | null;
    a5?: number | null;
    b1?: number | null;
    b2?: number | null;
    b3?: number | null;
    b4?: number | null;
    b5?: number | null;
    c1?: number | null;
    c2?: number | null;
    c3?: number | null;
    c4?: number | null;
    d1?: number | null;
    d2?: number | null;
    d3?: number | null;
    d4?: number | null;
    e1?: number | null;
    e2?: number | null;
    e3?: number | null;
    e4?: number | null;
    e5?: number | null;
    e6?: number | null;
    e7?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    g1?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCovidMonitoringsQuery = {
  __typename: "ModelCovidMonitoringConnection";
  items: Array<{
    __typename: "CovidMonitoring";
    id: string;
    user_id?: string | null;
    date?: string | null;
    a1?: number | null;
    a2?: number | null;
    a3?: number | null;
    a4?: number | null;
    a5?: number | null;
    b1?: number | null;
    b2?: number | null;
    b3?: number | null;
    b4?: number | null;
    b5?: number | null;
    c1?: number | null;
    c2?: number | null;
    c3?: number | null;
    c4?: number | null;
    d1?: number | null;
    d2?: number | null;
    d3?: number | null;
    d4?: number | null;
    e1?: number | null;
    e2?: number | null;
    e3?: number | null;
    e4?: number | null;
    e5?: number | null;
    e6?: number | null;
    e7?: number | null;
    f1?: number | null;
    f2?: number | null;
    f3?: number | null;
    f4?: number | null;
    f5?: number | null;
    f6?: number | null;
    f7?: number | null;
    f8?: number | null;
    f9?: number | null;
    f10?: number | null;
    g1?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAgentQuery = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAgentsQuery = {
  __typename: "ModelAgentConnection";
  items: Array<{
    __typename: "Agent";
    id: string;
    user_id?: string | null;
    name?: string | null;
    coordinator_name?: string | null;
    location?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAgentsQuery = {
  __typename: "ModelAgentConnection";
  items: Array<{
    __typename: "Agent";
    id: string;
    user_id?: string | null;
    name?: string | null;
    coordinator_name?: string | null;
    location?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateInterventionsSubscription = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateInterventionsSubscription = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteInterventionsSubscription = {
  __typename: "Interventions";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  c5?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  d5?: number | null;
  d6?: number | null;
  d7?: number | null;
  d8?: number | null;
  e1?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelEnlightenmentCodeConnection";
    items: Array<{
      __typename: "EnlightenmentCode";
      id: string;
      enlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      enlightenmentsEnlightenmentCodesId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateEnlightenmentCodeSubscription = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type OnUpdateEnlightenmentCodeSubscription = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type OnDeleteEnlightenmentCodeSubscription = {
  __typename: "EnlightenmentCode";
  id: string;
  enlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  enlightenment?: {
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    no_individuals?: number | null;
    no_families?: number | null;
    no_people_in_families?: number | null;
    school_name?: string | null;
    no_students?: number | null;
    community_center_name?: string | null;
    no_community_center_members?: number | null;
    enlightenmentCodes?: {
      __typename: "ModelEnlightenmentCodeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  enlightenmentsEnlightenmentCodesId?: string | null;
};

export type OnCreateActivitiesSubscription = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateActivitiesSubscription = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteActivitiesSubscription = {
  __typename: "Activities";
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateAgentEnlightenmentSubscription = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAgentEnlightenmentSubscription = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAgentEnlightenmentSubscription = {
  __typename: "AgentEnlightenment";
  id: string;
  user_id?: string | null;
  date?: string | null;
  no_individuals?: number | null;
  no_families?: number | null;
  no_people_in_families?: number | null;
  school_name?: string | null;
  no_students?: number | null;
  community_center_name?: string | null;
  no_community_center_members?: number | null;
  enlightenmentCodes?: {
    __typename: "ModelAgentEnlightenmentCodeConnection";
    items: Array<{
      __typename: "AgentEnlightenmentCode";
      id: string;
      agentEnlightenmentID: string;
      type?: number | null;
      f1?: number | null;
      f2?: number | null;
      f3?: number | null;
      f4?: number | null;
      f5?: number | null;
      f6?: number | null;
      f7?: number | null;
      f8?: number | null;
      f9?: number | null;
      f10?: number | null;
      f11?: number | null;
      f12?: number | null;
      f13?: number | null;
      f14?: number | null;
      f15?: number | null;
      f16?: number | null;
      f17?: number | null;
      f18?: number | null;
      f19?: number | null;
      f20?: number | null;
      f21?: number | null;
      f22?: number | null;
      f23?: number | null;
      f24?: number | null;
      f25?: number | null;
      f26?: number | null;
      f27?: number | null;
      f28?: number | null;
      f29?: number | null;
      f30?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateAgentEnlightenmentCodeSubscription = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAgentEnlightenmentCodeSubscription = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAgentEnlightenmentCodeSubscription = {
  __typename: "AgentEnlightenmentCode";
  id: string;
  agentEnlightenmentID: string;
  type?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  f11?: number | null;
  f12?: number | null;
  f13?: number | null;
  f14?: number | null;
  f15?: number | null;
  f16?: number | null;
  f17?: number | null;
  f18?: number | null;
  f19?: number | null;
  f20?: number | null;
  f21?: number | null;
  f22?: number | null;
  f23?: number | null;
  f24?: number | null;
  f25?: number | null;
  f26?: number | null;
  f27?: number | null;
  f28?: number | null;
  f29?: number | null;
  f30?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCovidMonitoringSubscription = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCovidMonitoringSubscription = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCovidMonitoringSubscription = {
  __typename: "CovidMonitoring";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: number | null;
  a3?: number | null;
  a4?: number | null;
  a5?: number | null;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  b5?: number | null;
  c1?: number | null;
  c2?: number | null;
  c3?: number | null;
  c4?: number | null;
  d1?: number | null;
  d2?: number | null;
  d3?: number | null;
  d4?: number | null;
  e1?: number | null;
  e2?: number | null;
  e3?: number | null;
  e4?: number | null;
  e5?: number | null;
  e6?: number | null;
  e7?: number | null;
  f1?: number | null;
  f2?: number | null;
  f3?: number | null;
  f4?: number | null;
  f5?: number | null;
  f6?: number | null;
  f7?: number | null;
  f8?: number | null;
  f9?: number | null;
  f10?: number | null;
  g1?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateAgentSubscription = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAgentSubscription = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAgentSubscription = {
  __typename: "Agent";
  id: string;
  user_id?: string | null;
  name?: string | null;
  coordinator_name?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInterventions(
    input: CreateInterventionsInput,
    condition?: ModelInterventionsConditionInput
  ): Promise<CreateInterventionsMutation> {
    const statement = `mutation CreateInterventions($input: CreateInterventionsInput!, $condition: ModelInterventionsConditionInput) {
        createInterventions(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInterventionsMutation>response.data.createInterventions;
  }
  async UpdateInterventions(
    input: UpdateInterventionsInput,
    condition?: ModelInterventionsConditionInput
  ): Promise<UpdateInterventionsMutation> {
    const statement = `mutation UpdateInterventions($input: UpdateInterventionsInput!, $condition: ModelInterventionsConditionInput) {
        updateInterventions(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInterventionsMutation>response.data.updateInterventions;
  }
  async DeleteInterventions(
    input: DeleteInterventionsInput,
    condition?: ModelInterventionsConditionInput
  ): Promise<DeleteInterventionsMutation> {
    const statement = `mutation DeleteInterventions($input: DeleteInterventionsInput!, $condition: ModelInterventionsConditionInput) {
        deleteInterventions(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInterventionsMutation>response.data.deleteInterventions;
  }
  async CreateEnlightenments(
    input: CreateEnlightenmentsInput,
    condition?: ModelEnlightenmentsConditionInput
  ): Promise<CreateEnlightenmentsMutation> {
    const statement = `mutation CreateEnlightenments($input: CreateEnlightenmentsInput!, $condition: ModelEnlightenmentsConditionInput) {
        createEnlightenments(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEnlightenmentsMutation>response.data.createEnlightenments;
  }
  async UpdateEnlightenments(
    input: UpdateEnlightenmentsInput,
    condition?: ModelEnlightenmentsConditionInput
  ): Promise<UpdateEnlightenmentsMutation> {
    const statement = `mutation UpdateEnlightenments($input: UpdateEnlightenmentsInput!, $condition: ModelEnlightenmentsConditionInput) {
        updateEnlightenments(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEnlightenmentsMutation>response.data.updateEnlightenments;
  }
  async DeleteEnlightenments(
    input: DeleteEnlightenmentsInput,
    condition?: ModelEnlightenmentsConditionInput
  ): Promise<DeleteEnlightenmentsMutation> {
    const statement = `mutation DeleteEnlightenments($input: DeleteEnlightenmentsInput!, $condition: ModelEnlightenmentsConditionInput) {
        deleteEnlightenments(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEnlightenmentsMutation>response.data.deleteEnlightenments;
  }
  async CreateEnlightenmentCode(
    input: CreateEnlightenmentCodeInput,
    condition?: ModelEnlightenmentCodeConditionInput
  ): Promise<CreateEnlightenmentCodeMutation> {
    const statement = `mutation CreateEnlightenmentCode($input: CreateEnlightenmentCodeInput!, $condition: ModelEnlightenmentCodeConditionInput) {
        createEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEnlightenmentCodeMutation>(
      response.data.createEnlightenmentCode
    );
  }
  async UpdateEnlightenmentCode(
    input: UpdateEnlightenmentCodeInput,
    condition?: ModelEnlightenmentCodeConditionInput
  ): Promise<UpdateEnlightenmentCodeMutation> {
    const statement = `mutation UpdateEnlightenmentCode($input: UpdateEnlightenmentCodeInput!, $condition: ModelEnlightenmentCodeConditionInput) {
        updateEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEnlightenmentCodeMutation>(
      response.data.updateEnlightenmentCode
    );
  }
  async DeleteEnlightenmentCode(
    input: DeleteEnlightenmentCodeInput,
    condition?: ModelEnlightenmentCodeConditionInput
  ): Promise<DeleteEnlightenmentCodeMutation> {
    const statement = `mutation DeleteEnlightenmentCode($input: DeleteEnlightenmentCodeInput!, $condition: ModelEnlightenmentCodeConditionInput) {
        deleteEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEnlightenmentCodeMutation>(
      response.data.deleteEnlightenmentCode
    );
  }
  async CreateActivities(
    input: CreateActivitiesInput,
    condition?: ModelActivitiesConditionInput
  ): Promise<CreateActivitiesMutation> {
    const statement = `mutation CreateActivities($input: CreateActivitiesInput!, $condition: ModelActivitiesConditionInput) {
        createActivities(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivitiesMutation>response.data.createActivities;
  }
  async UpdateActivities(
    input: UpdateActivitiesInput,
    condition?: ModelActivitiesConditionInput
  ): Promise<UpdateActivitiesMutation> {
    const statement = `mutation UpdateActivities($input: UpdateActivitiesInput!, $condition: ModelActivitiesConditionInput) {
        updateActivities(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivitiesMutation>response.data.updateActivities;
  }
  async DeleteActivities(
    input: DeleteActivitiesInput,
    condition?: ModelActivitiesConditionInput
  ): Promise<DeleteActivitiesMutation> {
    const statement = `mutation DeleteActivities($input: DeleteActivitiesInput!, $condition: ModelActivitiesConditionInput) {
        deleteActivities(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivitiesMutation>response.data.deleteActivities;
  }
  async CreateAgentEnlightenment(
    input: CreateAgentEnlightenmentInput,
    condition?: ModelAgentEnlightenmentConditionInput
  ): Promise<CreateAgentEnlightenmentMutation> {
    const statement = `mutation CreateAgentEnlightenment($input: CreateAgentEnlightenmentInput!, $condition: ModelAgentEnlightenmentConditionInput) {
        createAgentEnlightenment(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAgentEnlightenmentMutation>(
      response.data.createAgentEnlightenment
    );
  }
  async UpdateAgentEnlightenment(
    input: UpdateAgentEnlightenmentInput,
    condition?: ModelAgentEnlightenmentConditionInput
  ): Promise<UpdateAgentEnlightenmentMutation> {
    const statement = `mutation UpdateAgentEnlightenment($input: UpdateAgentEnlightenmentInput!, $condition: ModelAgentEnlightenmentConditionInput) {
        updateAgentEnlightenment(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAgentEnlightenmentMutation>(
      response.data.updateAgentEnlightenment
    );
  }
  async DeleteAgentEnlightenment(
    input: DeleteAgentEnlightenmentInput,
    condition?: ModelAgentEnlightenmentConditionInput
  ): Promise<DeleteAgentEnlightenmentMutation> {
    const statement = `mutation DeleteAgentEnlightenment($input: DeleteAgentEnlightenmentInput!, $condition: ModelAgentEnlightenmentConditionInput) {
        deleteAgentEnlightenment(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAgentEnlightenmentMutation>(
      response.data.deleteAgentEnlightenment
    );
  }
  async CreateAgentEnlightenmentCode(
    input: CreateAgentEnlightenmentCodeInput,
    condition?: ModelAgentEnlightenmentCodeConditionInput
  ): Promise<CreateAgentEnlightenmentCodeMutation> {
    const statement = `mutation CreateAgentEnlightenmentCode($input: CreateAgentEnlightenmentCodeInput!, $condition: ModelAgentEnlightenmentCodeConditionInput) {
        createAgentEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAgentEnlightenmentCodeMutation>(
      response.data.createAgentEnlightenmentCode
    );
  }
  async UpdateAgentEnlightenmentCode(
    input: UpdateAgentEnlightenmentCodeInput,
    condition?: ModelAgentEnlightenmentCodeConditionInput
  ): Promise<UpdateAgentEnlightenmentCodeMutation> {
    const statement = `mutation UpdateAgentEnlightenmentCode($input: UpdateAgentEnlightenmentCodeInput!, $condition: ModelAgentEnlightenmentCodeConditionInput) {
        updateAgentEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAgentEnlightenmentCodeMutation>(
      response.data.updateAgentEnlightenmentCode
    );
  }
  async DeleteAgentEnlightenmentCode(
    input: DeleteAgentEnlightenmentCodeInput,
    condition?: ModelAgentEnlightenmentCodeConditionInput
  ): Promise<DeleteAgentEnlightenmentCodeMutation> {
    const statement = `mutation DeleteAgentEnlightenmentCode($input: DeleteAgentEnlightenmentCodeInput!, $condition: ModelAgentEnlightenmentCodeConditionInput) {
        deleteAgentEnlightenmentCode(input: $input, condition: $condition) {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAgentEnlightenmentCodeMutation>(
      response.data.deleteAgentEnlightenmentCode
    );
  }
  async CreateCovidMonitoring(
    input: CreateCovidMonitoringInput,
    condition?: ModelCovidMonitoringConditionInput
  ): Promise<CreateCovidMonitoringMutation> {
    const statement = `mutation CreateCovidMonitoring($input: CreateCovidMonitoringInput!, $condition: ModelCovidMonitoringConditionInput) {
        createCovidMonitoring(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCovidMonitoringMutation>response.data.createCovidMonitoring;
  }
  async UpdateCovidMonitoring(
    input: UpdateCovidMonitoringInput,
    condition?: ModelCovidMonitoringConditionInput
  ): Promise<UpdateCovidMonitoringMutation> {
    const statement = `mutation UpdateCovidMonitoring($input: UpdateCovidMonitoringInput!, $condition: ModelCovidMonitoringConditionInput) {
        updateCovidMonitoring(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCovidMonitoringMutation>response.data.updateCovidMonitoring;
  }
  async DeleteCovidMonitoring(
    input: DeleteCovidMonitoringInput,
    condition?: ModelCovidMonitoringConditionInput
  ): Promise<DeleteCovidMonitoringMutation> {
    const statement = `mutation DeleteCovidMonitoring($input: DeleteCovidMonitoringInput!, $condition: ModelCovidMonitoringConditionInput) {
        deleteCovidMonitoring(input: $input, condition: $condition) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCovidMonitoringMutation>response.data.deleteCovidMonitoring;
  }
  async CreateAgent(
    input: CreateAgentInput,
    condition?: ModelAgentConditionInput
  ): Promise<CreateAgentMutation> {
    const statement = `mutation CreateAgent($input: CreateAgentInput!, $condition: ModelAgentConditionInput) {
        createAgent(input: $input, condition: $condition) {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAgentMutation>response.data.createAgent;
  }
  async UpdateAgent(
    input: UpdateAgentInput,
    condition?: ModelAgentConditionInput
  ): Promise<UpdateAgentMutation> {
    const statement = `mutation UpdateAgent($input: UpdateAgentInput!, $condition: ModelAgentConditionInput) {
        updateAgent(input: $input, condition: $condition) {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAgentMutation>response.data.updateAgent;
  }
  async DeleteAgent(
    input: DeleteAgentInput,
    condition?: ModelAgentConditionInput
  ): Promise<DeleteAgentMutation> {
    const statement = `mutation DeleteAgent($input: DeleteAgentInput!, $condition: ModelAgentConditionInput) {
        deleteAgent(input: $input, condition: $condition) {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAgentMutation>response.data.deleteAgent;
  }
  async GetInterventions(id: string): Promise<GetInterventionsQuery> {
    const statement = `query GetInterventions($id: ID!) {
        getInterventions(id: $id) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInterventionsQuery>response.data.getInterventions;
  }
  async ListInterventions(
    filter?: ModelInterventionsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInterventionsQuery> {
    const statement = `query ListInterventions($filter: ModelInterventionsFilterInput, $limit: Int, $nextToken: String) {
        listInterventions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            date
            a1
            a2
            a3
            a4
            b1
            b2
            b3
            b4
            c1
            c2
            c3
            c4
            c5
            d1
            d2
            d3
            d4
            d5
            d6
            d7
            d8
            e1
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInterventionsQuery>response.data.listInterventions;
  }
  async SyncInterventions(
    filter?: ModelInterventionsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncInterventionsQuery> {
    const statement = `query SyncInterventions($filter: ModelInterventionsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncInterventions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            date
            a1
            a2
            a3
            a4
            b1
            b2
            b3
            b4
            c1
            c2
            c3
            c4
            c5
            d1
            d2
            d3
            d4
            d5
            d6
            d7
            d8
            e1
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncInterventionsQuery>response.data.syncInterventions;
  }
  async GetEnlightenments(id: string): Promise<GetEnlightenmentsQuery> {
    const statement = `query GetEnlightenments($id: ID!) {
        getEnlightenments(id: $id) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEnlightenmentsQuery>response.data.getEnlightenments;
  }
  async ListEnlightenments(
    filter?: ModelEnlightenmentsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEnlightenmentsQuery> {
    const statement = `query ListEnlightenments($filter: ModelEnlightenmentsFilterInput, $limit: Int, $nextToken: String) {
        listEnlightenments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEnlightenmentsQuery>response.data.listEnlightenments;
  }
  async SyncEnlightenments(
    filter?: ModelEnlightenmentsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncEnlightenmentsQuery> {
    const statement = `query SyncEnlightenments($filter: ModelEnlightenmentsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncEnlightenments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncEnlightenmentsQuery>response.data.syncEnlightenments;
  }
  async GetEnlightenmentCode(id: string): Promise<GetEnlightenmentCodeQuery> {
    const statement = `query GetEnlightenmentCode($id: ID!) {
        getEnlightenmentCode(id: $id) {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEnlightenmentCodeQuery>response.data.getEnlightenmentCode;
  }
  async ListEnlightenmentCodes(
    filter?: ModelEnlightenmentCodeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEnlightenmentCodesQuery> {
    const statement = `query ListEnlightenmentCodes($filter: ModelEnlightenmentCodeFilterInput, $limit: Int, $nextToken: String) {
        listEnlightenmentCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            enlightenmentID
            type
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            f11
            f12
            f13
            f14
            f15
            f16
            f17
            f18
            f19
            f20
            f21
            f22
            f23
            f24
            f25
            f26
            f27
            f28
            f29
            f30
            enlightenment {
              __typename
              id
              user_id
              date
              no_individuals
              no_families
              no_people_in_families
              school_name
              no_students
              community_center_name
              no_community_center_members
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            enlightenmentsEnlightenmentCodesId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEnlightenmentCodesQuery>response.data.listEnlightenmentCodes;
  }
  async SyncEnlightenmentCodes(
    filter?: ModelEnlightenmentCodeFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncEnlightenmentCodesQuery> {
    const statement = `query SyncEnlightenmentCodes($filter: ModelEnlightenmentCodeFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncEnlightenmentCodes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            enlightenmentID
            type
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            f11
            f12
            f13
            f14
            f15
            f16
            f17
            f18
            f19
            f20
            f21
            f22
            f23
            f24
            f25
            f26
            f27
            f28
            f29
            f30
            enlightenment {
              __typename
              id
              user_id
              date
              no_individuals
              no_families
              no_people_in_families
              school_name
              no_students
              community_center_name
              no_community_center_members
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            enlightenmentsEnlightenmentCodesId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncEnlightenmentCodesQuery>response.data.syncEnlightenmentCodes;
  }
  async GetActivities(id: string): Promise<GetActivitiesQuery> {
    const statement = `query GetActivities($id: ID!) {
        getActivities(id: $id) {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivitiesQuery>response.data.getActivities;
  }
  async ListActivities(
    filter?: ModelActivitiesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitiesQuery> {
    const statement = `query ListActivities($filter: ModelActivitiesFilterInput, $limit: Int, $nextToken: String) {
        listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            date
            time
            activity
            done
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivitiesQuery>response.data.listActivities;
  }
  async SyncActivities(
    filter?: ModelActivitiesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncActivitiesQuery> {
    const statement = `query SyncActivities($filter: ModelActivitiesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncActivities(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            date
            time
            activity
            done
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncActivitiesQuery>response.data.syncActivities;
  }
  async GetAgentEnlightenment(id: string): Promise<GetAgentEnlightenmentQuery> {
    const statement = `query GetAgentEnlightenment($id: ID!) {
        getAgentEnlightenment(id: $id) {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAgentEnlightenmentQuery>response.data.getAgentEnlightenment;
  }
  async ListAgentEnlightenments(
    filter?: ModelAgentEnlightenmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAgentEnlightenmentsQuery> {
    const statement = `query ListAgentEnlightenments($filter: ModelAgentEnlightenmentFilterInput, $limit: Int, $nextToken: String) {
        listAgentEnlightenments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAgentEnlightenmentsQuery>response.data.listAgentEnlightenments;
  }
  async SyncAgentEnlightenments(
    filter?: ModelAgentEnlightenmentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAgentEnlightenmentsQuery> {
    const statement = `query SyncAgentEnlightenments($filter: ModelAgentEnlightenmentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAgentEnlightenments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAgentEnlightenmentsQuery>response.data.syncAgentEnlightenments;
  }
  async GetAgentEnlightenmentCode(
    id: string
  ): Promise<GetAgentEnlightenmentCodeQuery> {
    const statement = `query GetAgentEnlightenmentCode($id: ID!) {
        getAgentEnlightenmentCode(id: $id) {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAgentEnlightenmentCodeQuery>(
      response.data.getAgentEnlightenmentCode
    );
  }
  async ListAgentEnlightenmentCodes(
    filter?: ModelAgentEnlightenmentCodeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAgentEnlightenmentCodesQuery> {
    const statement = `query ListAgentEnlightenmentCodes($filter: ModelAgentEnlightenmentCodeFilterInput, $limit: Int, $nextToken: String) {
        listAgentEnlightenmentCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            agentEnlightenmentID
            type
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            f11
            f12
            f13
            f14
            f15
            f16
            f17
            f18
            f19
            f20
            f21
            f22
            f23
            f24
            f25
            f26
            f27
            f28
            f29
            f30
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAgentEnlightenmentCodesQuery>(
      response.data.listAgentEnlightenmentCodes
    );
  }
  async SyncAgentEnlightenmentCodes(
    filter?: ModelAgentEnlightenmentCodeFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAgentEnlightenmentCodesQuery> {
    const statement = `query SyncAgentEnlightenmentCodes($filter: ModelAgentEnlightenmentCodeFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAgentEnlightenmentCodes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            agentEnlightenmentID
            type
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            f11
            f12
            f13
            f14
            f15
            f16
            f17
            f18
            f19
            f20
            f21
            f22
            f23
            f24
            f25
            f26
            f27
            f28
            f29
            f30
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAgentEnlightenmentCodesQuery>(
      response.data.syncAgentEnlightenmentCodes
    );
  }
  async GetCovidMonitoring(id: string): Promise<GetCovidMonitoringQuery> {
    const statement = `query GetCovidMonitoring($id: ID!) {
        getCovidMonitoring(id: $id) {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCovidMonitoringQuery>response.data.getCovidMonitoring;
  }
  async ListCovidMonitorings(
    filter?: ModelCovidMonitoringFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCovidMonitoringsQuery> {
    const statement = `query ListCovidMonitorings($filter: ModelCovidMonitoringFilterInput, $limit: Int, $nextToken: String) {
        listCovidMonitorings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            date
            a1
            a2
            a3
            a4
            a5
            b1
            b2
            b3
            b4
            b5
            c1
            c2
            c3
            c4
            d1
            d2
            d3
            d4
            e1
            e2
            e3
            e4
            e5
            e6
            e7
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            g1
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCovidMonitoringsQuery>response.data.listCovidMonitorings;
  }
  async SyncCovidMonitorings(
    filter?: ModelCovidMonitoringFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCovidMonitoringsQuery> {
    const statement = `query SyncCovidMonitorings($filter: ModelCovidMonitoringFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCovidMonitorings(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            date
            a1
            a2
            a3
            a4
            a5
            b1
            b2
            b3
            b4
            b5
            c1
            c2
            c3
            c4
            d1
            d2
            d3
            d4
            e1
            e2
            e3
            e4
            e5
            e6
            e7
            f1
            f2
            f3
            f4
            f5
            f6
            f7
            f8
            f9
            f10
            g1
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCovidMonitoringsQuery>response.data.syncCovidMonitorings;
  }
  async GetAgent(id: string): Promise<GetAgentQuery> {
    const statement = `query GetAgent($id: ID!) {
        getAgent(id: $id) {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAgentQuery>response.data.getAgent;
  }
  async ListAgents(
    filter?: ModelAgentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAgentsQuery> {
    const statement = `query ListAgents($filter: ModelAgentFilterInput, $limit: Int, $nextToken: String) {
        listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            name
            coordinator_name
            location
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAgentsQuery>response.data.listAgents;
  }
  async SyncAgents(
    filter?: ModelAgentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAgentsQuery> {
    const statement = `query SyncAgents($filter: ModelAgentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAgents(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user_id
            name
            coordinator_name
            location
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAgentsQuery>response.data.syncAgents;
  }
  OnCreateInterventionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateInterventions">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInterventions {
        onCreateInterventions {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateInterventions">>
  >;

  OnUpdateInterventionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateInterventions">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInterventions {
        onUpdateInterventions {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateInterventions">>
  >;

  OnDeleteInterventionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteInterventions">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInterventions {
        onDeleteInterventions {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          b1
          b2
          b3
          b4
          c1
          c2
          c3
          c4
          c5
          d1
          d2
          d3
          d4
          d5
          d6
          d7
          d8
          e1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteInterventions">>
  >;

  OnCreateEnlightenmentsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEnlightenments">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEnlightenments {
        onCreateEnlightenments {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEnlightenments">
    >
  >;

  OnUpdateEnlightenmentsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEnlightenments">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEnlightenments {
        onUpdateEnlightenments {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEnlightenments">
    >
  >;

  OnDeleteEnlightenmentsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEnlightenments">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEnlightenments {
        onDeleteEnlightenments {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              enlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              enlightenmentsEnlightenmentCodesId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEnlightenments">
    >
  >;

  OnCreateEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEnlightenmentCode {
        onCreateEnlightenmentCode {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEnlightenmentCode">
    >
  >;

  OnUpdateEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEnlightenmentCode {
        onUpdateEnlightenmentCode {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEnlightenmentCode">
    >
  >;

  OnDeleteEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEnlightenmentCode {
        onDeleteEnlightenmentCode {
          __typename
          id
          enlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          enlightenment {
            __typename
            id
            user_id
            date
            no_individuals
            no_families
            no_people_in_families
            school_name
            no_students
            community_center_name
            no_community_center_members
            enlightenmentCodes {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          enlightenmentsEnlightenmentCodesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEnlightenmentCode">
    >
  >;

  OnCreateActivitiesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivities">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateActivities {
        onCreateActivities {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivities">>
  >;

  OnUpdateActivitiesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivities">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateActivities {
        onUpdateActivities {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivities">>
  >;

  OnDeleteActivitiesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivities">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteActivities {
        onDeleteActivities {
          __typename
          id
          user_id
          date
          time
          activity
          done
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivities">>
  >;

  OnCreateAgentEnlightenmentListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAgentEnlightenment">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAgentEnlightenment {
        onCreateAgentEnlightenment {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAgentEnlightenment">
    >
  >;

  OnUpdateAgentEnlightenmentListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAgentEnlightenment">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAgentEnlightenment {
        onUpdateAgentEnlightenment {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAgentEnlightenment">
    >
  >;

  OnDeleteAgentEnlightenmentListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAgentEnlightenment">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAgentEnlightenment {
        onDeleteAgentEnlightenment {
          __typename
          id
          user_id
          date
          no_individuals
          no_families
          no_people_in_families
          school_name
          no_students
          community_center_name
          no_community_center_members
          enlightenmentCodes {
            __typename
            items {
              __typename
              id
              agentEnlightenmentID
              type
              f1
              f2
              f3
              f4
              f5
              f6
              f7
              f8
              f9
              f10
              f11
              f12
              f13
              f14
              f15
              f16
              f17
              f18
              f19
              f20
              f21
              f22
              f23
              f24
              f25
              f26
              f27
              f28
              f29
              f30
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAgentEnlightenment">
    >
  >;

  OnCreateAgentEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAgentEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAgentEnlightenmentCode {
        onCreateAgentEnlightenmentCode {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAgentEnlightenmentCode">
    >
  >;

  OnUpdateAgentEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAgentEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAgentEnlightenmentCode {
        onUpdateAgentEnlightenmentCode {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAgentEnlightenmentCode">
    >
  >;

  OnDeleteAgentEnlightenmentCodeListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAgentEnlightenmentCode">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAgentEnlightenmentCode {
        onDeleteAgentEnlightenmentCode {
          __typename
          id
          agentEnlightenmentID
          type
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          f11
          f12
          f13
          f14
          f15
          f16
          f17
          f18
          f19
          f20
          f21
          f22
          f23
          f24
          f25
          f26
          f27
          f28
          f29
          f30
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAgentEnlightenmentCode">
    >
  >;

  OnCreateCovidMonitoringListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateCovidMonitoring">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCovidMonitoring {
        onCreateCovidMonitoring {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateCovidMonitoring">
    >
  >;

  OnUpdateCovidMonitoringListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateCovidMonitoring">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCovidMonitoring {
        onUpdateCovidMonitoring {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateCovidMonitoring">
    >
  >;

  OnDeleteCovidMonitoringListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteCovidMonitoring">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCovidMonitoring {
        onDeleteCovidMonitoring {
          __typename
          id
          user_id
          date
          a1
          a2
          a3
          a4
          a5
          b1
          b2
          b3
          b4
          b5
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          d4
          e1
          e2
          e3
          e4
          e5
          e6
          e7
          f1
          f2
          f3
          f4
          f5
          f6
          f7
          f8
          f9
          f10
          g1
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteCovidMonitoring">
    >
  >;

  OnCreateAgentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAgent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAgent {
        onCreateAgent {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAgent">>
  >;

  OnUpdateAgentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAgent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAgent {
        onUpdateAgent {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAgent">>
  >;

  OnDeleteAgentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAgent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAgent {
        onDeleteAgent {
          __typename
          id
          user_id
          name
          coordinator_name
          location
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAgent">>
  >;
}
