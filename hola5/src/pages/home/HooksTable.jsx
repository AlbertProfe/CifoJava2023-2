import React from "react";
import { Table } from "semantic-ui-react";

const HooksTable = () => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>tab</Table.HeaderCell>
        <Table.HeaderCell>tools: hooks and css</Table.HeaderCell>
        <Table.HeaderCell>description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>People</Table.Cell>
        <Table.Cell>component, Grid, Map</Table.Cell>
        <Table.Cell>grid with cards, props and children</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Person Profile</Table.Cell>
        <Table.Cell>
          useReducer{" "}
        </Table.Cell>
        <Table.Cell>using useReducer to update a profile</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Clock</Table.Cell>
        <Table.Cell> useEffect, useRef, useReducer</Table.Cell>
        <Table.Cell>combining 3 hook to create a clock</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Api Rest</Table.Cell>
        <Table.Cell>useRef</Table.Cell>
        <Table.Cell>useRef to use api rest</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Log in</Table.Cell>
        <Table.Cell>useContext</Table.Cell>
        <Table.Cell>how to use useContext in one example</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Contact</Table.Cell>
        <Table.Cell>component</Table.Cell>
        <Table.Cell>just a jsx component</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default HooksTable;
