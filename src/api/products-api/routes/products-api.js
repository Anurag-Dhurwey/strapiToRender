'use strict';

/**
 * products-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::products-api.products-api');
