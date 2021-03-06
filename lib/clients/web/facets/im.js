/**
 * API Facet to make calls to methods in the im namespace.
 *
 * This provides functions to call:
 *   - close: {@link https://api.slack.com/methods/im.close|im.close}
 *   - history: {@link https://api.slack.com/methods/im.history|im.history}
 *   - list: {@link https://api.slack.com/methods/im.list|im.list}
 *   - mark: {@link https://api.slack.com/methods/im.mark|im.mark}
 *   - open: {@link https://api.slack.com/methods/im.open|im.open}
 *
 * NOTE: This file was auto-generated and should not be edited manually.
 */


var ImFacet = function (makeAPICall) {
    this.name = 'im';
    this.makeAPICall = makeAPICall;
};


/**
 * Close a direct message channel.
 * @see {@link https://api.slack.com/methods/im.close|im.close}
 *
 * @param {?} channel Direct message channel to close.
 * @param {function} opt_cb Optional callback, if not using promises.
 */
ImFacet.prototype.close = function (channel, opt_cb) {
    var args = {
        channel: channel
    };

    return this.makeAPICall('im.close', args, opt_cb);
};

/**
 * Fetches history of messages and events from direct message channel.
 * @see {@link https://api.slack.com/methods/im.history|im.history}
 *
 * @param {?} channel Direct message channel to fetch history for.
 * @param {Object=} opts
 * @param {?} opts.latest End of time range of messages to include in results.
 * @param {?} opts.oldest Start of time range of messages to include in results.
 * @param {?} opts.inclusive Include messages with latest or oldest timestamp in results.
 * @param {?} opts.count Number of messages to return, between 1 and 1000.
 * @param {function} opt_cb Optional callback, if not using promises.
 */
ImFacet.prototype.history = function (channel, opts, opt_cb) {
    var args = {
        channel: channel,
        opts: opts
    };

    return this.makeAPICall('im.history', args, opt_cb);
};

/**
 * Lists direct message channels for the calling user.
 * @see {@link https://api.slack.com/methods/im.list|im.list}
 * @param {function} opt_cb Optional callback, if not using promises.
 */
ImFacet.prototype.list = function (opt_cb) {
    return this.makeAPICall('im.list', opt_cb);
};

/**
 * Sets the read cursor in a direct message channel.
 * @see {@link https://api.slack.com/methods/im.mark|im.mark}
 *
 * @param {?} channel Direct message channel to set reading cursor in.
 * @param {?} ts Timestamp of the most recently seen message.
 * @param {function} opt_cb Optional callback, if not using promises.
 */
ImFacet.prototype.mark = function (channel, ts, opt_cb) {
    var args = {
        channel: channel,
        ts: ts
    };

    return this.makeAPICall('im.mark', args, opt_cb);
};

/**
 * Opens a direct message channel.
 * @see {@link https://api.slack.com/methods/im.open|im.open}
 *
 * @param {?} user User to open a direct message channel with.
 * @param {function} opt_cb Optional callback, if not using promises.
 */
ImFacet.prototype.open = function (user, opt_cb) {
    var args = {
        user: user
    };

    return this.makeAPICall('im.open', args, opt_cb);
};


module.exports = ImFacet;
