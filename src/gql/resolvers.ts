import { storageService } from "../contracts"
import { Resolvers } from "./generated/gql.types"

export const resolvers: Resolvers = {
    Query: {
        retrieveNumber: storageService.retrieveNumber
    },
    Mutation: {
        storeNumber: (_, { num }) => storageService.storeNumber(num)
    }
}
