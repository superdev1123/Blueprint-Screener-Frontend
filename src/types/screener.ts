export interface AnswerOption {
  title: string;
  value: number;
}

export interface Question {
  question_id: string;
  title: string;
}

export interface Section {
  type: string;
  title: string;
  answers: AnswerOption[];
  questions: Question[];
}

export interface Screener {
  id: string;
  name: string;
  disorder: string;
  display_name: string;
  content: {
    sections: Section[];
  };
  full_name: string;
}

export interface UserAnswer {
  question_id: string;
  value: number;
}
