import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import { PageLayout, FormInner, FormLayout } from '../styles';
import { loginApi } from '../apis';
import { useState } from 'react';
import useValid from '../hooks/useValid';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { validText, isValid } = useValid(form);

  const login = () => {
    loginApi(form)
      .then(res => localStorage.setItem('access_token', JSON.stringify(res)))
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
              place="비밀번호를 입력하세요"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              valid={!isValid.isPassword}
            />
            <div>
              <span>계정이 없으신가요?</span>
              <Link to={'/signup'}>회원가입</Link>
            </div>
            <Button
              buttonText="로그인"
              clickEvent={login}
              isActive={isValid.isEmail && isValid.isPassword ? false : true}
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
  & > div:nth-child(2) {
    margin-bottom: 1rem;
  }
  & > div:nth-child(4) {
    font-size: 1.5rem;
    position: absolute;
    bottom: 8rem;
  }
  & > div:last-child {
    position: absolute;
    bottom: 3rem;
  }
`;
