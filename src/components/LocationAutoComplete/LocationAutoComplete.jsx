import React from "react";
import Select from "react-select";
import css from "../Filter/Filter.module.scss";

const locationOptions = [
  { value: "Ukraine, Kyiv", label: "Kyiv" },
  { value: "Ukraine, Dnipro", label: "Dnipro" },
  { value: "Ukraine, Odesa", label: "Odesa" },
  { value: "Ukraine, Poltava", label: "Poltava" },
  { value: "Ukraine, Kharkiv", label: "Kharkiv" },
  { value: "Ukraine, Sumy", label: "Sumy" },
  { value: "Ukraine, Lviv", label: "Lviv" },
];

const LocationAutocomplete = ({ value, onChange }) => {
  return (
    <div className={css.locationContainer}>
      <label className={css.text}>Location</label>
      <Select
        name="location"
        options={locationOptions}
        onChange={onChange}
        value={
          value
            ? locationOptions.find((option) => option.value === value)
            : null
        }
        placeholder="Select a city"
        isClearable
        className={css.input}
        classNamePrefix="select"
      />
      <svg className={css.icon} width="20" height="20">
        <use href="/sprite.svg#map" />
      </svg>
    </div>
  );
};

export default LocationAutocomplete;
