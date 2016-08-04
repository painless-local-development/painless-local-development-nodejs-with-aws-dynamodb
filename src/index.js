/**
 *
 *     _|_|_|      _|_|    _|_|_|  _|      _|  _|        _|_|_|_|    _|_|_|    _|_|_|
 *     _|    _|  _|    _|    _|    _|_|    _|  _|        _|        _|        _|
 *     _|_|_|    _|_|_|_|    _|    _|  _|  _|  _|        _|_|_|      _|_|      _|_|
 *     _|        _|    _|    _|    _|    _|_|  _|        _|              _|        _|
 *     _|        _|    _|  _|_|_|  _|      _|  _|_|_|_|  _|_|_|_|  _|_|_|    _|_|_|
 *
 *     This is a Painless Local Development Repository, enjoy it!
 */

'use strict'

const vogels = require('vogels')
const Joi = require('joi')
const AWS = vogels.AWS

// Much better by IAM Role
AWS.config.update({ region: 'eu-west-1', accessKeyId: 'fakeCredentials', secretAccessKey: 'fakeCredentials', endpoint: 'http://dynamodb:8000' })

// Create Table
const Account = vogels.define('example-update', {
  hashKey: 'email',
  timestamps: true,
  schema: {
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number(),
    nicknames: vogels.types.stringSet(),
    nested: Joi.object()
  }
})

// Create a table from Model
vogels.createTables(function (err) {
  if (err) {
    console.log('Error creating tables', err)
    process.exit(1)
  }

  // Update through hashKey and add 1 to age
  Account.update({email: 'test5@example.com', age: {$add: 1}}, function (err, acc) {
    if (err) { console.log(err) }
    console.log('incremented age', acc.get('age'))
  })

  // Update through hashKey and add tag to nicknames
  Account.update({email: 'test@example.com', nicknames: {$add: 'smalls'}}, function (err, acc) {
    if (err) { console.log(err) }
    console.log('added one nickname', acc.get('nicknames'))
  })

  // Update through hashKey and add tags to nicknames
  Account.update({email: 'test@example.com', nicknames: {$add: ['bigs', 'big husk', 'the dude']}}, function (err, acc) {
    if (err) { console.log(err) }
    console.log('added three nicknames', acc.get('nicknames'))
  })

  // Update through hashKey and delete a tag to nicknames
  Account.update({email: 'test@example.com', nicknames: {$del: 'the dude'}}, function (err, acc) {
    if (err) { console.log(err) }
    console.log('removed nickname', acc.get('nicknames'))
  })

  // Update through hashKey and add a property to a nested object
  Account.update({email: 'test@example.com', nested: {roles: ['guest']}}, function (err, acc) {
    if (err) { console.log(err) }
    console.log('added nested data', acc.get('nested'))
  })
})
