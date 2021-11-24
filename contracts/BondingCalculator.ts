/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BondingCalculatorInterface extends utils.Interface {
  functions: {
    "OHM()": FunctionFragment;
    "getKValue(address)": FunctionFragment;
    "getTotalValue(address)": FunctionFragment;
    "markdown(address)": FunctionFragment;
    "valuation(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(functionFragment: "getKValue", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTotalValue",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "markdown", values: [string]): string;
  encodeFunctionData(
    functionFragment: "valuation",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getKValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "valuation", data: BytesLike): Result;

  events: {};
}

export interface BondingCalculator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BondingCalculatorInterface;

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

    getKValue(
      _pair: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { k_: BigNumber }>;

    getTotalValue(
      _pair: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    markdown(_pair: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    valuation(
      _pair: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  getKValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTotalValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

  markdown(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

  valuation(
    _pair: string,
    amount_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    getKValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    markdown(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    valuation(
      _pair: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    getKValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalValue(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    markdown(_pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    valuation(
      _pair: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getKValue(
      _pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalValue(
      _pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markdown(
      _pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    valuation(
      _pair: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
