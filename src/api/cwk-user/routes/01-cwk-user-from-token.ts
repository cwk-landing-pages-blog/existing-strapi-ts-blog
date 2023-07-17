/**
 *cwk-user from token router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/cwk-users/me',
      handler: 'cwk-user.find',
      config: {
        middlewares: ['api::cwk-user.auth-cwk-user'],
      },
    },
    {
      method: 'POST',
      path: '/cwk-users/auth-with-token',
      handler: 'cwk-user.authWithToken',
      config: {
        middlewares: ['api::cwk-user.auth-cwk-user'],
      },
    },

  ],
};
