const User = require('./User');

/**
 * @typedef {Object} TagUserData
 * @TODO: Define a TagUserData type
 */

/**
 * The User object used by the TagEngine.
 */
class TagUser extends User {
    constructor() {
        super();
    }

    static createUser(id, username) {
        var user = super.createUser(id, username);
    }
}

module.exports = TagUser;