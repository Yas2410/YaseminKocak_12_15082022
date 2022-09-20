/**
 * Creates a new instance of the Average Sessions class
 * @class
 */

class AverageSessions {
  /**
   * Average Sessions Details
   * @param {number} id User's id
   * @param {Array} sessions  User's average sessions report
   */

  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default AverageSessions;
