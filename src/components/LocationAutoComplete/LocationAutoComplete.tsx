import React, { useId, useState } from "react";
import Select, { SingleValue } from "react-select";
import css from "../Filter/Filter.module.scss";

interface LocationOption {
  value: string;
  label: string;
}

const locationOptions: LocationOption[] = [
  { value: "Kyiv, Ukraine", label: "Kyiv, Ukraine" },
  { value: "Dnipro, Ukraine", label: "Dnipro, Ukraine" },
  { value: "Odesa, Ukraine", label: "Odesa, Ukraine" },
  { value: "Poltava, Ukraine", label: "Poltava, Ukraine" },
  { value: "Kharkiv, Ukraine", label: "Kharkiv, Ukraine" },
  { value: "Sumy, Ukraine", label: "Sumy, Ukraine" },
  { value: "Lviv, Ukraine", label: "Lviv, Ukraine" },
];

const LocationAutocomplete: React.FC = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<SingleValue<LocationOption>>(null);
  const locationId = useId();

  const handleLocationChange = (option: SingleValue<LocationOption>) => {
    setSelectedLocation(option);
  };

  return (
    <div className={css.locationContainer}>
      <label className={css.text} htmlFor={locationId}>
        Location
      </label>
      <Select
        inputId={locationId}
        name="location"
        options={locationOptions}
        onChange={handleLocationChange}
        value={selectedLocation}
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
