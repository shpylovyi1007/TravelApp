import React, { useEffect } from "react";
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

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const equipmentId = useId();
  const vehicleTypeId = useId();

  const initialValues = {
    location: currentFilters?.location || "",
    equipment: {
      AC: currentFilters?.equipment.includes("AC"),
      automatic: currentFilters?.equipment.includes("automatic"),
      kitchen: currentFilters?.equipment.includes("kitchen"),
      TV: currentFilters?.equipment.includes("TV"),
      bathroom: currentFilters?.equipment.includes("bathroom"),
    },
    form: currentFilters?.form || "",
  };

  useEffect(() => {
    dispatch(getCampers({ page: 1, filters: currentFilters }));
  }, [dispatch, currentFilters]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const selectedEquipment = Object.keys(values.equipment).filter(
          (key) => values.equipment[key]
        );
        const filtersToSubmit = {
          location: values.location,
          equipment: selectedEquipment,
          form: values.form,
        };
        dispatch(setFilters(filtersToSubmit));
        dispatch(getCampers({ page: 1, filters: filtersToSubmit }));
      }}
    >
      {({ values, setFieldValue }) => (
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
              <label className={css.item} htmlFor={`${equipmentId}-ac`}>
                <Field
                  type="checkbox"
                  name={`equipment.AC`}
                  id={`${equipmentId}-ac`}
                  checked={values.equipment.AC}
                  onChange={() =>
                    setFieldValue(`equipment.AC`, !values.equipment.AC)
                  }
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#ac" />
                </svg>
                <p>AC</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-automatic`}>
                <Field
                  type="checkbox"
                  name={`equipment.automatic`}
                  id={`${equipmentId}-automatic`}
                  checked={values.equipment.automatic}
                  onChange={() =>
                    setFieldValue(
                      `equipment.automatic`,
                      !values.equipment.automatic
                    )
                  }
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#transmission" />
                </svg>
                <p>Automatic</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-kitchen`}>
                <Field
                  type="checkbox"
                  name={`equipment.kitchen`}
                  id={`${equipmentId}-kitchen`}
                  checked={values.equipment.kitchen}
                  onChange={() =>
                    setFieldValue(
                      `equipment.kitchen`,
                      !values.equipment.kitchen
                    )
                  }
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#kitchen" />
                </svg>
                <p>Kitchen</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-tv`}>
                <Field
                  type="checkbox"
                  name={`equipment.TV`}
                  id={`${equipmentId}-tv`}
                  checked={values.equipment.TV}
                  onChange={() =>
                    setFieldValue(`equipment.TV`, !values.equipment.TV)
                  }
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#tv" />
                </svg>
                <p>TV</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-bathroom`}>
                <Field
                  type="checkbox"
                  name={`equipment.bathroom`}
                  id={`${equipmentId}-bathroom`}
                  checked={values.equipment.BATHROOM}
                  onChange={() =>
                    setFieldValue(
                      `equipment.bathroom`,
                      !values.equipment.BATHROOM
                    )
                  }
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#bathroom" />
                </svg>
                <p>Bathroom</p>
              </label>
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
            <label className={css.item}>
              <Field
                type="radio"
                name="form"
                value="panelTruck"
                checked={values.form === "panelTruck"}
              />
              <svg width="32" height="32">
                <use href="/sprite.svg#van" />
              </svg>
              Van
            </label>

            <label className={css.item}>
              <Field
                type="radio"
                name="form"
                value="fullyIntegrated"
                checked={values.form === "fullyIntegrated"}
              />
              <svg width="32" height="32">
                <use href="/sprite.svg#integrated" />
              </svg>
              Fully Integrated
            </label>

            <label className={css.item}>
              <Field
                type="radio"
                name="form"
                value="alcove"
                checked={values.form === "alcove"}
              />
              <svg width="32" height="32">
                <use href="/sprite.svg#alcove" />
              </svg>
              Alcove
            </label>
          </div>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
