import { graphQLError } from "../../gql/errors"
import { storageContract, storageContractSigner } from "../contracts"

class StorageService {
    retrieveNumber = async (): Promise<number> => {
        try {
            const number = await storageContract.retrieve()
            return Number(number)
        } catch (error) {
            console.error(error)
            throw graphQLError("Failed to retrieve number", "INTERNAL_SERVER_ERROR")
        }
    }

    storeNumber = async (num: number): Promise<number> => {
        try {
            const tx = await storageContractSigner.store(num)
            await tx.wait()
            return num
        } catch (error) {
            console.error(error)
            throw graphQLError("Failed to store number", "INTERNAL_SERVER_ERROR")
        }
    }
}

export const storageService = new StorageService()
