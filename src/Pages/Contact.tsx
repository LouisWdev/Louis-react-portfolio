import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
     height: 100vh;
     display: flex;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  margin-top: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

const FormGroup = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const NameInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EmailInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MessageInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

  


const Contact = () => {
  return (
    <Section>
    <FormContainer>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <NameInput
            type="text"
            id="name"
            name="name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <EmailInput
            type="email"
            id="email"
            name="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <MessageInput
            id="message"
            name="message"
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
    </Section>
  )
}

export default Contact