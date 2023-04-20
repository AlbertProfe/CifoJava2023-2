import { Card, Image } from "semantic-ui-react";

const PersonCard = ({ person }) => {

return (
    <>
        <Card  style={{ margin: "10px"}}>

            <Image src={person.image} wrapped ui={false} />

            <Card.Content>
            <Card.Header>
                {person.name}, {person.surname}
            </Card.Header>
            <Card.Meta>{person.age} years old</Card.Meta>
            <Card.Description>Works as a {person.job}</Card.Description>
            </Card.Content>

        </Card>
    </>
    )
};

export default PersonCard;
