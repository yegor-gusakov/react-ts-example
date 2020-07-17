import React, { FC } from 'react';
import { RoomItemForm } from './RoomItemForm';

interface Props {
  roomNumber: number;
  startDate: string;
  vitalSings: {
    height_ft: string;
    height_in: string;
    weight: string;
    bmi: string;
  };
  firstName: string;
  lastName: string;
  isDoctor: boolean;
  gender: string;
  birthday: string;
}

export const RoomItemDetails: FC<Props> = ({ roomNumber, startDate, vitalSings, gender, isDoctor, firstName, lastName, birthday }) => {
  const { height_ft, weight, bmi } = vitalSings;
  const gen = gender === `Male` ? `Mr.` : `Ms.`;
  const appeal = isDoctor ? `Dr.` : gen;
  const age = new Date().getFullYear() - new Date(birthday).getFullYear();

  return (
    <div className="card-body">
      <h4 className="card-title">
        Details: <br />
        Room {roomNumber}
      </h4>
      <p className="card-text">Appointment date: {startDate}</p>
      <p className="card-text">
        Vital signs: HT: {height_ft}, WT: {weight}lbs., BMI: {bmi}
      </p>
      <p className="card-text">
        {appeal} {firstName} {lastName}, {age} years{isDoctor ? `, ${gender[0]}` : ``}
      </p>
      <RoomItemForm firstName={firstName} lastName={lastName} />
    </div>
  );
};
