import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './TypeSigTab.css';
import { ImPlus, ImMinus} from "react-icons/im";
import { AppContext } from "../../../context/ContextProvider";

const ListItem = ({ fontFamily, selected, onSelect, onIncreaseFontSize, onDecreaseFontSize, displayText }) => {
  const handleSelect = () => {
    onSelect(fontFamily);
  };

  const handleIncreaseFontSize = () => {
    onIncreaseFontSize(fontFamily);
  };

  const handleDecreaseFontSize = () => {
    onDecreaseFontSize(fontFamily);
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <div className={`form-check me-3 ${selected ? "custom-radio-selected" : ""}`}>
        <input
          type="radio"
          className="form-check-input custom-radio-input"
          checked={selected}
          onChange={handleSelect}
        />
      </div>
      <div className="me-auto" style={{ fontFamily, fontSize: selected ? "30px" : "24px" }}>
      {displayText.length > 0 ? displayText : "Type your signature"}
      </div>
      <div>
        <button className="btn btn-sm me-2" onClick={handleIncreaseFontSize}>
          <ImPlus color="#539ebe"/>
        </button>
        <button className="btn btn-sm" onClick={handleDecreaseFontSize}>
          <ImMinus color="#df7c85"/>
        </button>
      </div>
    </li>
  );
};

const TypeSigTab = () => {
  const {contextState, updateContextState} = useContext(AppContext);
  const [selectedFontFamily, setSelectedFontFamily] = useState(null);
  const [fontSize, setFontSize] = useState(36);

  const handleSelect = (fontFamily) => {
    setSelectedFontFamily(fontFamily);
  };

  const handleIncreaseFontSize = (fontFamily) => {
    if (selectedFontFamily === fontFamily) {
      setFontSize((prevFontSize) => prevFontSize + 2);
    }
  };

  const handleDecreaseFontSize = (fontFamily) => {
    if (selectedFontFamily === fontFamily && fontSize > 36) {
      setFontSize((prevFontSize) => prevFontSize - 2);
    }
  };
  // useEffect(() => {
  //   console.log("This is from the context", contextState);
  // }, [contextState]);
  const fontFamilies = [
    "Kristi",
    "Reenie Beanie",
    "Zeyada",
    "Alex Brush"
  ];

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {fontFamilies.map((fontFamily) => (
          <ListItem
            key={fontFamily}
            fontFamily={fontFamily}
            selected={selectedFontFamily === fontFamily}
            onSelect={handleSelect}
            onIncreaseFontSize={handleIncreaseFontSize}
            onDecreaseFontSize={handleDecreaseFontSize}
            displayText={contextState.inputSignatureText}
          />
        ))}
      </ul>
      <div className="mt-4" style={{ fontFamily: selectedFontFamily, fontSize }}>
        {contextState.inputSignatureText.length > 0 ? contextState.inputSignatureText : "Select the style and type..."}
      </div>
    </div>
  );
};

export default TypeSigTab;
