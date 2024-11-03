import { ethers } from "ethers";
import { Storage__factory } from "./types";

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

export const storageContract = Storage__factory.connect("0x4361c49A042Bb4730FA2590daa65B2804D26D093", provider);
