import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import { PageLayout, FormInner, FormLayout } from '../styles';
import { signUpApi } from '../apis';
import { useState } from 'react';
import useValid from '../hooks/useValid';

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
  });
  const { validText, isValid } = useValid(form);

  const signUp = () => {
    signUpApi({ email: form.email, password: form.password })
      .then(res => localStorage.setItem('access_token', res))
      .then(() => navigate('/todo'));
  };

  return (
    <PageLayout>
      <FormLayout>
        <FormInner>
          <Container>
            <div>{validText}</div>
            <Input
              place="이메일을 입력하세요"
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              valid={!isValid.isEmail}
            />
            <Input
              place="이메일을 확인하세요"
              type="email"
              value={form.emailConfirm}
              onChange={e => setForm({ ...form, emailConfirm: e.target.value })}
              valid={!isValid.isEmailConfirm}
            />
            <Input
              place="비밀번호를 입력하세요"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              valid={!isValid.isPassword}
            />
            <Input
              place="비밀번호를 확인하세요"
              type="password"
              value={form.passwordConfirm}
              onChange={e =>
                setForm({ ...form, passwordConfirm: e.target.value })
              }
              valid={!isValid.isPasswordConfirm}
            />
            <Button
              buttonText="회원가입 완료"
              clickEvent={signUp}
              isActive={
                isValid.isEmail &&
                isValid.isPassword &&
                isValid.isEmailConfirm &&
                isValid.isPasswordConfirm
                  ? false
                  : true
              }
            />
          </Container>
        </FormInner>
      </FormLayout>
    </PageLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  & > div:first-child {
    position: absolute;
    top: 3rem;
    font-size: 1.5rem;
  }
  & > div:nth-child(2),
  & > div:nth-child(3),
  & > div:nth-child(4) {
    margin-bottom: 1rem;
  }
  & > div:last-child {
    position: absolute;
    bottom: 3rem;
  }
`;
