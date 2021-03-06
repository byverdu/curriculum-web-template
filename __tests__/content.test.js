import {
  headContent,
  footerContent
} from '../src/config';

describe('Content data', () => {
  describe('Head Content data', () => {
    const headProperties = [
      {key: 'description', value: 'John Doe Resume'},
      {key: 'keywords', value: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp'},
      {key: 'author', value: '@DoeJohn'}
    ];
  
    it( 'should be defined', () => {
      expect(headContent).toBeDefined();
    });
    it( 'should be an object', () => {
      expect(headContent).toBeInstanceOf(Object);
    });
    it( 'should have 3 properties', () => {
      expect(Object.keys(headContent)).toHaveLength(3);
    });
    headProperties.forEach(prop => {
      const { key, value } = prop;
      it(`should have property ${key} with value ${value}`, () => {
        expect(headContent[key]).toContain(value)
      });
    })
  });
  describe('Footer Content data', () => {
    const headProperties = [
      {key: 'description', value: 'John Doe Resume'},
      {key: 'keywords', value: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp'},
      {key: 'author', value: '@DoeJohn'}
    ];
  
    it( 'should be defined', () => {
      expect(footerContent).toBeDefined();
    });
    it( 'should be an object', () => {
      expect(footerContent).toBeInstanceOf(Object);
    });
    it( 'should have an author property', () => {
      expect(footerContent).toHaveProperty('author');
      expect(typeof footerContent.author).toEqual('string');
    });
    headProperties.forEach(prop => {
      const { key, value } = prop;
      it(`should have property ${key} with value ${value}`, () => {
        expect(headContent[key]).toContain(value)
      });
    })
  });
});