import { ethers } from "ethers"
import * as config from "../config"
import { Storage__factory } from "./types"

const provider = new ethers.JsonRpcProvider(config.SEPOLIA_RPC_URL)
const wallet = new ethers.Wallet(config.PRIVATE_KEY, provider)

export const storageContract = Storage__factory.connect("0x4361c49A042Bb4730FA2590daa65B2804D26D093", provider)
export const storageContractSigner = storageContract.connect(wallet)
