const expect = require('expect');
const utils = require('./utils');

it('Should add two number', () => {
    var result = utils.add(3, 5);

    expect(result).toBe(8).toBeA('number');

    /* if (result !== 8) {
        throw new Error(`Expected 8, but got ${result}`)
     }*/
});

it('Should square number', () => {
    var result = utils.square(5);

    expect(result).toBe(25).toBeA('number');
});

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

it('Should set firstname and lastname', () => {
    var user = { location: 'Thailand', age: 25 };
    var result = utils.setName(user, 'Tikumporn Wankvar');

    expect(user).toEqual(user);
});