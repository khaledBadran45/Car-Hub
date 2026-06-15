"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
const Searchbar = () => {
    const [Manufacturer, setManufacturer] = useState('');
    const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer Manufacturer={Manufacturer} setManufacturer={setManufacturer}/>
      </div>
    </form>
  );
};

export default Searchbar;
