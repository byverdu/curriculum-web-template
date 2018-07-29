import {config} from '../src/config';

describe('Content data', () => {
  it( 'should be defined', () => {
    expect(config).toBeDefined();
  });

  describe('Head Content data', () => {
    const {
      headContentConfig
    } = config;
  
    it( 'should be defined', () => {
      expect(headContentConfig).toBeDefined();
    });
    it( 'should be an object', () => {
      expect(headContentConfig).toEqual({});
    });
  })
});