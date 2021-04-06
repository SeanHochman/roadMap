import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { useClickOutside } from '../../hooks';
import { QuoteResponseType } from '../../types';

import { QuoteWrapper } from './styled';

type Props = {
  quote?: QuoteResponseType;
  setQuote: Dispatch<SetStateAction<QuoteResponseType | undefined>>;
};

export const Quote: FC<Props> = ({ quote, setQuote }) => {
  const ref = useRef(null);

  useClickOutside(
    ref,
    () => {
      setQuote(undefined);
    },
    { disabled: !quote }
  );

  return (
    <QuoteWrapper>
      <div ref={ref}>{quote.text}</div>
    </QuoteWrapper>
  );
};
