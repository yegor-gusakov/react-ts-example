export interface Room {
  code: number;
  appointment: {
    code: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: string;
    start_date: string;
    start_time: string;
    doctor_title: string;
    assistant: string;
    is_doctor?: boolean;
    vital_signs: {
      height_ft: string;
      height_in: string;
      weight: string;
      bmi: string;
    };
  };
  status: {
    code: string;
    title: string;
  };
  update_time: number;
}

export interface ConsentForm {
  id: number;
  code: string;
  title: string;
  short_title: string;
}

export interface ConsentFormDetails {
  content: string;
  need_initials?: boolean;
}

export type FetchData = Room[] | ConsentForm[] | ConsentFormDetails[];
