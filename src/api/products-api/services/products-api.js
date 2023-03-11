'use strict';

/**
 * products-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-api.products-api');
