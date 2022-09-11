import React from "react";
class Informations extends React.Component {
  constructor(data) {
    super();
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.score = data.score;
    this.keyData = data.keyData;
  }
}

export default Informations;
