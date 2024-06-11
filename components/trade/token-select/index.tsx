"use client";
import React, { useContext, useMemo, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import useGetPairs, { Pair } from "@/contracts-integration/hooks/useGetPairs";
import userContext from "@/app/_context/userContext";
import { usePriceStore } from "@/store/priceStore";
import { FormattedPair, TOKEN_TYPE_OPTIONS, formatPairs } from "./helper";
import { useSelectedTokenStore } from "@/store/tokenStore";

const TokenSelect = ({
  setSelectOption,
  setIsRightOrder,
}) => {
  const [Favorites, setFavorites] = useState(false);
  const [FavArr, setFavArr] = useState([]);
  const [search, setSearch] = useState("");
  const { data, setData } = useContext(userContext);
  const setSelectedPair = useSelectedTokenStore(state => state.setSelectedPair)
  const latestPrice = usePriceStore((state) => state.latestPrice);
  const last24HourChange = usePriceStore((state) => state.last24HourChange);
  const { data: pairs } = useGetPairs();

  const searchPair = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  function formatPrice(price) {
    if (!price) {
      return "-";
    }

    const parts = price.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";

    const totalDigits = 6;
    const integerDigits = integerPart.length;
    const decimalDigits = Math.max(0, totalDigits - integerDigits);

    return price.toFixed(decimalDigits);
  }
  const [tokenType, setTokenType] =
    useState<(typeof TOKEN_TYPE_OPTIONS)[number]>("All");
  return (
    <div className="dark:bg-[#0F0C0F] h-full w-full  bg-white dark:text-white text-black">
      <div className="flex flex-col gap-4  py-8 pt-20 text-[13px]">
        {/* <div className="flex w-full gap-4 justify-between items-center px-2">
          <input
            type="search"
            className="w-full relative m-0 block rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-2 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput2"
            onChange={searchPair}
          />

          <FaX
            className="text-lg flex sc1:hidden"
            onClick={() => setSelectOption(false)}
          />
        </div> */}
        <div className="flex gap-2 w-full px-4 flex-wrap text-[0.7rem] mb-3 mt-3 sc1:mt-0">
          {TOKEN_TYPE_OPTIONS.map((option) => (
            <div
              className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 cursor-pointer ${
                tokenType === option
                  ? "text-white bg-zinc-900"
                  : "text-zinc-500"
              }`}
              onClick={() => setTokenType(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="overflow-y-auto">
          <div className={Favorites ? "hidden" : "flex flex-col mb-3"}>
            {pairs.map((pair) => {
              return (
                <TokenCard
                  onClick={() => {
                    setSelectedPair(pair)
                    // setData({ ...data, token: pair.token, pairIndex: pair.id });
                    setSelectOption(false);
                    setIsRightOrder(true);
                  }}
                  isFavorite={FavArr.some((item) => item.id === pair.id)}
                  onAddToFavorites={() => {
                    setFavArr([...FavArr, pair]);
                  }}
                  onRemoveFromFavorites={() => {
                    setFavArr((prevFavArr) =>
                      prevFavArr.filter((e) => e.id !== pair.id)
                    );
                  }}
                  pair={pair}
                  price={formatPrice(latestPrice[pair.token])}
                  change={last24HourChange?.[pair.token] ?? "-"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function TokenCard({
  onClick,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
  pair,
  price,
  change,
}: {
  onClick: () => void;
  isFavorite: boolean;
  onAddToFavorites: () => void;
  onRemoveFromFavorites: () => void;
  pair: Pair;
  price: string;
  change: string;
}) {
  return (
    <div
      className="flex text-[0.75rem] justify-between w-full dark:text-white text-black cursor-pointer hover:bg-[#F4F5F4] dark:hover:bg-[#2c2d2d] px-2 items-center py-4 border border-[#2c2d2d]"
      onClick={onClick}
    >
      <div className="flex w-full gap-2 items-center">
        <div className="flex items-start">
          {isFavorite ? (
            <FaStar
              style={{ color: "#FFA500" }}
              size={20}
              onClick={onRemoveFromFavorites}
            />
          ) : (
            <CiStar
              size={20}
              onClick={onAddToFavorites}
              className="text-slate-500"
            />
          )}
        </div>
        <div className="flex h-full gap-2 items-start ">
          <Image
            src={pair.icon}
            className="rounded-full w-8 h-8"
            width={32}
            height={32}
            alt="sidebar1"
          />
          <div className="w-fit text-white font-bold h-full flex flex-col items-start text-center text-[1rem]">
            <span>{pair.token}</span>
            <span className="text-[0.6rem] text-slate-300">{pair.from} to {pair.to}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-full px-2 text-left">
        <div className="text-[0.9rem]">{price}</div>
        <div
          className={
            change.includes("+")
              ? "text-[#0cf3c4] text-[0.6rem]"
              : "text-red-500  text-[0.6rem]"
          }
        >
          {change}
        </div>
      </div>
    </div>
  );
}

export default TokenSelect;
