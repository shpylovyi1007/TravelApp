import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./Form.module.scss";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date()
    .min(new Date(), "Booking date must be in the future")
    .required("Booking date is required"),
  comment: Yup.string(),
});

const notify = () =>
  toast("Congratulations, your campervan reservation is successful");

const UserForm: React.FC = () => {
  const handleSubmit = () => {
    notify();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <h2 className={css.title}>Book your campervan now</h2>

        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>

        <Field
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
        />
        <Field
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
        />
        <Field
          className={css.input}
          type="date"
          name="bookingDate"
          placeholder="Booking date*"
        />
        <Field
          as="textarea"
          className={css.input && css.textArea}
          name="comment"
          placeholder="Comment"
        />
        <button className={css.button} type="submit">
          Send
        </button>
        <Toaster
          toastOptions={{
            style: {
              border: "1px solid green",
              background: "rgb(5, 214, 5)",
              padding: "16px",
              color: "#fff",
              fontSize: "20px",
            },
          }}
        />
      </Form>
    </Formik>
  );
};

export default UserForm;
