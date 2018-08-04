const utils = require('../src/utils');
const {
  newLineAndTabsBuilder,
  htmlCommentBuilder
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
      commentMock('is a comment', 2)
      expect(commentMock).toHaveBeenCalledWith('is a comment', 2);
    });
  });
  describe('newLineAndTabsBuilder', () => {
  
  });
  describe('newLineAndTabsBuilder', () => {
  
  });
});