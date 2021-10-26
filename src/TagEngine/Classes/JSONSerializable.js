/**
 * Extendable class defining a toJSON method.
 */
class JSONSerializable {
    /**
     * Return a JSON representation of the object.
     * @returns {Object} Object in JSON format.
     */
    toJSON() {
        // Define a blank object to store the JSON data.
        var object = {}

        // Loop through all the properties of the object.
        for (var property in this) {
            // If the property is a function, skip it.
            if (typeof this[property] === 'function') {
                continue
            }

            // Add the property to the object, and it implements the toJSON() method, call it.
            if (this[property] instanceof JSONSerializable) {
                object[property] = this[property].toJSON();
            } else {
                object[property] = this[property];
            }
        }

        // Finally, return the object.
        return object;
    }

    /**
     * Returns the stringified JSON object.
     * @param {boolean} [prettify] If true, the JSON will be prettified.
     * @returns {String} Stringified JSON object.
     */
    toString(prettify) {
        return JSON.stringify(this.toJSON(), null, prettify ? 4 : null);
    }
}

module.exports = JSONSerializable;