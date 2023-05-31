module.exports = ({ env }) => {

  return{
  // seo: {
  //   enabled: true,
  // },
  // meilisearch: {
  //   config: {
  //     host: env('MEILISEARCH_HOST'),
  //     apiKey: env('MEILISEARCH_API_KEY'),
  //   },
  // },
  // navigation: { enabled: true },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  // 'entity-notes': {
  //   enabled: true,
  // },
  // sentry: {
  //   enabled: env('SENTRY_ENABLED') === "true",
  //   config: {
  //     dsn: env('SENTRY_DSN'),
  //     sendMetadata: true,
  //     environment: env('SENTRY_ENV'),
  //   },
  // },

}
};
