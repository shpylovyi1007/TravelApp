import React, { useRef } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import css from "./Filter.module.scss";
import LocationAutocomplete from "../LocationAutoComplete/LocationAutoComplete";
import {
  resetFilters,
  selectFilters,
  setFilters,
} from "../../redux/filter/slice";
import { getCampers } from "../../redux/camper/operations";
import toast, { Toaster } from "react-hot-toast";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const equipmentId = useId();
  const vehicleTypeId = useId();
  const formikRef = useRef(null);

  const initialValues = {
    location: currentFilters?.location || "",
    equipment: {
      AC: currentFilters?.equipment?.includes("AC") || false,
      bathroom: currentFilters?.equipment?.includes("bathroom") || false,
      kitchen: currentFilters?.equipment?.includes("kitchen") || false,
      TV: currentFilters?.equipment?.includes("TV") || false,
      automatic: currentFilters?.equipment?.includes("automatic") || false,
    },
    form: currentFilters?.form,
  };

  const handleSubmit = async (values) => {
    const selectedEquipment = Object.keys(values.equipment)
      .filter((key) => values.equipment[key])
      .map((key) => key.toLowerCase());

    const filtersToSubmit = {
      location: values.location,
      equipment: selectedEquipment,
      form: values.form,
    };

    dispatch(setFilters(filtersToSubmit));

    try {
      const response = await dispatch(
        getCampers({ page: 1, filters: filtersToSubmit })
      ).unwrap();

      toast.success(`Your search found ${response.total} campers`, {
        position: "bottom-center",
        duration: 3000,
        padding: "10px",
        style: { color: "black", fontSize: "24px", border: "2px solid green" },
      });
    } catch (error) {
      toast.error("Sorry, your search did not find any campers", {
        position: "bottom-center",
        duration: 3000,
        padding: "10px",
        style: { color: "black", fontSize: "24px", border: "2px solid red" },
      });
    }
  };

  const handleResetFilters = (formik) => {
    dispatch(resetFilters());

    formik.setValues({
      location: "",
      equipment: {
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        automatic: false,
      },
      form: "",
    });

    dispatch(getCampers({ page: 1, filters: {} }));

    toast.success("Filters have been reset", {
      position: "bottom-center",
      duration: 3000,
      padding: "10px",
      style: { color: "black", fontSize: "24px", border: "2px solid green" },
    });
  };

  return (
    <>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          const { values, setFieldValue, resetForm } = formikProps;

          const handleResetFilters = () => {
            resetForm();

            dispatch(resetFilters());

            dispatch(getCampers({ page: 1, filters: {} }));

            toast.success("Фільтри скинуто", {
              position: "bottom-center",
              duration: 3000,
              padding: "10px",
              style: {
                color: "black",
                fontSize: "24px",
                border: "2px solid green",
              },
            });
          };

          return (
            <Form className={css.form}>
              <LocationAutocomplete
                value={values.location}
                onChange={(option) =>
                  setFieldValue("location", option ? option.value : "")
                }
              />

              <h2 className={css.title}>Filters</h2>

              <div>
                <h3 className={css.subTitle}>Vehicle equipment</h3>
                <div
                  className={css.listEquipment}
                  role="group"
                  aria-labelledby={equipmentId}
                >
                  {[
                    { key: "AC", icon: "ac", label: "AC" },
                    {
                      key: "automatic",
                      icon: "transmission",
                      label: "Automatic",
                    },
                    { key: "kitchen", icon: "kitchen", label: "Kitchen" },
                    { key: "TV", icon: "tv", label: "TV" },
                    { key: "bathroom", icon: "bathroom", label: "Bathroom" },
                  ].map(({ key, icon, label }) => (
                    <label
                      key={key}
                      className={css.item}
                      htmlFor={`${equipmentId}-${key}`}
                    >
                      <Field
                        type="checkbox"
                        name={`equipment.${key}`}
                        id={`${equipmentId}-${key}`}
                        checked={values.equipment[key]}
                        onChange={() =>
                          setFieldValue(
                            `equipment.${key}`,
                            !values.equipment[key]
                          )
                        }
                      />
                      <svg width="32" height="32">
                        <use href={`/sprite.svg#${icon}`} />
                      </svg>
                      <p>{label}</p>
                    </label>
                  ))}
                </div>
              </div>

              <h3 className={css.subTitle} id={vehicleTypeId}>
                Vehicle type
              </h3>

              <div
                className={css.listType}
                role="group"
                aria-labelledby={vehicleTypeId}
              >
                {[
                  { value: "panelTruck", icon: "van", label: "Van" },
                  {
                    value: "fullyIntegrated",
                    icon: "integrated",
                    label: "Fully Integrated",
                  },
                  { value: "alcove", icon: "alcove", label: "Alcove" },
                ].map(({ value, icon, label }) => (
                  <label key={value} className={css.item}>
                    <Field
                      type="radio"
                      name="form"
                      value={value}
                      checked={values.form === value}
                    />
                    <svg width="32" height="32">
                      <use href={`/sprite.svg#${icon}`} />
                    </svg>
                    {label}
                  </label>
                ))}
              </div>

              <div className={css.buttonContainer}>
                <button className={css.buttonSubmit} type="submit">
                  Search
                </button>
                <button
                  onClick={handleResetFilters}
                  className={css.buttonReset}
                  type="button"
                >
                  Reset Filters
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Filter;
