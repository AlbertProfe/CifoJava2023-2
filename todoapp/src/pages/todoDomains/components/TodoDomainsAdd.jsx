import React from "react";
import {
  Container,
  Card,
  Checkbox,
  Button,
  Form,
  Divider,
  Icon,
} from "semantic-ui-react";

// CRUD: create
const TodoDomainsAdd = ({ onCreate }) => {
  const [text, setText] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [due, setDue] = React.useState("");

  const handleSubmit = () => {
    onCreate({
      text: text,
      author: author,
      due: due,
      completed: false,
      color: "blue",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Card>
            <Card.Content>
              <Card.Header>Create Todo</Card.Header>
              <Card.Meta>
               
              </Card.Meta>
              <br />
              <Form.Field>
                <label>Text</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter todo text"
                />
              </Form.Field>
              <Form.Field>
                <label>Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                />
              </Form.Field>
              <Form.Field>
                <label>Date</label>
                <input
                  type="date"
                  value={due}
                  onChange={(e) => setDue(e.target.value)}
                  placeholder="Enter date to handle"
                />
              </Form.Field>
              <Divider />
              <Form.Field>
                <Checkbox label="use fetch/axios" />
              </Form.Field>

              <Divider />

              <Button>Add Todo</Button>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="time" />
                UTC Central
              </a>
            </Card.Content>
          </Card>
        </Form.Group>
      </Form>
    </>
  );
};

export default TodoDomainsAdd;
