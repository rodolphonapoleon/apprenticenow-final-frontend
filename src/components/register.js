import axios from "axios";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name} className="form-label">
          {label}
        </label>
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error-style text-danger">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <>
        <label className="form-check-label">
          <input
            {...field}
            {...props}
            type="checkbox"
            className="form-check-input"
          />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error-style text-danger">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name} className="form-label">
          {label}
        </label>
        <select {...field} {...props} className="form-select" />
        {meta.touched && meta.error ? (
          <div className="error-style text-danger">{meta.error}</div>
        ) : null}
      </>
    );
  };

function Register(){
    return (
        <>
        <Formik
      initialValues={{
        studentFirstName: "",
        studentLastName: "",
        email: "",
        acceptedTerms: false
      }}
      validationSchema={Yup.object({
        studentFirstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        studentLastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters long")
          .required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
        
      })}
      onSubmit={(values, { setSubmitting }) => {
        
     fetch("http://localhost:8080/api/student", {
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
     method: "POST",
     body: JSON.stringify(values)
     })
          setSubmitting(true); 
      }}
    >
      {(formik) => (
        <>
        <h3 className="m-5">Registration Form</h3>
        <Form className="row g-3 m-5" onSubmit={formik.handleSubmit}>
          <div className="col-md-4">
            <MyTextInput label="First Name" name="studentFirstName" type="text" />
          </div>
          <div className="col-md-4">
            <MyTextInput label="Last Name" name="studentLastName" type="text" />
          </div>
          <div className="col-md-2">
            <MySelect label="Cohort" name="cohort">
              <option value="">Select a cohort</option>
              <option value="Java">Java</option>
              <option value="CSharp">CSharp</option>
              <option value="Infrastructure">Infrastructure</option>
            </MySelect>
          </div>
          <div className="col-md-3">
            <MyTextInput label="Phone Number" name="phoneNumber" type="text" />
          </div>
          <div className="col-md-3">
            <MyTextInput label="Date of Birth" name="dob" type="date" />
          </div>
          <div className="col-md-3">
            <MyTextInput label="Email" name="email" type="email" />
          </div>
          <div className="col-md-3">
            <MyTextInput label="Password" name="password" type="password" />
          </div>
          <div className="col-md-12">
            <MyCheckbox name="acceptedTerms">
              <span className="ms-2">I accept the terms and conditions</span>
            </MyCheckbox>
          </div>
          <div className="col-12">
            <button
              className="btn btn-dark border-primary border-1 rounded-3"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </Form>
        </>
      )}
    </Formik>
    
    </>
    )
}

export default Register;