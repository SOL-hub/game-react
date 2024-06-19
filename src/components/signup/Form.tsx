import { css } from '@emotion/react';
import BSFlex from '../common/BSFlex';
import BSTextField from '../common/BSTextField';
import FixedBottomButton from '../common/FixedBottomButton';
import Spacing from '../common/Spacing';
import { ChangeEvent, useCallback, useState } from 'react';
import { FormValues } from '@/models/signup';
import validator from 'validator';

// function validate(formValues: FormValues) {
//   let errors = (Partial<FormValues> = {});

//   if (validator.isEmail(formValues.email) === false) {
//     errors.email = '이메일 형식을 확인해주세요.';
//   }
// }

function Form() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  });

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.value]: e.target.value,
    }));
  }, []);

  return (
    <BSFlex direction="column" css={formContainerStyles}>
      <BSTextField
        label="이메일"
        name="email"
        placeholder="thfdl0317@naver.com"
        value={formValues.email}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <BSTextField
        label="패스워드"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <BSTextField
        label="패스워드 재확인"
        type="password"
        name="rePassword"
        value={formValues.rePassword}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <BSTextField
        label="이름"
        name="name"
        placeholder="thfdl0317@naver.com"
        value={formValues.name}
        onChange={handleFormValues}
      />
      <FixedBottomButton label="회원가입" onClick={() => {}} />
    </BSFlex>
  );
}

const formContainerStyles = css`
  padding: 24px;
`;

export default Form;
