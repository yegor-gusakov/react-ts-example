import React from 'react';

import * as SC from './StyledApp';
import { RoomList } from '../RoomList/RoomList';

export const App = () => {
  return (
    <SC.Container className="jumbotron">
      <RoomList />
    </SC.Container>
  );
};
