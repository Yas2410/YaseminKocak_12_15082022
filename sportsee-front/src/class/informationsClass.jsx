import React from "react";
class Informations extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.userInfos = props.userInfos;
    this.todayScore = props.todayScore;
    this.score = props.score;
    this.keyData = props.keyData;
  }
}

export default Informations;
