import PersonCard from "./PersonCard.jsx";
import { Grid } from "semantic-ui-react";

function People() {
  // array with json-person structure
  const people = [
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
    {
      image: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Katherine",
      surname: "Johnson",
      age: 101,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
      name: "Nicola",
      surname: "Telsa",
      age: 36,
      job: "mathematician",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
      name: "Stephen",
      surname: "Hawking",
      age: 85,
      job: "software engineer",
    },
  ];

  // view with return jsx
  return (
    <>
      <h1 style={{ padding: "20px", backgroundColor: "#E8E8E8" }}>
        Grid with spread operator
      </h1>

      {/* Grid semantic component calling PersonCard component from map and spread operator
       https://react.semantic-ui.com/collections/grid/ */}
      <Grid
        columns={4}
        doubling
        stackable
        style={{ padding: "20px", backgroundColor: "#F0F0F0" }}
      >
        {/* iterate the array people with map function
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  */}
        {people.map((person, index) => (
          <Grid.Column key={index}>
            <PersonCard {...person} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}

export default People;
