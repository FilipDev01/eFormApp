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
  onCreateActivities: OnCreateActivitiesSubscription;
  onUpdateActivities: OnUpdateActivitiesSubscription;
  onDeleteActivities: OnDeleteActivitiesSubscription;
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
};

export type DeleteInterventionsInput = {
  id: string;
};

export type CreateEnlightenmentsInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
};

export type ModelEnlightenmentsConditionInput = {
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelStringInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelStringInput | null;
  c1?: ModelStringInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelStringInput | null;
  d1?: ModelStringInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelStringInput | null;
  and?: Array<ModelEnlightenmentsConditionInput | null> | null;
  or?: Array<ModelEnlightenmentsConditionInput | null> | null;
  not?: ModelEnlightenmentsConditionInput | null;
};

export type Enlightenments = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEnlightenmentsInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
};

export type DeleteEnlightenmentsInput = {
  id: string;
};

export type CreateActivitiesInput = {
  id?: string | null;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
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
};

export type UpdateActivitiesInput = {
  id: string;
  user_id?: string | null;
  date?: string | null;
  time?: string | null;
  activity?: string | null;
  done?: number | null;
};

export type DeleteActivitiesInput = {
  id: string;
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

export type ModelInterventionsConnection = {
  __typename: "ModelInterventionsConnection";
  items: Array<Interventions | null>;
  nextToken?: string | null;
};

export type ModelEnlightenmentsFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  date?: ModelStringInput | null;
  a1?: ModelIntInput | null;
  a2?: ModelStringInput | null;
  b1?: ModelIntInput | null;
  b2?: ModelIntInput | null;
  b3?: ModelStringInput | null;
  c1?: ModelStringInput | null;
  c2?: ModelIntInput | null;
  c3?: ModelIntInput | null;
  c4?: ModelStringInput | null;
  d1?: ModelStringInput | null;
  d2?: ModelIntInput | null;
  d3?: ModelStringInput | null;
  and?: Array<ModelEnlightenmentsFilterInput | null> | null;
  or?: Array<ModelEnlightenmentsFilterInput | null> | null;
  not?: ModelEnlightenmentsFilterInput | null;
};

export type ModelEnlightenmentsConnection = {
  __typename: "ModelEnlightenmentsConnection";
  items: Array<Enlightenments | null>;
  nextToken?: string | null;
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
};

export type CreateEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEnlightenmentsMutation = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
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
  } | null>;
  nextToken?: string | null;
};

export type GetEnlightenmentsQuery = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEnlightenmentsQuery = {
  __typename: "ModelEnlightenmentsConnection";
  items: Array<{
    __typename: "Enlightenments";
    id: string;
    user_id?: string | null;
    date?: string | null;
    a1?: number | null;
    a2?: string | null;
    b1?: number | null;
    b2?: number | null;
    b3?: string | null;
    c1?: string | null;
    c2?: number | null;
    c3?: number | null;
    c4?: string | null;
    d1?: string | null;
    d2?: number | null;
    d3?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
  } | null>;
  nextToken?: string | null;
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
};

export type OnCreateEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEnlightenmentsSubscription = {
  __typename: "Enlightenments";
  id: string;
  user_id?: string | null;
  date?: string | null;
  a1?: number | null;
  a2?: string | null;
  b1?: number | null;
  b2?: number | null;
  b3?: string | null;
  c1?: string | null;
  c2?: number | null;
  c3?: number | null;
  c4?: string | null;
  d1?: string | null;
  d2?: number | null;
  d3?: string | null;
  createdAt: string;
  updatedAt: string;
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
          }
          nextToken
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
  async GetEnlightenments(id: string): Promise<GetEnlightenmentsQuery> {
    const statement = `query GetEnlightenments($id: ID!) {
        getEnlightenments(id: $id) {
          __typename
          id
          user_id
          date
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
            a1
            a2
            b1
            b2
            b3
            c1
            c2
            c3
            c4
            d1
            d2
            d3
            createdAt
            updatedAt
          }
          nextToken
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
          }
          nextToken
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
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
          a1
          a2
          b1
          b2
          b3
          c1
          c2
          c3
          c4
          d1
          d2
          d3
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEnlightenments">
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
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivities">>
  >;
}
