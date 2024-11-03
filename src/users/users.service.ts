import { WithId } from "mongodb"
import { db } from "../db/connection"
import { graphQLError } from "../gql/errors"
import { UserEntity } from "./users.types"

class UsersService {
    private readonly usersCollection = db.collection<UserEntity>("users")

    createUser = async (user: UserEntity): Promise<WithId<UserEntity>> => {
        try {
            const result = await this.usersCollection.insertOne(user)
            return { _id: result.insertedId, ...user }
        } catch (error) {
            console.error(error)
            throw graphQLError("Failed to create user")
        }
    }

    getUsers = async (): Promise<WithId<UserEntity>[]> => {
        try {
            return await this.usersCollection.find().toArray()
        } catch (error) {
            console.error(error)
            throw graphQLError("Failed to get users")
        }
    }
}

export const usersService = new UsersService()
