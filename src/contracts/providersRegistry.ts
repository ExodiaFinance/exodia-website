import {Networks} from "./Networks";

export interface IProvider {
    httpRpc: string[]
}

export class ProvidersRegistry {
    [network: number]: IProvider

    forNetwork(nid: Networks){
        return this[nid];
    }

    addNetwork(nid: Networks, providers: IProvider){
        this[nid] = providers;
    }

    networkAvailable(nid: Networks){
        return Boolean(this[nid]);
    }
}

export const providers = new ProvidersRegistry();
providers.addNetwork(Networks.OPERA_MAIN_NET, {
    httpRpc: ["https://rpc.ftm.tools"]
})
