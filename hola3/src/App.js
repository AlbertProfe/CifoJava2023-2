import MarsCard from "./MarsCard"
import PersonCard from "./PersonCard.jsx"
import { Grid} from "semantic-ui-react";


function App() {
  return (
    <>
      <div style={{ padding: "40px", backgroundColor: "#F0F0F0" }}>
        <MarsCard />
      </div>

      <Grid style={{ padding: "40px", backgroundColor: "	#E8E8E8" }}>
        <PersonCard
          person={{
            image: "https://i.imgur.com/MK3eW3As.jpg",
            name: "Katherine",
            surname: "Johnson",
            age: 101,
            job: "mathematician",
          }}
        />

        <PersonCard
          person={{
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
            name: "Nicola",
            surname: "Telsa",
            age: 36,
            job: "mathematician",
          }}
        />

        <PersonCard
          person={{
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
            name: "Stephen",
            surname: "Hawking",
            age: 85,
            job: "software engineer",
          }}
        />
      </Grid>
    </>
  );
}

export default App;
