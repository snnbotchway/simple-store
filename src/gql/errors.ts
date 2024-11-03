import { GraphQLError } from "graphql"

export const graphQLError = (message: string, code = "INTERNAL_SERVER_ERROR") => {
    return new GraphQLError(message, { extensions: { code } })
}
