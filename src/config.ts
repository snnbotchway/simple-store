import "dotenv/config"

const getRequiredVariable = (variable: string) => {
    const value = process.env[variable]
    if (!value) throw new Error(`Required variable ${variable} is not set`)
    return value
}

export const DEBUG = process.env.DEBUG === "true"
export const MONGO_URI = getRequiredVariable("MONGO_URI")
export const PRIVATE_KEY = getRequiredVariable("PRIVATE_KEY")
export const SEPOLIA_RPC_URL = getRequiredVariable("SEPOLIA_RPC_URL")
