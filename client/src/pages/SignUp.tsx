import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import { PageLayout, FormInner, FormLayout } from '../styles';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <FormLayout>
        <FormInner>
          <Container>
            <div>hi</div>
            <Input place="이메일을 입력하세요" type="email" />
            <Input place="이메일을 확인하세요" type="email" />
            <Input place="비밀번호를 입력하세요" type="password" />
            <Input place="비밀번호를 확인하세요" type="password" />
            <Button
              buttonText="회원가입 완료"
              clickEvent={() => navigate('/todo')}
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
