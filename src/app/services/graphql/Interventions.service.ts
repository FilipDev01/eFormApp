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
}
