const dotenv = require('../lib');
const { describe, expect, beforeAll } = require('@jest/globals')


describe('Env without env file', () => {
    it('should return with all key defined ', () => {
        const input = {
            'NODE_ENV': 'development',
            'PORT': 3000,
        }
        const output = dotenv.load(input)
        expect(typeof output).toBe('object')
        expect(Object.keys(output)).toEqual(Object.keys(input))
    });

    it('should return same type with default value', () => {
        const input = {
            'NODE_ENV': 'development',
            'PORT': 3000,
            'IS_PROD': false,
        }
        const output = dotenv.load(input)
        for (const key in input) {
            expect(typeof output[key]).toEqual(typeof input[key])
        }
    });
});
describe('Env with env file', () => {
    beforeAll(() => {
        process.env.NODE_ENV = 'production'
        process.env.PORT = '219123'
        process.env.IS_PROD = 'truE'
    })
    it('should return with all key defined ', () => {
        const input = {
            'NODE_ENV': 'development',
            'PORT': 3000,
        }
        const output = dotenv.load(input)
        expect(typeof output).toBe('object')
        expect(Object.keys(output)).toEqual(Object.keys(input))
    });

    it('should return same type with default value', () => {
        const input = {
            'NODE_ENV': 'development',
            'PORT': 3000,
            'IS_PROD': false,
        }
        const output = dotenv.load(input)
        expect(typeof output).toBe('object')
        for (const key in input) {
            expect(typeof output[key]).toEqual(typeof input[key])
        }
    });
});