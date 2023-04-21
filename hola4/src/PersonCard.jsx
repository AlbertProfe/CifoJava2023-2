import { Card, Image } from "semantic-ui-react";

const PersonCard = ({image, name, surname, age, job}) => {
  return (
    <>
      <Card style={{ margin: "10px" }}>
        <Image src={image} wrapped ui={false} />

        <Card.Content>
          <Card.Header>
            {name}, {surname}
          </Card.Header>
          <Card.Meta>{age} years old</Card.Meta>
          <Card.Description>Works as a {job}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default PersonCard;
