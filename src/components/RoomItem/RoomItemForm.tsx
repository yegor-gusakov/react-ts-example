import React, { FC } from 'react';
//Components
import { Spinner } from '../Spinner/Spinner';
import { RoomItemTabs } from './RoomItemTabs';
//Hooks
import { useApiService, ApiMethods } from '../../hooks';
import { useFormState } from './hooks/useFormState';
//Types
import { ConsentForm } from '../../hooks/useFetch/types';

interface Props {
  firstName: string;
  lastName: string;
}

export const RoomItemForm: FC<Props> = ({ firstName, lastName }): JSX.Element => {
  const { fetchState } = useApiService(ApiMethods.getConsentForm);
  const { isLoading, data, error } = fetchState;
  const {
    isSelectedAll,
    isShowSign,
    isShowTabs,
    tabTitles,
    containerInputRef,
    onInputChange,
    onSelectedAllButtonClick,
    onSignButtonClick,
  } = useFormState(data.length);

  const formItems = data as ConsentForm[];
  const loadingJSX = isLoading && <Spinner />;
  const errorJSX = error && <h3>{error}</h3>;
  const contentJSX =
    data.length > 0 &&
    formItems.map(({ id, title, short_title }: ConsentForm) => {
      const inputId = Math.random().toString();
      return (
        <div className="custom-control custom-checkbox" key={id}>
          <input
            type="checkbox"
            className="custom-control-input"
            id={inputId}
            name={short_title}
            onChange={(evt) => onInputChange(evt, short_title)}
          />
          <label className="custom-control-label" htmlFor={inputId}>
            {title}
          </label>
        </div>
      );
    });

  return (
    <>
      <form style={{ margin: '10px 0' }}>
        <fieldset>
          <legend>Consent form</legend>
          <div ref={containerInputRef} className="form-group">
            {loadingJSX}
            {errorJSX}
            {contentJSX}
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={onSelectedAllButtonClick} type="button" className="btn btn-info btn-sm">
              {isSelectedAll ? `Deselected` : `Selected`} All
            </button>
            {isShowSign && (
              <button onClick={onSignButtonClick} type="submit" className="btn btn-primary btn-sm">
                Sign
              </button>
            )}
          </div>
        </fieldset>
      </form>
      {isShowTabs && <RoomItemTabs firstName={firstName} lastName={lastName} tabTitles={tabTitles} />}
    </>
  );
};
