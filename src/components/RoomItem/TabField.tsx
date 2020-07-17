import React, { FC } from 'react';

interface Props {
  needInitials: boolean | undefined;
  checkedItems: number[];
  initials: string;
  indexField: number;
  onInputChange: (value: number) => void;
  content: string;
}

export const TabField: FC<Props> = ({ needInitials, checkedItems, initials, indexField, onInputChange, content }): JSX.Element => {
  let col = <span></span>;

  if (needInitials) {
    col = <input type="checkbox" onChange={() => onInputChange(indexField)} />;
  }

  if (needInitials && checkedItems.includes(indexField)) {
    col = <span>{initials}</span>;
  }

  return (
    <div>
      <p>
        <span style={{fontWeight: 'bold', fontSize: '16px'}}>{col}</span> &nbsp;
        {content}
      </p>
    </div>
  );
};
