# IssueTracker-24

- [기획서](https://docs.google.com/presentation/d/1iA-tpumHl_TpR_yUwgYcnb_X8GbW6XvjZOTh2Ucvu0A/preview?pru=AAABdYa_uas*Fuku9RAcUdMBG7REzgBhIg&slide=id.g8582887c3d_0_0)
- [제품 백로그](https://docs.google.com/spreadsheets/d/1wukp65G0J8GofRCyOa-qqhg4Cei2ReM6sOE9rPNDIJc/edit#gid=503039929)
- [Wiki](https://github.com/boostcamp-2020/IssueTracker-24/wiki)  

## :watch: 프로젝트 기간
- 2020.10.26 ~ 2020.11.13

## :exclamation: 배포 Link 
- [IssueTracker-24](http://49.50.162.165/)    

## :coffee: API 문서

- [API 문서](https://github.com/boostcamp-2020/IssueTracker-24/wiki/API-Docs)

## :raised_hands: 팀원 소개

| 캠퍼번호 | 이름   | GitHub                                      |
| -------- | ------ | ------------------------------------------- |
| J004     | 강민수 | [mu1616](https://github.com/mu1616)         |
| J073     | 박기호 | [qkrrlgh519](https://github.com/qkrrlgh519) |
| J099     | 송진현 | [thdwlsgus0](https://github.com/thdwlsgus0) |
| J188     | 정지찬 | [jch422](https://github.com/jch422)         |

## :book: 기술 스택

![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript)
![React](https://img.shields.io/badge/react-16.13-1cf?logo=react)
![NodeJS](https://img.shields.io/badge/node.js-v12.18.3-green?logo=node.js)
![MySQL](https://img.shields.io/badge/mysql-v5.7.32-blue?logo=mysql)

- Frontend: React, Sass, Webpack, Babel
- Backend: Express, Mysql, Sequelize ORM
- Auth: Passport-Github, JWT
- Infra: NCloud, Nginx

![image](https://user-images.githubusercontent.com/38288479/97653804-f8704c80-1aa4-11eb-8854-292fd45852b1.png)

## :page_facing_up: ERD

![image](https://user-images.githubusercontent.com/38288479/97277282-a00a3680-187b-11eb-91c3-fcc242d0176d.png)

## 기능구현사항

- GitHub OAuth 로그인
   <img width="577" alt="스크린샷 2020-11-15 오후 7 48 42" src="https://user-images.githubusercontent.com/22065725/99182944-aead8480-277b-11eb-8ac8-88e197b909e5.png">
   
- 이슈 생성 페이지
   <img width="1432" alt="스크린샷 2020-11-15 오후 9 31 27" src="https://user-images.githubusercontent.com/22065725/99184943-f9ce9400-2789-11eb-88d8-dfd6af6c2b51.png">
   - 타이틀 추가하면 submit 활성화하도록 구현하였습니다.
   - comment 부분을 추가하면 2초 뒤에 글자수가 나타나게 되고 2초 뒤에 다시 사라지도록 구현하였습니다.
   - assignee, milestone, label을 등록할 수 있도록 구현하였습니다.

- 이슈 목록 페이지
   <img width="1317" alt="스크린샷 2020-11-15 오후 9 40 56" src="https://user-images.githubusercontent.com/22065725/99185143-45357200-278b-11eb-8732-2d7f4e0b36c1.png">
   - 검색창
   - 필터(open issues, cloesd issues, everything assigned to you, your issues)
   - checkbox
   - mark as(open <-> closed)
   - author, label, milestones, assignee를 선택할 수 있습니다.

- 이슈 상세 페이지
   <img width="1339" alt="스크린샷 2020-11-15 오후 9 40 25" src="https://user-images.githubusercontent.com/22065725/99185151-53838e00-278b-11eb-8164-0b6b8264dc8f.png">
   - 제목 변경이 가능합니다.
   - 댓글을 추가 가능합니다.
   - 이슈의 open <-> closed가 가능합니다.

- 마일스톤 목록페이지
   <img width="1383" alt="스크린샷 2020-11-15 오후 9 48 41" src="https://user-images.githubusercontent.com/22065725/99185320-60ed4800-278c-11eb-91da-11727690ba71.png">
   - 마일스톤 open, closed에 따라서 다른 목록을 보여줍니다.
   - 마일스톤을 추가, 삭제, 수정이 가능합니다.
   - 마일스톤별 open, closed 비율을 초록색으로 보여줍니다.
   
- 마일스톤 추가페이지
   <img width="1370" alt="스크린샷 2020-11-15 오후 9 53 01" src="https://user-images.githubusercontent.com/22065725/99185399-fa1c5e80-278c-11eb-8cf4-023473503fc3.png">
   - 마일스톤 제목, 날짜, 내용을 추가할 수 있습니다.

- 마일스톤 삭제
  <img width="743" alt="스크린샷 2020-11-15 오후 9 55 53" src="https://user-images.githubusercontent.com/22065725/99185479-875fb300-278d-11eb-834e-eb89b32f137a.png">
  - 모달로 삭제하는지 물어보고 삭제 버튼을 누르면 삭제합니다.

- 라벨 페이지
  <img width="1408" alt="스크린샷 2020-11-15 오후 9 58 06" src="https://user-images.githubusercontent.com/22065725/99185508-ae1de980-278d-11eb-9f19-5db24aebe31e.png">
  - 현재까지 생성된 라벨의 목록을 보여줍니다.
  - 라벨 추가, 편집, 삭제의 기능이 있습니다.
  
