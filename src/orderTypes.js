// const orderTypes = {
//   getUserData: 0,
//   buyImmediateOrCancel: 1,
//   sellImmediateOrCancel: 2,
//   login: 3,
//   timeBuyTaking: 4,
//   timeSellTaking: 5,
//   timedBuyMaking: 6,
//   timedSellMaking: 7
// };

// const orderTypesStr = {
//   0: 'get User Data',
//   1: 'buy Immediate Or Cancel',
//   2: 'sell Immediate Or Cancel',
//   3: 'login',
//   4: 'time Buy Taking',
//   5: 'time Sell Taking',
//   6: 'timed Buy Making',
//   7: 'timed Sell Making'
// };

const orderTypes = {
  login: 0,
  getUserData: 1,
  ImmediateOrCancel: 2,
  timedTaking: 3,
  timedMaking: 4,
  market: 5,
  beginTrading : 6,
};

const orderTypesStr = {
  0: 'login',
  1: 'Get User Data',
  2: 'Immediate Or Cancel',
  3: 'Timed Taking',
  4: 'Timed Making',
  5: 'Market',
  6: 'Begin Trading'
};

module.exports.orderTypes = orderTypes;
module.exports.orderTypesStr = orderTypesStr;

