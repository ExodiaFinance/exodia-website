import {contractFactory} from "../../../../src/contracts/ContractFactory";
import {Networks} from "../../../../src/contracts/Networks";
import {OlympusERC20} from "../../../../contracts";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const contract = contractFactory
        .forNetwork(Networks.OPERA_MAIN_NET)
        .getLatestContractInstance<OlympusERC20>("EXOD");
    const supply = await contract.totalSupply();
    const supplyFormated = supply.div(1_000_000_000);
    res.status(200).send(supplyFormated.toString());
};
