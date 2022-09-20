/**
 * Creates a new instance of the Activity class
 * @class
 */

class Activity {
  /**
   * Activity Details
   * @param {number} id User's id
   * @param {Array} sessions  User's daily activity sessions report
   */

  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default Activity;
