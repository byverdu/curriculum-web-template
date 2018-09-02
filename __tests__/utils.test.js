const utils = require('../src/utils');
const {
  newLineAndTabsBuilder,
  htmlCommentBuilder,
  dividerBuilder,
  htmlTagBuilder,
  trimAndLowercaseString
} = utils;

describe('Utils', () => {
  describe('newLineAndTabsBuilder', () => {
    it('should have a newLineAndTabsBuilder method', () => {
      expect(newLineAndTabsBuilder).toBeDefined();
    });
    it('should add as much tabs as paramater passed', () => {
      expect(newLineAndTabsBuilder(2)).toEqual('\n\t\t');
      expect(newLineAndTabsBuilder('3')).toEqual('\n\t\t\t');
      expect(newLineAndTabsBuilder('pollo')).toEqual('');
    });
  });
  describe('htmlCommentBuilder', () => {
    const commentMock = jest.fn();
    it('should have a htmlCommentBuilder method', () => {
      expect(htmlCommentBuilder).toBeDefined();
    });
    it('should create a HTML comment with a new line', () => {
      expect(htmlCommentBuilder('is a comment')).toEqual('<!-- is a comment -->\n');
    });
    it('should have the ability to add tabs', () => {
      expect(htmlCommentBuilder('is a comment', 1)).toEqual('\t<!-- is a comment -->\n');
      expect(htmlCommentBuilder('is a comment', 2)).toEqual('\t\t<!-- is a comment -->\n');
      commentMock('is a comment', 2);
      expect(commentMock).toHaveBeenCalledWith('is a comment', 2);
    });
  });
  describe('dividerBuilder', () => {
    it('should have a dividerBuilder method', () => {
      expect(dividerBuilder).toBeDefined();
    });
    it('should be possible to add a value to class attribute', () => {
      expect(dividerBuilder()).toEqual('<div class="divider"></div>');
      expect(dividerBuilder('custom-class')).toEqual('<div class="custom-class"></div>');
    });
  });
  describe('htmlTagBuilder', () => {
    const tagMock = jest.fn();
    const tagContent = ['Name: @doe', 'Address: To the moon']
    it('should have a htmlTagBuilder method', () => {
      expect(htmlTagBuilder).toBeDefined();
    });
    it('should have been called with an array and tag name', () => {
      tagMock(tagContent, 'li');
      expect(tagMock).toHaveBeenCalledWith(tagContent, 'li');
    });
    it('should add 2 tabs by default to align items', () => {
      expect(htmlTagBuilder(tagContent, 'li')).toContain('\n\t\t');
    });
    it('should have the ability to define the number of tabs', () => {
      expect(htmlTagBuilder(tagContent, 'li', 3)).toContain('\n\t\t\t');
    });
    it('should throw an error if less than 2 arguments are passed', () => {
      expect(() => htmlTagBuilder(tagContent)).toThrowError('WrongNumberArgsError:: htmlTagBuilder expects at least 2 arguments');
    });
  });
  describe('trimAndLowercaseString', () => {
    it('should have a trimAndLowercaseString method', () => {
      expect(trimAndLowercaseString).toBeDefined();
    });
    it('should lowercase and trim a string', () => {
      expect(trimAndLowercaseString(' DraCula  ')).toEqual('dracula');
    });
  });
  
  describe('newLineAndTabsBuilder', () => {
  
  });describe('newLineAndTabsBuilder', () => {
  
  });
});