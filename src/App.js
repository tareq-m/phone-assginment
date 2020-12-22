import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";
import "./App.css";

const Reactphone = () => {
  const [phone, setValue] = useState();
  return (
    <div>
      <PhoneInput
      country={'us'}
        placeholder={"please enter a number"}
        value={Reactphone.phone}
        onChange={Reactphone.setValue}
        enableSearch
        autoFoucs={true}
        jumpCursorToEnd={true}
        showDropdown={true}
        disableSearchIcon
        
      />
      <h1>{Reactphone.phone}</h1>
      {Reactphone.phone}
      <h1>{Reactphone.setValue}</h1>
    </div>
  );
};
export default Reactphone;
