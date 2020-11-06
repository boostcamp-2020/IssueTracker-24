import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    페이지를 찾을 수 없습니다<Link to="/">처음으로</Link>
  </div>
);

export default NotFoundPage;
