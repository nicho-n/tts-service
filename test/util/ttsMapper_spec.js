var assert = require('assert');
var ttsMapper = require('../../service/util/ttsMapper')

describe('ttsMapper', () => {
    it('should map TTS values to an array', () => {
      var data = [{ttsdata: 0}, {ttsdata: 1}, {ttsdata: 2}];
      assert.deepEqual(ttsMapper.parseTTSData(data), [0, 1, 2])
    });
    it('should ignore unnecessary data', () => {
      var data = [{ttsdata: 0}, {ttsdata: 1}, {ttsdata: 2, somethingElse: 3}, {somethingElse: 0}];
      assert.deepEqual(ttsMapper.parseTTSData(data), [0, 1, 2])
    });
    it('ignores numbers outside the TTS range', function() {
      var data = [{ttsdata: 0}, {ttsdata: 1}, {ttsdata: 2}, {ttsdata: -2}, {ttsdata: 9}];
      assert.deepEqual(ttsMapper.parseTTSData(data), [0, 1, 2])
    })
    it('ignores non-numberic TTS values', function() {
      var data = [{ttsdata: 0}, {ttsdata: 1}, {ttsdata: 2}, {ttsdata: -2}, {ttsdata: 'hello'}, {ttsdata: 4}];
      assert.deepEqual(ttsMapper.parseTTSData(data), [0, 1, 2, 4])
    })

});