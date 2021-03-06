/**
 * Handlers for all RTM `star_` events.
 */

var zipObject = require('lodash.zipobject');

var RTM_EVENTS = require('../events/rtm-events').EVENTS;
var helpers = require('./helpers');


var handlers = [
    [RTM_EVENTS.STAR_ADDED, helpers.noopMessage],
    [RTM_EVENTS.STAR_REMOVED, helpers.noopMessage]
];


module.exports = zipObject(handlers);
