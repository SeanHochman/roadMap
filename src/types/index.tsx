export type TaskType = {
  title: string;
  isStageCompleted: boolean;
  tasks: { description: string; completed: boolean }[];
};

export type QuoteResponseType = {
  id: string;
  language: string;
  permalink: string;
  source: string;
  source_url: string;
  text: string;
};
