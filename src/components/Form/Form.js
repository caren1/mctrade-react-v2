import React from 'react';
 import { Formik } from 'formik';
 
 const Form = () => (

    // Imię, nazwisko, telefon, email, temat , wiadomość
   <>
     <Formik
       initialValues={{ name: '', surname: '', phone: '', email: '', subject: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Imię"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           <input
             type="text"
             name="surname"
             placeholder="Nazwisko"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.surname}
           />
           <input
             type="text"
             name="phone"
             placeholder="Telefon"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="email"
             name="email"
             placeholder="E-mail"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <input
             type="text"
             name="subject"
             placeholder="Temat"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.subject}
           />
           <input
            className="message"
             type="text"
             name="message"
             placeholder="Wiadomość"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
           />
           <button 
            type="submit"
            disabled={isSubmitting}
            className="form-button"
            >
             Wyślij
           </button>
         </form>
       )}
     </Formik>
   </>
 );
 
 export default Form;