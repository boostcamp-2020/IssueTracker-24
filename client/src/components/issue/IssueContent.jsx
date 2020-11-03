import React from 'react';
import styled from 'styled-components';

const IssueContentWrapper = styled.div`
  .issue-title{
      font-weight:bold;
      font-size:15px;
  }
  .issue-content{
      margin-left:20px;
  }
`;

const IssueContent = ({ issue }) =>{
    return(
        <IssueContentWrapper>
        <div>
          <div className="issue-title issue-content"><a></a>{issue.title}</div>
          <div className="issue-content">
              <span>#{issue.id} opened yesterday by songjinhyun</span>
          </div>
        </div>
        </IssueContentWrapper>
    );
}
export default IssueContent;