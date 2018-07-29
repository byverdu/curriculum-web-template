import {config} from '../src/config';

describe('Content data', () => {
  it( 'should be defined', () => {
    expect(config).toBeDefined();
  });

  describe('Head Content data', () => {
    const {
      headContentConfig
    } = config;
    const headProperties = [
      {key: 'description', value: 'Albert Vallverdu Resume'},
      {key: 'keywords', value: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp'},
      {key: 'author', value: '@byverdu'}
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