import React from 'react'
import { Segment } from 'semantic-ui-react'

const RightSidebar = () => (
  <Segment.Group>
    <Segment>Right Sidebar</Segment>
    <Segment.Group>
      <Segment>Nested Top</Segment>
      <Segment>Nested Middle</Segment>
      <Segment>Nested Bottom</Segment>
    </Segment.Group>
  </Segment.Group>
)

export default RightSidebar