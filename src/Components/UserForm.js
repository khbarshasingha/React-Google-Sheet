import React, { useState, useEffect } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";

const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
    hobby: ""
  });
  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandler = event => {
    event.preventDefault();

    console.log(data);

    async function postdata() {
      await axios
        .post(
          "https://sheet.best/api/sheets/b89bcfcf-8f82-42d5-8415-fbc82e3607ab",
          data
        )
        .then(res => {
          console.log(res);
        });
    }
    postdata();
  };

  return (
    <Container fluid style={{ padding: "20px" }}>
      <Header as="h2">REact Google Sheets!</Header>
      <Form width="500px" onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            placeholder="Enter your name"
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={changeHandler}
            placeholder="Enter your Age"
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={data.salary}
            onChange={changeHandler}
            placeholder="Enter your salary"
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            type="text"
            name="hobby"
            value={data.hobby}
            onChange={changeHandler}
            placeholder="Enter your Hobby"
          />
        </Form.Field>
        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UserForm;
//create a new sheet at google sheets
//set the permision to public
//copy the link and visit https://sheet.best/ and create a afree account.
