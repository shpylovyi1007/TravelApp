import { Field, Form, Formik } from "formik";
import { useId } from "react";

const Filter = () => {
  const locationId = useId();
  const equipmentId = useId();
  const vehicleTypeId = useId();

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor={locationId}>Location</label>
            <Field type="text" name="location" id={locationId} />
          </div>

          <h2>Filters</h2>

          <div>
            <label htmlFor={equipmentId}>Vehicle equipment</label>
            <div role="group" aria-labelledby="checkbox-group">
              <Field type="checkbox" name="checked" value="ac">
                <svg width="32" height="32">
                  <use href="/sprite.svg#ac" />
                </svg>
                <p>AC</p>
              </Field>

              <Field type="checkbox" name="checked" value="automatic">
                <svg width="32" height="32">
                  <use href="/sprite.svg#transmission" />
                </svg>
                <p>Automatic</p>
              </Field>

              <Field type="checkbox" name="checked" value="kitchen">
                <svg width="32" height="32">
                  <use href="/sprite.svg#kitchen" />
                </svg>
                <p>Kitchen</p>
              </Field>

              <Field type="checkbox" name="checked" value="kitchen">
                <svg width="32" height="32">
                  <use href="/sprite.svg#tv" />
                </svg>
                <p>TV</p>
              </Field>

              <Field type="checkbox" name="checked" value="kitchen">
                <svg width="32" height="32">
                  <use href="/sprite.svg#bathroom" />
                </svg>
                <p>Bathroom</p>
              </Field>
            </div>
          </div>

          <div>
            <label htmlFor={vehicleTypeId}>Vehicle type</label>
            <Field>
              <option value="van">
                {/* <svg width="32" height="32">
                  <use href="/sprite.svg#van" />
                </svg> */}
                Van
              </option>
              <option value="integrated">
                {/* <svg width="32" height="32">
                  <use href="/sprite.svg#integrated" />
                </svg> */}
                Fully Integrated
              </option>
              <option value="alcove">
                {/* <svg width="32" height="32">
                  <use href="/sprite.svg#alcove" />
                </svg> */}
                Alcove
              </option>
            </Field>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
