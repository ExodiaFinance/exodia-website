/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CirculatingSupplyInterface extends utils.Interface {
  functions: {
    "OHM()": FunctionFragment;
    "OHMCirculatingSupply()": FunctionFragment;
    "getNonCirculatingOHM()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "nonCirculatingOHMAddresses(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "setNonCirculatingOHMAddresses(address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "OHMCirculatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNonCirculatingOHM",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonCirculatingOHMAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setNonCirculatingOHMAddresses",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "OHMCirculatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNonCirculatingOHM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonCirculatingOHMAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNonCirculatingOHMAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CirculatingSupply extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CirculatingSupplyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    OHM(overrides?: CallOverrides): Promise<[string]>;

    OHMCirculatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonCirculatingOHM(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _ohm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    nonCirculatingOHMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setNonCirculatingOHMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  OHMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  getNonCirculatingOHM(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _ohm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  nonCirculatingOHMAddresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setNonCirculatingOHMAddresses(
    _nonCirculatingAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    OHMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingOHM(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_ohm: string, overrides?: CallOverrides): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    nonCirculatingOHMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setNonCirculatingOHMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    OHMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingOHM(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _ohm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    nonCirculatingOHMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setNonCirculatingOHMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OHMCirculatingSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonCirculatingOHM(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _ohm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonCirculatingOHMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNonCirculatingOHMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
