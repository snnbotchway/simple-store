import { GraphQLScalarType, Kind } from "graphql"
import { graphQLError } from "../errors"

const getInvalidEmailError = () => graphQLError("Invalid email address format", "BAD_USER_INPUT")

export const EmailScalar = new GraphQLScalarType<string>({
    name: "Email",
    description: "Custom scalar type for validating email addresses",
    parseValue: (value: unknown) => {
        if (typeof value !== "string" || !isValidEmail(value)) throw getInvalidEmailError()
        return value
    },
    serialize: (value: unknown) => value as string,
    parseLiteral: (ast) => {
        if (ast.kind !== Kind.STRING || !isValidEmail(ast.value)) throw getInvalidEmailError()
        return ast.value
    }
})

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}
