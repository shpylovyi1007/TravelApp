import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./Filter.module.scss";
import LocationAutocomplete from "../LocationAutoComplete/LocationAutoComplete";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setFilter } from "../../redux/slice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.filter);
  const equipmentId = useId();
  const vehicleTypeId = useId();

  return (
    <div>
      <Formik
        initialValues={currentFilter}
        onSubmit={(values) => {
          dispatch(setFilter(values));
        }}
      >
        <Form className={css.form}>
          <LocationAutocomplete />

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
                  name="equipment"
                  value="ac"
                  id={`${equipmentId}-ac`}
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#ac" />
                </svg>
                <p>AC</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-automatic`}>
                <Field
                  type="checkbox"
                  name="equipment"
                  value="automatic"
                  id={`${equipmentId}-automatic`}
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#transmission" />
                </svg>
                <p>Automatic</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-kitchen`}>
                <Field
                  type="checkbox"
                  name="equipment"
                  value="kitchen"
                  id={`${equipmentId}-kitchen`}
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#kitchen" />
                </svg>
                <p>Kitchen</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-tv`}>
                <Field
                  type="checkbox"
                  name="equipment"
                  value="tv"
                  id={`${equipmentId}-tv`}
                />
                <svg width="32" height="32">
                  <use href="/sprite.svg#tv" />
                </svg>
                <p>TV</p>
              </label>

              <label className={css.item} htmlFor={`${equipmentId}-bathroom`}>
                <Field
                  type="checkbox"
                  name="equipment"
                  value="bathroom"
                  id={`${equipmentId}-bathroom`}
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
              <Field type="radio" name="vehicleType" value="panelTruck" />
              <svg width="32" height="32">
                <use href="/sprite.svg#van" />
              </svg>
              Van
            </label>

            <label className={css.item}>
              <Field type="radio" name="vehicleType" value="fullyIntegrated" />
              <svg width="32" height="32">
                <use href="/sprite.svg#integrated" />
              </svg>
              Fully Integrated
            </label>

            <label className={css.item}>
              <Field type="radio" name="vehicleType" value="alcove" />
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
      </Formik>
    </div>
  );
};

export default Filter;
