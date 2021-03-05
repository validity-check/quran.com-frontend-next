import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectQuranReaderStyles, QuranReaderStyles } from 'src/redux/slices/QuranReader/styles';
import WordType from 'types/WordType';
import VerseText from 'src/components/Verse/VerseText';

type LineProps = {
  words: Array<WordType>;
};

const Line = ({ words }: LineProps) => {
  const quranReaderStyles = useSelector(selectQuranReaderStyles);
  return (
    <StyledLineContainer styles={quranReaderStyles}>
      <StyledLine styles={quranReaderStyles}>
        <VerseText words={words} />
      </StyledLine>
    </StyledLineContainer>
  );
};

const StyledLine = styled.div<{ styles: QuranReaderStyles }>`
  /* TODO (@abdellatif): make the vw dimension adaptive */
  line-height: min(8vw, ${(props) => props.styles.quranTextLineHeight}rem);
  line-break: anywhere;
  text-align: center;
`;

const StyledLineContainer = styled.div<{ styles: QuranReaderStyles }>`
  display: block;
  direction: rtl;
  /* TODO (@abdellatif): make the vw dimension adaptive */
  font-size: min(5vw, ${(props) => props.styles.quranTextFontSize}rem);
  letter-spacing: ${(props) => props.styles.quranTextLetterSpacing}rem;
`;

export default React.memo(Line);
