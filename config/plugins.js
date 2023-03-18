module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider:env('EMAIL_PROVIDER', 'nodemailer'),
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp-relay.sendinblue.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM','anuragdhurwey9211@gmail.com'),
        defaultReplyTo:env('EMAIL_ADDRESS_REPLY','anuragdhurwey9211@gmail.com'),
      },
    },
  },
  // ...
});