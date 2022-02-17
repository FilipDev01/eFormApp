export const listAllAgentEnlightenments = /* GraphQL */ `
  query ListAllAgentEnlightenments(
    $filter: ModelAgentEnlightenmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgentEnlightenments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {        
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
            items {                
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
              }        
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
