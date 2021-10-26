const Canvas = require('canvas')
const fs = require('fs')
const path = require('path')
const { EventEmitter } = require('events')

/**
 * @typedef {Object} TagEngineOptions
 * @property {string} [font]
 */

/**
 * The tag rendering engine.
 */
class TagEngine extends EventEmitter {
  constructor (options) {
    super()
  }
}

module.exports = TagEngine
