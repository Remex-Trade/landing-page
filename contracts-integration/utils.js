//user ethers6

"use client";
import vaultABI from "./abi/Vault.json";
import { ethers, providers } from "ethers";
import { addressVault } from "./config";

export async function getVaultContract(providerOrSigner) {
    const provider = new providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
        addressVault,
        vaultABI.abi,
        provider
    );
    
    if (providerOrSigner == true) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            addressVault,
            vaultABI.abi,
            signer
        );
        return contract;
    }
    return contract;
}

export async function getCustomProviderVaultContract() {
    let providerURL = "http://provider.con";
    let customHttpProvider = new ethers.providers.JsonRpcProvider(providerURL);
    const contract = new ethers.Contract(
        addressVault,
        vaultABI.abi,
        customHttpProvider
    );
    return contract;
}

// getter functions

export async function fetchChartStats(_tokenAddress) {
    const funding = await  fetchFunding()
    const borrowingRate = await  fetchBorrowingRate(_tokenAddress)
    // const fetchOpenInterestL = await  fetchOpenInterestL
    const openInterestS = await  fetchOpenInterestS(_tokenAddress)
    const volume24h = await  fetch24HVolume(_tokenAddress)

    return {
        funding: funding.toNumber(),
        borrowingRate: borrowingRate.toNumber(),
        openInterestS: openInterestS.toNumber(),
        volume24h: volume24h.toNumber()
    }
}


export async function fetchOpenInterestL() {
    const contract = await getVaultContract();
    // const data = await contract.fundingRateFactor();
    return data;
}

export async function fetchOpenInterestS(_tokenAddress) {
    const contract = await getVaultContract();
    const data = await contract.maxGlobalShortSizes(_tokenAddress);
    return data;
}

export async function fetchFunding() {
    const contract = await getVaultContract();
    const data = await contract.fundingRateFactor();
    return data;
}

export async function fetchBorrowingRate(_tokenAddress) {
    const contract = await getVaultContract();
    const data = await contract.feeReserves(_tokenAddress);
    return data;
}

export async function fetch24HVolume(_tokenAddress) {
    const contract = await getVaultContract();
    const data = await contract.usdgAmounts(_tokenAddress);
    return data;
}

export async function fetchMargin() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchMaxOpenPosition() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchEstExecPrice() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchSpread() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchPositionSize() {
    const contract = await getVaultContract();
    // const data = await contract.getPositionFee();
    return data;
}

export async function fetchOrderFee() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchExecFee() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

export async function fetchLiqPrice() {
    const contract = await getVaultContract();
    // const data = await contract.feeReserves();
    return data;
}

// setter functions

export async function createOrder() {
    const contract = await getVaultContract(true);
    const tx = await contract.createOrder();
    await tx.wait();
}
