const Notifications = {
  Success:                        0,
  AboutToSendToEventQueue:        1,
  SentToEventQueue:               2,
  ReceivedFromEventQueue:         3,
  AboutToSendToExchange:          4,
  SentToExchange:                 5,
  Cancelled:                      6,
  Update:                         7,
  Finished:                       8,
  Error:                          9,
  ReceivedOnTrader:               10,
  SuccessfullyLoggedInToExchange: 11,
  depositRequestReceived        : 12
};

const NotificationsString = {
  0: 'Success',
  1: 'About To Send To Event Queue',
  2: 'Sent To Event Queue',
  3: 'Received From Event Queue',
  4: 'About To Send To Exchange',
  5: 'Sent To Exchange',
  6: 'Cancelled',
  7: 'Update',
  8: 'Finished',
  9: 'Error',
  10:'Received On Trader',
  11:'Successfully Logged In To Exchange',
  12:'Deposit Request Received'
};

module.exports.Notifications = Notifications;
module.exports.NotificationsString = NotificationsString;