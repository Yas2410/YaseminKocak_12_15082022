/**
 * Creates a new instance of the Informations class
 * @class
 */

class Informations {
  /**
   * Informations Details
   * @param {number} id User's id
   * @param {number} todayScore  User's score report
   * @param {number} score  User's score report
   * @param {number} keyData  User's nutritional values report
   */

  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.score = data.score;
    this.keyData = data.keyData;
  }
}

export default Informations;
