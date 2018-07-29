import {templates} from '../src/templates';
import {
  headContentConfig
} from '../src/config';


describe('Templates', () => {
  describe('Head Content template', () => {
    const {
      headContentTemplate
    } = templates;
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
  })
});