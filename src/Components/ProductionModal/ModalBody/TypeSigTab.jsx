import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './TypeSigTab.css';
import { ImPlus, ImMinus} from "react-icons/im"
const ListItem = ({ fontFamily, selected, onSelect, onIncreaseFontSize, onDecreaseFontSize }) => {
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
        Type your Signature in the input box
      </div>
      <div>
        <button className="btn btn-sm me-2" onClick={handleIncreaseFontSize}>
          <ImPlus color="cyan"/>
        </button>
        <button className="btn btn-sm" onClick={handleDecreaseFontSize}>
          <ImMinus />
        </button>
      </div>
    </li>
  );
};

const TypeSigTab = () => {
  const [selectedFontFamily, setSelectedFontFamily] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  const handleSelect = (fontFamily) => {
    setSelectedFontFamily(fontFamily);
  };

  const handleIncreaseFontSize = (fontFamily) => {
    if (selectedFontFamily === fontFamily) {
      setFontSize((prevFontSize) => prevFontSize + 2);
    }
  };

  const handleDecreaseFontSize = (fontFamily) => {
    if (selectedFontFamily === fontFamily && fontSize > 16) {
      setFontSize((prevFontSize) => prevFontSize - 2);
    }
  };

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
          />
        ))}
      </ul>
      <div className="mt-4" style={{ fontFamily: selectedFontFamily, fontSize }}>
        {selectedFontFamily ? "Type your name in the input box" : "No font selected"}
      </div>
    </div>
  );
};

export default TypeSigTab;
