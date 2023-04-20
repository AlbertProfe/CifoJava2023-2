import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


const MarsCard = () => (
  <Card >
    <Image
      src="https://images-assets.nasa.gov/image/NHQ201905310035/NHQ201905310035~thumb.jpg"
      wrapped
      ui={false}
      style={{ padding: "var(--paddingImageCard)" }}
    />
    <Card.Content>
      <Card.Header>Mars</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description style={{ fontFamily: "var(--fontCard)" }}>
        The Mars celebration Friday, May 31, 2019, in Mars, Pennsylvania. NASA
        is in the small town to celebrate Mars exploration and share the
        agency’s excitement about landing astronauts on the Moon in five years.
        The celebration includes a weekend of Science, Technology, Engineering,
        Arts and Mathematics (STEAM) activities. Photo Credit: (NASA/Bill
        Ingalls)
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default MarsCard;
