
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // socket: '/tmp/nginx.socket', // only use if absolutely required
  // emitErrors: false,

  url: env('PUBLIC_URL'),
});