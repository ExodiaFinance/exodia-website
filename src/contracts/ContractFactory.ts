import {Networks} from "./Networks";
import {
    contracts,
    ContractVersions,
    IContractsRegistry,
    IExodiaContractsRegistry,
    NetworksContractsRegistry
} from "./contractRegistry";
import {providers, ProvidersRegistry} from "./providersRegistry";
import {ethers} from "ethers";
import {JsonRpcProvider} from "@ethersproject/providers";
import {OlympusERC20} from "../../contracts";

export class ContractFactory<T>{
    providers: ProvidersRegistry;
    contracts: NetworksContractsRegistry<IContractsRegistry>

    constructor(providersRegistry: ProvidersRegistry, contractsRegistry: NetworksContractsRegistry<any>) {
        this.providers = providersRegistry;
        this.contracts = contractsRegistry;
    }

    forNetwork(nid: Networks){
        return new NetworkContractFactory<T>(nid, this.providers, this.contracts);
    }
}


export class NetworkContractFactory<T> {
    network: Networks;
    networkProvider: JsonRpcProvider;
    providers: ProvidersRegistry;
    contracts: NetworksContractsRegistry<IContractsRegistry>

    constructor(network: Networks, providersRegistry: ProvidersRegistry, contractsRegistry: NetworksContractsRegistry<IContractsRegistry>) {
        this.providers = providersRegistry;
        this.contracts = contractsRegistry;
        this.network = network;
        if (!this.providers.networkAvailable(this.network)){
            throw Error(`Network ${network} is not available`);
        }
        const providers = this.providers.forNetwork(network);
        this.networkProvider = new ethers.providers.JsonRpcProvider(providers.httpRpc[0]);
    }

    getContractVersions(contractName: keyof T): ContractVersions<any>{
        const key = contractName as string;
        return this.contracts.forNetwork(this.network)[key];
    }

    getContract(contractName: keyof T, version: number){
        return this.getContractVersions(contractName).getVersion(version);
    }

    getLatestContract(contractName: keyof T){
        return this.getContractVersions(contractName).latest();
    }

    getLatestContractInstance<K>(contractName: keyof T){
        const contract = this.getLatestContract(contractName);
        return contract.factory(contract.address, this.networkProvider) as K;

    }
}

export const contractFactory = new ContractFactory<IExodiaContractsRegistry>(providers, contracts);

