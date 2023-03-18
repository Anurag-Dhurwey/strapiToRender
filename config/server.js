module.exports = ({ env }) => ({
  proxy: true,
  url: env('HOST'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

