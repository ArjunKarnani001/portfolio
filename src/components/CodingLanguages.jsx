import React from "react";
import { codingLanguages } from "../constants";
import "./CodingLanguages.css";

const CodingLanguages = ({ className }) => {
  return (
    <div className={`${className} coding-languages-container`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>
      <ul className="flex">
        {codingLanguages.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-auto h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={84} height={25} alt={`Logo ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingLanguages;
