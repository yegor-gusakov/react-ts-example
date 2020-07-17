import React, { FC, useState, useEffect } from 'react';
import { formatWaitingTime } from '../../utils/utils';

interface Props {
  startTime: string;
  updateTime: number;
}

export const WaitingTime: FC<Props> = ({ startTime, updateTime }): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(updateTime);
  const waitingTime = formatWaitingTime(startTime, currentTime);

  useEffect(() => {
    if (waitingTime === `00:00:00`) return;

    const delay = setTimeout(() => setCurrentTime((prevState) => prevState - 1000), 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [currentTime]);

  return <p className="card-text" style={{color: waitingTime === `00:00:00` ? `green` : `tomato`}}>Waiting time: {waitingTime}</p>;
};
