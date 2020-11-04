import React, { useContext } from 'react';
import styled from 'styled-components';
import Label from '../label/Label';

const IssueContentWrapper = styled.div`
  .issue-title {
    font-weight: bold;
    font-size: 15px;
  }
  .issue-content {
    margin-left: 20px;
  }
`;

const IssueContent = ({ issue }) => {
  return (
    <IssueContentWrapper>
      <div>
        <div className="issue-title issue-content">
          <a>{issue.title}</a>
          {issue.labels.map((label) => (
            <Label key={label.id} label={label} />
          ))}
        </div>
        <div className="issue-content">
          <span>#{issue.id} opened yesterday by songjinhyun</span>
        </div>
      </div>
    </IssueContentWrapper>
  );
};
export default IssueContent;
