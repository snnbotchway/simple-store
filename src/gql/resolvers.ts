import { storageService } from "../contracts"
import { usersService } from "../users/users.service"
import { Resolvers } from "./generated/gql.types"

export const resolvers: Resolvers = {
    Query: {
        retrieveNumber: storageService.retrieveNumber,
        getUsers: usersService.getUsers
    },
    Mutation: {
        storeNumber: (_, { num }) => storageService.storeNumber(num),
        createUser: (_, { user }) => usersService.createUser(user)
    }
}
