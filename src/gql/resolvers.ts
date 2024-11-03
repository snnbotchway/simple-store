import { storageService } from "../contracts"
import { usersService } from "../users/users.service"
import { Resolvers } from "./generated/gql.types"

export const resolvers: Resolvers = {
    Query: {
        number: storageService.retrieveNumber,
        users: usersService.getUsers
    },
    Mutation: {
        storeNumber: (_, { num }) => storageService.storeNumber(num),
        createUser: (_, { user }) => usersService.createUser(user)
    }
}
