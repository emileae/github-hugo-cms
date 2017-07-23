var expect = require('expect');
var reducers = require('reducers');

describe ('Reducers', () => {
  describe('auth token reducer', () => {
    it ('should set the auth token', () => {

      var action = {
        type: 'SET_AUTH_TOKEN',
        token: '34ertfgh435tr43et4et'
      };

      var res = reducers.authTokenReducer('', action);

      expect(res).toEqual(action.token);

    });
  });
})
