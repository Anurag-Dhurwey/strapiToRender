module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'anuragdhurwey9211@gmail.com',
          defaultReplyTo: 'sevkalidhurwey236@gmail.com',
          testAddress: 'juliasedefdjian@strapi.io',
        },
      },
    },
    // ...
  });