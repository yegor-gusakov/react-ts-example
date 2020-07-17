import React, { FC, useState, useEffect } from 'react';
//Components
import { Spinner } from '../Spinner/Spinner';
import { TabField } from './TabField';
//Hooks
import { useApiService, ApiMethods } from '../../hooks';
import { useTabsState, ConsentDetailsPaths } from './hooks/useTabsState';
//Types
import { ConsentFormDetails } from '../../hooks/useFetch/types';


interface Props {
  tabTitles: Set<string>;
  firstName: string;
  lastName: string;
}

export const RoomItemTabs: FC<Props> = ({ firstName, lastName, tabTitles }): JSX.Element => {
  const {fetchState, arrTabTitles, activeItem, checkedItems, onTabClick, onInputChange } = useTabsState(tabTitles);
  const initials = `${firstName[0]}${lastName[0]}`;

  const { isLoading, data, error } = fetchState;
  const tablistItems = data as ConsentFormDetails[];
  const loadingJSX = isLoading && <Spinner />;
  const errorJSX = error && <h3>{error}</h3>;
  const contentJSX =
    data.length > 0 &&
    tablistItems.map(({ content, need_initials }, i) => (
      <li className="list-group-item" key={Math.random().toString()}>
        <TabField
          needInitials={need_initials}
          checkedItems={checkedItems}
          initials={initials}
          indexField={i}
          onInputChange={onInputChange}
          content={content}
        />
      </li>
    ));

  return (
    <>
      <ul className="nav nav-tabs">
        {arrTabTitles.map((title) => (
          <li className="nav-item" key={title}>
            <a
              onClick={onTabClick}
              className={`nav-link ${activeItem === ConsentDetailsPaths[title] ? `active` : ``}`}
              data-toggle="tab"
              id={ConsentDetailsPaths[title]}
              href="">
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade active show" id={activeItem}>
          {loadingJSX}
          {errorJSX}
          <ul className="list-group">{contentJSX}</ul>
        </div>
      </div>
    </>
  );
};
