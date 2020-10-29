import React from 'react';
import './loginForm.scss';


const LoginFormContainer = ({children}) =>{
    return(
     <> 
       <form className="input-container">
         <div>
            <div>아이디</div>
            <input type="text" className="input-value" value="아이디를 입력하세요"/>
            <div>패스워드</div>
            <input type="password" className="input-value" value=""/>
         </div>
       </form>
     </>
    );
}

export default LoginFormContainer;
