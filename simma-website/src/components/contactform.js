import React from "react";

import "./contactform.css"
import {
    unstable_useFormState as useFormState,
    unstable_Form as Form,
    unstable_FormLabel as FormLabel,
    unstable_FormInput as FormInput,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
  } from "reakit/Form";

import { Grid, Row } from 'react-flexbox-grid';


const ContactForm = () => {
    const form = useFormState({
      values: { message: "", name: "",email: "" },
      onValidate: (values) => {
        if (!values.message) {
          var errors = {
            message: "Please enter a message.",
          };
          throw errors;
        }

        if (!values.name) {
          errors = {
            name: "How can we be friends without knowing your name?",
          };
          throw errors;
        }
        
        if (!values.email) {
          errors = {
            email: "I need a valid email",
          };
          throw errors;
        }
      },

      onSubmit: (values) => {
        if (!values.message) {
          var errors = {
            message: "Please enter a message.",
          };
          throw errors;
        }

        if (!values.name) {
          errors = {
            name: "How can we be friends without knowing your name?",
          };
          throw errors;
        }
        
        if (!values.email) {
          errors = {
            name: "I need a valid email",
          };
          throw errors;
        }
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <Grid>
      <Form {...form} className="contact__form presentation__center">
        
        <Row xs={12} md={12} lg={12}>
          <FormLabel name="name">
            Name
          </FormLabel >
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormInput {...form} name="name" placeholder="Type your name"  aria-required="true"/>
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormMessage className="input__message" {...form} name="name" />
        </Row>
        
        <Row xs={12} md={12} lg={12}>
          <FormLabel name="email">
            Email
          </FormLabel >
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormInput {...form} name="email" placeholder="Type your email" type="email" aria-required="true"/>

        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormMessage className="input__message"{...form} name="email" />
        </Row>
        

        <Row xs={12} md={12} lg={12}>
          <FormLabel {...form} name="message">
            Message
          </FormLabel>
        </Row>
        
        <Row xs={12} md={12} lg={12}>
          <FormInput
            {...form}
            name="message"
            placeholder="Type here what would you like to contact me about"
            as="textarea"
            aria-required="true" 
            data-invmsg="Message is invalid"
          />
        </Row>
        

        <Row xs={12} md={12} lg={12} >
          <FormMessage className="input__message"{...form} name="message" />
        </Row>

        <Row xs={12} md={12} lg={12} className="presentation__center">
          <FormSubmitButton {...form} id="contactbutton" className="button__primary">Submit</FormSubmitButton>
        </Row>
      </Form>
      </Grid>
    );
  }


export default ContactForm
