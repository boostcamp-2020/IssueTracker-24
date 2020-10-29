import React from 'react';
import './loginForm.scss';


const LoginFormContainer = ({children}) =>{
    return(
     <> 
       <form className="input-container">
         <div>
            <div className="input-title">아이디</div>
            <input type="text" className="input-value" value="아이디를 입력하세요"/>
            <div className="input-title">패스워드</div>
            <input type="password" className="input-value" value="비밀번호를 입력하세요"/>
            <div className="input-common-button">
              <button>로그인</button>
              <button>회원가입</button>
            </div>
         </div>
       </form>
     </>
    );
}

export default LoginFormContainer;
