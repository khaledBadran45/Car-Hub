"use client";
import Image from "next/image";
import { SearchManufacturerProps } from "@/types";
import { Combobox, ComboboxButton, ComboboxInput } from "@headlessui/react";
import React, { useState } from "react";
import { manufacturers } from "@/constans";
const SearchManufacturer = ({
  Manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuey] = useState("");
  const filteredManufacturer = query === "" ?
  manufacturers : manufacturers.filter((item:string) =>item.toLowerCase().replace(/\s+/g, "")
  .includes(query.toLowerCase().replace(/\s+/g, "")));
  return (
    <div className="search-manufacturer">
      <Combobox>
      <div className="combobox__item relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkgswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuey(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
