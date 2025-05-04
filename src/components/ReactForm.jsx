import React from 'react';
import { Formik } from 'formik';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ReactForm = () => (
    <Container>
        <Row>
            <Col md={5}>
                <Card className='m-5 p-4'>
                    <h3>Add user</h3>
                    <hr />
                    <Formik
                        initialValues={{ name: '', email: '', contact: '' }}
                        validate={values => {
                            const errors = {};
                            if(!values.name){
                                errors.name = 'Name is required.'
                            }

                            if (!values.email) {
                                errors.email = 'Email is required.';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }

                            if(!values.contact){
                                errors.contact = "Contact is required."
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting,resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm()
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
                            resetForm
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                 <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className='form-control mt-2'
                                    placeholder='Name'
                                />
                                  {errors.name && touched.name && errors.name}

                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                     className='form-control mt-2'
                                    placeholder='Email'
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="number"
                                    name="contact"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contact}
                                     className='form-control mt-2'
                                    placeholder='Contact'
                                />
                                {errors.contact && touched.contact && errors.contact}
                                <br/>
                                <button className='btn btn-primary mt-3' type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default ReactForm;