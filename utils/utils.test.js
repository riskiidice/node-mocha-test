const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

    describe('#add', () => {
        it('Should add two number', () => {
            var result = utils.add(3, 5);

            expect(result).toBe(8).toBeA('number');
        });

    });

    it('Should square number', () => {
        var result = utils.square(5);

        expect(result).toBe(25).toBeA('number');
    });

    it('Should asycSquare number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        })
    });

    it('Should asyncAdd two number', (done) => {
        utils.asyncAdd(5, 3, (sum) => {
            expect(sum).toBe(8).toBeA('number');
            done();
        })
    })

    it('Should expect some valuse', () => {
        expect({
            name: 'amp',
            age: 25
        }).toInclude(
            {
                age: 25
            }
            )
    });

});


it('Should set firstname and lastname', () => {
    var user = { location: 'Thailand', age: 25 };
    var result = utils.setName(user, 'Tikumporn Wankvar');

    expect(user).toInclude({
        firstName: 'Tikumporn',
        lastName: 'Wankvar'
    });
});