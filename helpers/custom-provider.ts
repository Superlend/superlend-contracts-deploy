import { ethers } from "hardhat";
import { JsonRpcProvider } from "@ethersproject/providers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
declare var hre: HardhatRuntimeEnvironment;

export async function main() {

    let deployCall = hre.deployments.deploy;

    hre.deployments.deploy = async (name: string, arg: any): Promise<any> => {
        console.log(`Deploying contract with args: ${JSON.stringify(name)}`);
        // do try catch and if it fails, try to deploy again 5 times
        for (let i = 0; i < 5; i++) {
            try {
                const result = await Promise.race([
                    deployCall(name, arg),
                    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Deploy call timed out")), 60000))
                ]);
                return result;
            } catch (error) {
                console.log(`Attempt ${i} failed. Retrying...`);
            }
        }
        throw new Error("Failed to deploy contract after 5 attempts");
    };
}
