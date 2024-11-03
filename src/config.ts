import "dotenv/config";

const getRequiredVariable = (variable: string) => {
  const value = process.env[variable];
  if (!value) throw new Error(`Required variable ${variable} is not set`);
  return value;
};

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const IS_PRODUCTION = !IS_DEVELOPMENT;

export const PRIVATE_KEY = getRequiredVariable("PRIVATE_KEY");
export const SEPOLIA_RPC_URL = getRequiredVariable("SEPOLIA_RPC_URL");
