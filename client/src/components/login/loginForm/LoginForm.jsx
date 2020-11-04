import React, { useState, useLayoutEffect } from 'react';
import './login-form.scss';
import { useHistory } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../../../utils/cookie';
import svg from '../../../utils/svg';
const LoginFormContainer = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  console.log(process.env.NODE_ENV);
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useLayoutEffect(() => {
    const token = getCookie('jwt');
    console.log(token);
    if (token) {
      localStorage.jwt = token;
      deleteCookie('jwt');
      history.push('/issues');
    }
  }, []);

  return (
    <>
      <form className="input-container">
        <div>
          <div className="input-title">아이디</div>
          <input
            type="text"
            className="input-value"
            value={id}
            onChange={onChangeId}
          />
          <div className="input-title">패스워드</div>
          <input
            type="text"
            className="input-value"
            value={password}
            onChange={onChangePassword}
          />
          <div className="input-common-button button">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </div>
      </form>
      <div className="input-github-button button">
        <a
          href={
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:3000/auth/github/login'
              : `${process.env.PROD_URL}auth/github/login`
          }
        >
          <button>
            Sign in with GitHub
            {svg['GithubLogo']}
          </button>
        </a>
      </div>
    </>
  );
};

export default LoginFormContainer;
