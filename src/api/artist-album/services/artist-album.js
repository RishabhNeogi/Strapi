'use strict';

/**
 * artist-album service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artist-album.artist-album');
