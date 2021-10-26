const JSONSerializable = require('./JSONSerializable');

/**
 * Defines the property values of a User.
 * @typedef {Object} UserData
 * @property {string|number} id The id of the user.
 * @property {string} username The username of the user.
 * @property {number} userTimeCreated The time that the user was created.
 */

/**
 * Represents a base, extendable user object.
 * @extends JSONSerializable
 */
class User extends JSONSerializable {
    /**
     * The id of the user.
     * @type {string|number}
     */
    id = undefined;

    /**
     * The username of the user.
     * @type {string}
     */
    username = undefined;

    /**
     * The time that the user was created.
     * @type {number}
     */
    userTimeCreated = undefined;

    /**
     * User constructor.
     * @param {UserData} data The data to be used to define the user.
     */
    constructor(data) {
        super();

        // Iterate through the data and set the properties if they exist on the data object.
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }

    /**
     * Deserializes a UserData object into a User object.
     * @param {UserData} data The data to be deserialized.
     * @returns {User} The deserialized User.
     * @see UserData
     */
    static fromJSON(data) {
        return new User(data);
    }

    /**
     * Creates a new User object from the provided ID and username.
     * @param {string|number} id The id of the user.
     * @param {string} username The username of the user.
     * @returns {User} The user object.
     */
    static createUser(id,username) {
        return new User({
            id: id,
            username: username,
            userTimeCreated: Date.now()
        });
    }
}

module.exports = User;