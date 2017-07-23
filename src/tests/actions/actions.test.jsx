var expect = require('expect');
var actions = require('actions');// dont need to set path since an alias to the path has been setup in webpack


describe ('Actions', () => {
  it('should set auth token', ()=>{

    var action = {
      type: 'SET_AUTH_TOKEN',
      token: '123erfgt3212wert6543wd'
    };

    var res = actions.setAuthToken(action.token);

    expect(res).toEqual(action);

  });
});
