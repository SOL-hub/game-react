import { Flex } from 'components/atom/Layout';
import { TextBold16, TextRegular14 } from 'components/atom/Typo';

export interface RegistrattionInfoProps {
  title: string;
  grayButton?: { buttonText: string; onClick: () => void };
  children?: React.ReactNode;
}

const RegistrationInfo = ({
  title,
  grayButton = { buttonText: '', onClick: () => {} },
  children,
}: RegistrattionInfoProps) => {
  return (
    <Flex column width="100%" margin="0 0 3.5rem">
      <Flex justifyContent="space-between" alignItems="center" margin="0 0 1.5rem">
        <TextBold16>{title}</TextBold16>
        {grayButton.buttonText && (
          <TextRegular14 color="black300" onClick={grayButton.onClick}>
            {grayButton.buttonText}
          </TextRegular14>
        )}
      </Flex>
      {children}
    </Flex>
  );
};

export default RegistrationInfo;
