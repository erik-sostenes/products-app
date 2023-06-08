import { Formik } from 'formik';
import styles from "./Login.module.scss";

interface errors {
    email: string;
    password: string;
}

export function Login() {
    return (
        <section className={styles.main}>
            <div className={styles.main__container_form}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors: errors = {email:"", password:""};
                        if (!values.email) {
                            errors.email = 'Se requiere un email';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.';
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
                    <form className={styles.main__form} onSubmit={handleSubmit}>
                        <div>
                            <label className={styles.main__label}>Email:</label>
                            <div>
                                <input
                                    className={styles.main__input}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <p className={styles.main__message_error}>{errors.email && touched.email && errors.email}</p>
                        </div>
                        <div>
                            <label className={styles.main__label}>Password:</label>
                            <div>
                                <input
                                    className={styles.main__input}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            <p>{errors.password && touched.password && errors.password}</p>
                        </div>

                        <div className={styles.main__container_button}>
                            <button className={styles.main__button} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
                </Formik>
            </div>
        </section>
    )
}