import logo from "./logo.svg";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Header as="h2">REact Google Sheets!</Header>
      <Form>
        <Form.field>
          <label>Name</label>
          <input placeholder="Enter your name" />
        </Form.field>
        <Form.field>
          <label>Age</label>
          <input placeholder="Enter your Age" />
        </Form.field>
        <Form.field>
          <label>Salary</label>
          <input placeholder="Enter your salary" />
        </Form.field>
        <Form.field>
          <label>Hobby</label>
          <input placeholder="Enter your Hobby" />
        </Form.field>
        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
