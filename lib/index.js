'use strict';

const parser = require('./parser');
const addFullText = require('./add-full-text');
const toJsonFeed = require('./to-json-feed');

module.exports = async ({ url, token, max, cache }) => {
  if (!url) {
    throw new Error('url is a required field');
  }
  if (!token) {
    throw new Error('token is a required field');
  }

  const data = await parser(url, max);
  const feed = toJsonFeed(data);

  return addFullText({ feed, token, cache });
};
