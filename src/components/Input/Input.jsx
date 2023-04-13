import React from "react";
import "./input.css";
import { FaSearch } from "react-icons/fa";

const Input = ({setWord}) => {

  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here..."
          onChange={(e)=>{setWord(e.target.value)
          ;}}
        />
      <FaSearch id="search-icon" />
      </div>
    </div>
  );
};

export default Input;
