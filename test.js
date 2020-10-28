"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        title: "Frontend",
        description: "Something in Frontend : 프론트엔드",
        color: "#AAED8B",
      },
      {
        title: "Backend",
        description: "Something in Backend : 백엔드",
        color: "#0052CC",
      },
      {
        title: "Environment",
        description: "환경설정",
        color: "#F9D0C4",
      },
      {
        title: "Bugfix: build",
        description: "빌드 관련 버그 수정",
        color: "#D73A4A",
      },
      {
        title: "🥇Must",
        description: "우선순위: 상",
        color: "#E57559",
      },
      {
        title: "🥈Should",
        description: "우선순위: 중",
        color: "#E57559",
      },
      {
        title: "🥉Could",
        description: "우선순위: 하",
        color: "#E57559",
      },
    ];

    return queryInterface.bulkInsert("labels", data, {});
  },

  down: (queryInterface, Sequelize) => {},
};
