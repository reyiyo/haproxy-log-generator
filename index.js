const faker = require('faker');
const moment = require('moment');

const statusCodes = [200, 200, 200, 200, 200, 200, 200, 200, 301, 301, 401, 401, 404, 404, 500];
const methods = ['GET', 'GET', 'GET', 'GET', 'GET', 'GET', 'POST', 'POST', 'POST', 'PUT', 'DELETE', 'HEAD'];

module.exports = () => {
    return `${faker.internet.ip()}:${faker.random.number({ min: 1000, max: 65535 })} [${moment().format(
        'DD/MMM/YYYY:HH:mm:ss.SSS'
    )}] ${faker.internet.domainWord()}-http-in 10.${faker.internet
        .ip()
        .split('.')
        .slice(1, 4)
        .join('.')}:${faker.random.number({
        min: 20,
        max: 65535
    })} ${faker.random.number({
        max: 50
    })}/${faker.random.number({
        max: 10
    })}/${faker.random.number({
        max: 10
    })}/${faker.random.number({
        max: 500
    })}/${faker.random.number({
        max: 1000
    })} ${faker.random.arrayElement(statusCodes)} ${faker.random.number({
        max: 900000
    })} - - --- ${faker.random.number()}/${faker.random.number()}/${faker.random.number()}/${faker.random.number()}/${faker.random.number(
        { max: 10 }
    )} ${faker.random.number({ max: 10 })}/${faker.random.number({ max: 10 })} {} {} "${faker.random.arrayElement(
        methods
    )} /${faker.lorem
        .words(faker.random.number({ max: 6 }))
        .split(' ')
        .join('/')} HTTP/1.1"`;
};
