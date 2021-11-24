import {Networks} from "./Networks";
import {Contract, Signer} from "ethers";
import {Provider} from "@ethersproject/providers";
import {
    CirculatingSupply, CirculatingSupply__factory,
    ERC20,
    OlympusERC20,
    OlympusERC20__factory,
    SOlympusERC20V2,
    SOlympusERC20V2__factory
} from "../../contracts";


export interface IContract<T>{
    address: string,
    deployedAt: number,
    factory: (address: string, signerOrProvider: Signer | Provider) => T
}

export class ContractVersions<T> {
    versions: IContract<T>[]

    constructor(versions: IContract<T>[] = []) {
        this.versions = versions
    }

    getVersion(i: number){
        return this.versions[i];
    }

    atBlock(block: number){
        return this.versions.find(contract => contract.deployedAt >= block);
    }

    latest(){
        return this.versions[this.versions.length-1]
    }

    append(contract: IContract<T>){
        this.versions.push(contract);
        this.versions.sort((c0, c1)=> c1.deployedAt - c0.deployedAt )
    }
}

export interface IContractsRegistry {
    [contract: string]: ContractVersions<any>
}

export interface IExodiaContractsRegistry{
    EXOD: ContractVersions<OlympusERC20>,
    sEXOD: ContractVersions<SOlympusERC20V2>,
    CirculatingSupply: ContractVersions<CirculatingSupply>,
}

export class NetworksContractsRegistry<T> {
    [network: number]: T

    forNetwork(network: Networks): T{
        return this[network];
    }

    addNetwork(network: Networks, registry: T){
        this[network] = registry;
    }
}


export const contracts = new NetworksContractsRegistry<IExodiaContractsRegistry>();

const operaContracts: IExodiaContractsRegistry = {
    EXOD: new ContractVersions([
        {
            address: "0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7",
            deployedAt: 0,
            factory: OlympusERC20__factory.connect
        }
    ]),
    sEXOD: new ContractVersions([
        {
            address: "0x8de250c65636ef02a75e4999890c91cecd38d03d",
            deployedAt: 0,
            factory: SOlympusERC20V2__factory.connect
        }
    ]),
    CirculatingSupply: new ContractVersions([
        {
            address: "0x571ef9199c3559d2450d509a4bda1127f729d205",
            deployedAt: 0,
            factory: CirculatingSupply__factory.connect
        }
    ])
}

contracts.addNetwork(Networks.OPERA_MAIN_NET, operaContracts)
