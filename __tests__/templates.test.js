import {
  headTemplate,
  footerTemplate
} from '../src/templates/templates';
import {
  headContent,
  footerContent
} from '../src/config';


describe('Templates', () => {
  describe('Head Content template', () => {
    const mockHead = jest.fn();
    const result = headTemplate(headContent);

    it( 'should be defined', () => {
      expect(headTemplate).toBeDefined();
    });
    it( 'should be function', () => {
      expect(typeof headTemplate).toBe('function');
    });
    it( 'should use headContent data', () => {
      mockHead(headContent);

      expect(mockHead).toHaveBeenCalledWith(headContent);
    });
    Object.values(headContent)
      .forEach(value => {
        it(`should contain ${value} from head content`, () => {
          expect(result).toContain(value);
        });
      });
  });
  describe('Footer Content template', () => {
    const mockFooter = jest.fn();
    const result = footerTemplate(footerContent);

    it( 'should be defined', () => {
      expect(footerTemplate).toBeDefined();
    });
    it( 'should be function', () => {
      expect(typeof footerTemplate).toBe('function');
    });
    it( 'should use footerContent data', () => {
      mockFooter(footerContent);

      expect(mockFooter).toHaveBeenCalledWith(footerContent);
    });
    it('should contain values from footer content', () => {
      expect(result).toContain('@DoeJohn');
    });
  });
});