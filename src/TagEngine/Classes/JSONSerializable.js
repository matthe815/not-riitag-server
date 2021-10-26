/**
 * Extendable class defining a toJSON method.
 */
class JSONSerializable {
  /**
     * Return a JSON representation of the object.
     * @returns {Object} Object in JSON format.
     */
  toJSON () {
    return JSON.parse(JSON.stringify(Object.assign({}, this)))
  }

  /**
     * Returns the stringified JSON object.
     * @param {boolean} [prettify] If true, the JSON will be prettified.
     * @returns {String} Stringified JSON object.
     */
  toString (prettify) {
    return JSON.stringify(this.toJSON(), null, prettify ? 4 : null)
  }
}

module.exports = JSONSerializable
