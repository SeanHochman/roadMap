import { useEffect, useMemo, useState } from 'react';
import { fetchQuote } from '../api';
import { QuoteResponseType } from '../types';

export const useGetQuote = (stages) => {
  const [quote, setQuote] = useState<QuoteResponseType>(undefined);
  const isEverythingComplete = useMemo(
    () => stages?.every((stage) => stage.isStageCompleted),
    [stages]
  );

  useEffect(() => {
    if (isEverythingComplete) {
      fetchQuote()
        .then((data) => setQuote(data))
        .catch((e) => console.error(e));
    }
  }, [isEverythingComplete]);

  return { quote, setQuote };
};
