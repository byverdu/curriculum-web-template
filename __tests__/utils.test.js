const utils = require('../src/utils');
const {
  newLineAndTabsBuilder,
  htmlCommentBuilder,
  dividerBuilder,
  htmlTagBuilder,
  whiteSpaceBuilder,
  newLineAndSpacesBuilder,
  isLastItem,
  addTabSpaceOrBlank
} = utils;

describe('Utils', () => {
  describe('whiteSpaceBuilder', () => {
    it('should have a whiteSpaceBuilder method', () => {
      expect(whiteSpaceBuilder).toBeDefined();
    });
    it('should add as much spaces as paramater passed', () => {
      expect(whiteSpaceBuilder(2)).toEqual('  ');
      expect(whiteSpaceBuilder('3')).toEqual('   ');
    });
    it('should throw an error if the argument is not a number', () => {
      expect(() => whiteSpaceBuilder('pollo')).toThrowError('WrongTypeArgsError:: whiteSpaceBuilder expects a Number argument');
    });
    it('should throw an error if less than 2 arguments are passed', () => {
      expect(() => whiteSpaceBuilder()).toThrowError('WrongNumberArgsError:: whiteSpaceBuilder expects at least 1 arguments');
    });
  });
  describe('newLineAndTabsBuilder', () => {
    it('should have a newLineAndTabsBuilder method', () => {
      expect(newLineAndTabsBuilder).toBeDefined();
    });
    it('should add as much tabs as paramater passed', () => {
      expect(newLineAndTabsBuilder(2)).toEqual('\n\t\t');
      expect(newLineAndTabsBuilder('3')).toEqual('\n\t\t\t');
    });
    it('should throw an error if the argument is not a number', () => {
      expect(() => newLineAndTabsBuilder('pollo')).toThrowError('WrongTypeArgsError:: newLineAndTabsBuilder expects a Number argument');
    });
  });
  describe('newLineAndSpacesBuilder', () => {
    it('should have a newLineAndSpacesBuilder method', () => {
      expect(newLineAndSpacesBuilder).toBeDefined();
    });
    it('should add as much tabs as paramater passed', () => {
      expect(newLineAndSpacesBuilder(2)).toEqual('\n  ');
      expect(newLineAndSpacesBuilder('3')).toEqual('\n   ');
    });
    it('should throw an error if the argument is not a number', () => {
      expect(() => newLineAndSpacesBuilder('pollo')).toThrowError('WrongTypeArgsError:: newLineAndSpacesBuilder expects a Number argument');
    });
  });
  describe('htmlCommentBuilder', () => {
    const commentMock = jest.fn();
    it('should have a htmlCommentBuilder method', () => {
      expect(htmlCommentBuilder).toBeDefined();
    });
    it('should create a HTML comment with a new line', () => {
      expect(htmlCommentBuilder('is a comment')).toEqual('<!-- is a comment -->');
    });
    it('should have the ability to add tabs', () => {
      expect(htmlCommentBuilder('is a comment', 1)).toEqual('\t<!-- is a comment -->');
      expect(htmlCommentBuilder('is a comment', 2)).toEqual('\t\t<!-- is a comment -->');
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
    it('should add 6 spaces by default to align items', () => {
      expect(htmlTagBuilder(tagContent, 'li')).toContain('\n      ');
    });
    it('should have the ability to define the number of spaces', () => {
      expect(htmlTagBuilder(tagContent, 'li', 3)).toContain('\n   ');
    });
    it('should throw an error if less than 2 arguments are passed', () => {
      expect(() => htmlTagBuilder(tagContent)).toThrowError('WrongNumberArgsError:: htmlTagBuilder expects at least 2 arguments');
    });
  });
  
  describe('isLastItem', () => {
    it('should have a isLastItem method', () => {
      expect(isLastItem).toBeDefined();
    });
    it('should return true when when is the last item of an array', () => {
      const result = ['a','b', 'c'];
      expect(isLastItem(result, 1)).toBeFalsy();
      expect(isLastItem(result, 2)).toBeTruthy();
    });
  });
  describe('addTabSpaceOrBlank', () => {
    it('should have a addTabSpaceOrBlank method', () => {
      expect(addTabSpaceOrBlank).toBeDefined();
    });
    it('should throw an error if less than 2 arguments are passed', () => {
      expect(() => addTabSpaceOrBlank(true)).toThrowError('WrongNumberArgsError:: addTabSpaceOrBlank expects at least 2 arguments');
    });
    it('should throw an error if less than 2 arguments are passed', () => {
      expect(() => addTabSpaceOrBlank(true, 'xoxo')).toThrowError('WrongValueArgsError:: xoxo argument is not a valid value for addTabSpaceOrBlank');
    });
    it('should return and empty string if the condition is false', () => {
      expect(addTabSpaceOrBlank(false, 'tab')).toEqual('');
    });
    it('should return the tabs method for a truthy condition an tabs parameter', () => {
      expect(addTabSpaceOrBlank(true, 'tab', 2)).toEqual('\n\t\t');
    });
    it('should return the space method for a truthy condition an space parameter', () => {
      expect(addTabSpaceOrBlank(true, 'space', 2)).toEqual('\n  ');
    });
    it('should return the whiteSpace method for a truthy condition an whiteSpace parameter', () => {
      expect(addTabSpaceOrBlank(true, 'whiteSpace', 2)).toEqual('  ');
    });
  });
});