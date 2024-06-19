import { css } from '@emotion/react';
import BSFlex from '../common/BSFlex';
import BSTextField from '../common/BSTextField';
import BSButton from '../common/BSButton';
import Spacing from '../common/Spacing';

import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import BSText from '../common/BSText';
import { Link } from 'react-router-dom';
import { colors } from '@/styles/colorPalette';
import { FormValues } from '@/models/signin';
import validator from 'validator';

function Form({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  // 인풋의 값이 변경될 때마다 새롭게 생기는 것을 방지하기 위해
  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({ ...prevFormValues, [e.target.name]: e.target.value }));
  }, []);

  const errors = useMemo(() => validate(formValues), [formValues]);

  const signOk = Object.keys(errors).length === 0;

  return (
    <BSFlex direction="column" css={formContainerStyles}>
      <BSTextField
        label="이메일"
        name="email"
        placeholder="thfdl0317@naver.com"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <BSTextField
        label="비밀번호"
        type="password"
        name="password"
        onChange={handleFormValues}
        value={formValues.password}
      />
      <Spacing size={32} />

      <BSButton
        size="medium"
        onClick={() => {
          onSubmit(formValues);
        }}
        disabled={signOk === false}
      >
        로그인
      </BSButton>

      <Spacing size={12} />
      <Link to="/signup" css={linkStyles}>
        <BSText typography="CaptionRegular12">아직 계정이 없으신가요?</BSText>
      </Link>
    </BSFlex>
  );
}

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {};

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.';
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요.';
  }

  return errors;
}

const formContainerStyles = css`
  padding: 24px;
`;

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blackSalon500};
  }
`;

export default Form;
