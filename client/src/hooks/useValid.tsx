import { useEffect, useState } from 'react';

interface IValidType {
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
}

export default function useValid(changeValue: IValidType) {
  const [validText, setValidText] = useState('');
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isEmailConfirm: false,
    isPassword: false,
    isPasswordConfirm: false,
  });

  useEffect(() => {
    const exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!exp.test(changeValue.email)) {
      setValidText('이메일을 확인해주세요');
      setIsValid({ ...isValid, isEmail: false });
    } else {
      setValidText('');
      setIsValid({ ...isValid, isEmail: true });
    }
  }, [changeValue.email, isValid.isEmail]);

  useEffect(() => {
    if (changeValue.email !== changeValue.emailConfirm) {
      setValidText('이메일이 같지 않습니다.');
      setIsValid({ ...isValid, isEmailConfirm: false });
    } else {
      setValidText('');
      setIsValid({ ...isValid, isEmailConfirm: true });
    }
  }, [changeValue.emailConfirm, isValid.isEmailConfirm]);

  useEffect(() => {
    if (changeValue.password.length < 8) {
      setValidText('비밀번호는 8자 이상입니다.');
      setIsValid({ ...isValid, isPassword: false });
    } else {
      setValidText('');
      setIsValid({ ...isValid, isPassword: true });
    }
  }, [changeValue.password, isValid.isPassword]);

  useEffect(() => {
    if (changeValue.password !== changeValue.passwordConfirm) {
      setValidText('비밀번호가 다릅니다');
      setIsValid({ ...isValid, isPasswordConfirm: false });
    } else {
      setValidText('');
      setIsValid({ ...isValid, isPasswordConfirm: true });
    }
  }, [changeValue.passwordConfirm, isValid.isPasswordConfirm]);

  return { validText, isValid };
}
