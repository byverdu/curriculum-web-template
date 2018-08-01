const utils = require('../src/utils');
const {
  newLineAndTabsBuilder,
  htmlCommentBuilder
} = utils;

describe('Utils', () => {
  it('should have a newLineAndTabsBuilder method', () => {
    expect(newLineAndTabsBuilder).toBeDefined();
  });
  it('should add as much tabs as paramater passed', () => {
    expect(newLineAndTabsBuilder(2)).toEqual('\n\t\t');
    expect(newLineAndTabsBuilder('3')).toEqual('\n\t\t\t');
    expect(newLineAndTabsBuilder('pollo')).toEqual('');
  });
  it('should have a htmlCommentBuilder method', () => {
    expect(htmlCommentBuilder).toBeDefined();
  });
  it('should create a HTML comment without tabs or new line', () => {
    expect(htmlCommentBuilder('is a comment')).toEqual('<!-- is a comment -->');
  });
});