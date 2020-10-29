import React from 'react';
import './loginForm.scss';


const LoginFormContainer = ({children}) =>{
    return(
     <> 
       <form className="input-container">
         <div>
            <div className="input-title">아이디</div>
            <input type="text" className="input-value"/>
            <div className="input-title">패스워드</div>
            <input type="text" className="input-value"/>
            <div className="input-common-button button">
              <button>로그인</button>
              <button>회원가입</button>
            </div>
            <div className="input-github-button button">
              <button>Sign in with GitHub</button>
            </div>
         </div>
       </form>
     </>
    );
}

export default LoginFormContainer;
