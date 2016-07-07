'use strict'
var should = require("should");

import {music, dj} from "../src/command/music";

var bot;


describe('music', function() {

  before(function() {
      bot = {joinVoiceChannel: function() {},  sendMessage: function() {}};
  });

  it('should connect to Music channel', function (done) {
    let message = {"channel": {"server" : {"channels" : [{"name" : "music", "type":"text"}, {"name" : "Music", "type":"voice"}]}}};
    music(bot, message).should.be.equal(0);
    done();
  });
  it('should not connect to any channel', function (done) {
    let message = {"channel": {"server" : {"channels" : [{"name" : "toto", "type":"text"}, {"name" : "Musique", "type":"voice"}]}}};
    music(bot, message).should.be.equal(1);
    done();
  });
  it('should not connect to any channel', function (done) {
    bot.voiceConnection = "exist";
    let message = {"channel": {"server" : {"channels" : [{"name" : "musique", "type":"text"}, {"name" : "Music", "type":"voice"}]}}};
    music(bot, message).should.be.equal(1);
    done();
  });

});
