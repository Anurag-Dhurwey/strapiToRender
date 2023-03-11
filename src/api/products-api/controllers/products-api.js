'use strict';

/**
 * products-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::products-api.products-api');
