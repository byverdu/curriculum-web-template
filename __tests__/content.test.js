import {
  headContentConfig
} from '../src/config';

describe('Content data', () => {
  describe('Head Content data', () => {
    const headProperties = [
      {key: 'description', value: 'John Doe Resume'},
      {key: 'keywords', value: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp'},
      {key: 'author', value: '@DoeJohn'}
    ];
  
    it( 'should be defined', () => {
      expect(headContentConfig).toBeDefined();
    });
    it( 'should be an object', () => {
      expect(headContentConfig).toBeInstanceOf(Object);
    });
    it( 'should have 3 properties', () => {
      expect(Object.keys(headContentConfig)).toHaveLength(3);
    });
    headProperties.forEach(prop => {
      const { key, value } = prop;
      it(`should have property ${key} with value ${value}`, () => {
        expect(headContentConfig[key]).toContain(value)
      });
    })
  })
});