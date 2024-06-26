import { FocusEventHandler, forwardRef, InputHTMLAttributes, useState } from 'react';

import Text from './BSText';
import Input from './BSInput';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
}

const BSTextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, hasError, helpMessage, onFocus, onBlur, ...props },
  ref,
) {
  const [focused, setFocused] = useState(false);

  const labelColor = hasError ? 'error50' : focused ? 'blackSalon100' : undefined;

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <div>
      {label ? (
        <Text
          typography="CaptionBold12"
          color={labelColor}
          display="inline-block"
          style={{ marginBottom: 6 }}
        >
          {label}
        </Text>
      ) : null}

      <Input
        ref={ref}
        aria-invalid={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {helpMessage ? (
        <Text
          typography="CaptionBold12"
          color={labelColor}
          display="inline-block"
          style={{ marginTop: 6, fontSize: 12 }}
        >
          {helpMessage}
        </Text>
      ) : null}
    </div>
  );
});

export default BSTextField;
