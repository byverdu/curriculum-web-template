import {templates} from '../src/templates';
import {
  headContentConfig,
  footerContentConfig
} from '../src/config';

const {
  headContentTemplate,
  footerContentTemplate
} = templates;

describe('Templates', () => {
  describe('Head Content template', () => {
    const mockHead = jest.fn();
    const result = headContentTemplate(headContentConfig);

    it( 'should be defined', () => {
      expect(headContentTemplate).toBeDefined();
    });
    it( 'should be function', () => {
      expect(typeof headContentTemplate).toBe('function');
    });
    it( 'should use headContentConfig data', () => {
      mockHead(headContentConfig);

      expect(mockHead).toHaveBeenCalledWith(headContentConfig);
    });
    Object.values(headContentConfig)
      .forEach(value => {
        it(`should contain ${value} from head content`, () => {
          expect(result).toContain(value);
        });
      });
  });
  describe('Footer Content template', () => {
    const mockFooter = jest.fn();
    const result = footerContentTemplate(footerContentConfig);

    it( 'should be defined', () => {
      expect(footerContentTemplate).toBeDefined();
    });
    it( 'should be function', () => {
      expect(typeof footerContentTemplate).toBe('function');
    });
    it( 'should use footerContentConfig data', () => {
      mockFooter(footerContentConfig);

      expect(mockFooter).toHaveBeenCalledWith(footerContentConfig);
    });
    it('should contain values from footer content', () => {
      expect(result).toContain('@DoeJohn');
    });
  });
});