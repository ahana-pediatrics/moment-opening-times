const Moment = require('moment');

function removePastAlterations(alterations, moment, timeZone) {
  if (alterations) {
    const todayInKeyFormat = Moment.tz(moment, timeZone).format('YYYY-MM-DD');
    const presentAndFutureAlterations = {};
    const alterationsKeys = Object.keys(alterations);

    alterationsKeys.forEach((key) => {
      if (key >= todayInKeyFormat) {
        presentAndFutureAlterations[key] = alterations[key];
      }
    });
    return presentAndFutureAlterations;
  }
  return alterations;
}

module.exports = removePastAlterations;