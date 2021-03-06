/**
 * In memory data store for caching information from the Slack API.
 */

var find = require('lodash.find');
var forEach = require('lodash.foreach');
var inherits = require('inherits');
var keys = require('lodash.keys');

var SlackDataStore = require('./data-store');
var models = require('../models');


/**
 *
 * @constructor
 */
var SlackMemoryDataStore = function() {
    SlackDataStore.call(this);

    /**
     *
     * @type {Object}
     */
    this.users = {};


    /**
     *
     * @type {Object}
     */
    this.channels = {};


    /**
     *
     * @type {Object}
     */
    this.dms = {};


    /**
     *
     * @type {Object}
     */
    this.groups = {};


    /**
     *
     * @type {Object}
     */
    this.bots = {};
};

inherits(SlackMemoryDataStore, SlackDataStore);


/** @inheritdoc */
SlackMemoryDataStore.prototype.clear = function() {
    this.users = {};
    this.channels = {};
    this.ims = {};
    this.groups = {};
    this.bots = {};
    this.teams = {};
};



/** @inheritdoc */
SlackMemoryDataStore.prototype.getUserById = function(userId) {
    return this.users[userId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getUserByName = function(name) {
    return find(this.users, 'name', name);
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getUserByEmail = function(email) {
    return find(this.users, 'email', email);
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getChannelById = function(channelId) {
    return this.channels[channelId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getChannelByName = function(name) {
    return find(this.channels, 'name', name);
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getGroupById = function(groupId) {
    return this.groups[groupId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getGroupByName = function(name) {
    return find(this.groups, 'name', name);
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getDMById = function(dmId) {
    return this.dms[dmId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getBotById = function(botId) {
    return this.bots[botId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getBotByName = function(name) {
    return find(this.bots, 'name', name);
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.getTeamById = function(teamId) {
    return this.teams[teamId];
};


/**
 * Returns the unread count for all objects: channels, groups etc.
 */
SlackMemoryDataStore.prototype.getUnreadCount = function() {
};


// ###############################################
// Setters
// ###############################################


/** @inheritdoc */
SlackMemoryDataStore.prototype.setChannel = function(channel) {
    this.channels[channel.id] = channel;
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.setGroup = function(group) {
    this.groups[group.id] = group;
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.setDM = function(dm) {
    this.dms[dm.id] = dm;
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.setUser = function(user) {
    this.users[user.id] = user;
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.setBot = function(bot) {
    this.bots[bot.id] = bot;
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.setTeam = function(team) {
    this.teams[team.id] = team;
};


// ###############################################
// Deletion methods
// ###############################################


/** @inheritdoc */
SlackMemoryDataStore.prototype.removeChannel = function(channelId) {
    delete this.channels[channelId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.removeGroup = function(groupId) {
    delete this.groups[groupId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.removeDM = function(dmId) {
    delete this.dms[dmId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.removeUser = function(userId) {
    delete this.users[userId];
};


/** @inheritdoc */
SlackMemoryDataStore.prototype.removeBot = function(botId) {
    delete this.bots[botId];
};

module.exports = SlackMemoryDataStore;
