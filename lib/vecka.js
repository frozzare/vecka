'use strict';

module.exports = exports = {

  /**
   * Get current week number.
   *
   * @return {Number}
   */

  nu: function () {
    var date = new Date();
    date.setHours(0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    return Math.ceil((((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
  }

}