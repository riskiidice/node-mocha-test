const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    const db = app.__get__('db');
    db.saveUser = expect.createSpy();

    it('Should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Ammpmp', 25);
        expect(spy).toHaveBeenCalledWith('Ammpmp', 25);
    });

    it('Should call saveUser with user object', () => {
        var email = 'ampamp@ampamp.com';
        var password = 'ampamp';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});