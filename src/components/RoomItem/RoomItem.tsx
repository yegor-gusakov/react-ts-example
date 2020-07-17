import React, { FC, useState } from 'react';
//Components
import { WaitingTime } from './WaitingTime';
import { RoomItemDetails } from './RoomItemDetails';
//Types
import { Room } from '../../hooks/useFetch/types';
//Other
import { formatTime } from '../../utils/utils';

export const RoomItem: FC<Room> = ({ code: roomNumber, appointment, status, update_time }): JSX.Element => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const {
    code,
    first_name,
    last_name,
    birthday,
    gender,
    start_date,
    start_time,
    vital_signs,
    doctor_title,
    assistant,
    is_doctor = false,
  } = appointment;
  const { title } = status;
  const startTime = formatTime(start_time);

  return (
    <li className="list-group-item" style={{ width: '50%'  }}>
      <div className="card border-primary mb-3">
        <div className="card-header">
          Room {roomNumber}({code})
        </div>
        <div className="card-body">
          <h4 className="card-title">
            Status Room:
            <br />
            {title}
          </h4>
          <p className="card-text">
            Patient: {first_name} {last_name}
          </p>
          <p className="card-text">Appointment time: {startTime}</p>
          <WaitingTime startTime={start_time} updateTime={update_time} />
          <p className="card-text">Doctor: {doctor_title}</p>
          <p className="card-text">Assistant: {assistant}</p>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => setIsShowDetails((prevState) => !prevState)} type="button">
            {isShowDetails ? `Hide` : `Show`} Details
          </button>
        </div>
        {isShowDetails && (
          <RoomItemDetails
            roomNumber={roomNumber}
            startDate={start_date}
            vitalSings={vital_signs}
            firstName={first_name}
            lastName={last_name}
            isDoctor={is_doctor}
            gender={gender}
            birthday={birthday}
          />
        )}
      </div>
    </li>
  );
};
