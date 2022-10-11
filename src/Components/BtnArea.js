import React from "react";
import { Button } from "./Button";

export const BtnArea = ({handleOnButtonClick}) => {
  const btnArg = [
    { cls: "btn-ac", label: "AC" },
    { cls: "btn-c", label: "C" },
    { cls: "btn-perc", label: "%" },
    { cls: "btn-divide", label: "/" },
    { cls: "btn-7", label: "7" },
    { cls: "btn-8", label: "8" },
    { cls: "btn-9", label: "9" },
    { cls: "btn-x", label: "*" },
    { cls: "btn-4", label: "4" },
    { cls: "btn-5", label: "5" },
    { cls: "btn-6", label: "6" },
    { cls: "btn-minus", label: "-" },
    { cls: "btn-1", label: "1" },
    { cls: "btn-2", label: "2" },
    { cls: "btn-3", label: "3" },
    { cls: "btn-plus", label: "+" },
    { cls: "btn-0 btn-0", label: "0" },
    { cls: "btn-dot", label: "." },
    { cls: "btn-equals", label: "=" },
  ];
  return (
    <>
      {btnArg.map((item, index) => (
        <Button key = {index} {...item} handleOnButtonClick = {handleOnButtonClick} />
      ))}

      
    </>
  );
};
{/* We are trying to use class and label to create a button and map them in an array with item {} and index of item. 
 // return <Button cls={item.cls} label={item.label} />;
        //here we are taking all items using spread/destructuring property. if we use, curly braces, have to type return. This comment is for return 

*/}

