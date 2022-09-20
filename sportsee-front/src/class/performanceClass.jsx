/**
 * Creates a new instance of the Performance class
 * @class
 */
class Performance {
  /**
   * User's performance Details
   * @param {number} id User's id
   * @param {Array} data Set user's performance kind with its value
   * @param {string} kind User's performance categories
   */

  constructor(data) {
    this.userId = data.userId;
    this.data = data.data;
    this.kind = data.kind;
  }
}

export default Performance;
