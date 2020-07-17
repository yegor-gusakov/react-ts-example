import React from 'react';
//Components
import { RoomItem } from '../RoomItem/RoomItem';
import { Spinner } from '../Spinner/Spinner';
//Hooks
import { useApiService, ApiMethods } from '../../hooks';
//Types
import { Room } from '../../hooks/useFetch/types';

export const RoomList = () => {
  const { fetchState } = useApiService(ApiMethods.getRooms);
  const { isLoading, data, error } = fetchState;
  const rooms = data as Room[];

  const loadingJSX = isLoading && <Spinner />;
  const errorJSX = error && <h3>{error}</h3>;
  const contentJSX = data.length > 0 && rooms.map((item: Room) => <RoomItem key={item.code} {...item} />);


  return (
    <ul className="list-group list-group-horizontal flex-wrap">
      {loadingJSX}
      {errorJSX}
      {contentJSX}
    </ul>
  );
};
