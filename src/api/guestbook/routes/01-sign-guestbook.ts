/**
 *cwk-user from token router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/guestbook/me',
      handler: 'guestbook.meGuestBook',
      config: {
        middlewares: ['api::guestbook.auth-guestbook'],
      },
    },
    {
      method: 'POST',
      path: '/guestbook/sign-guestbook',
      handler: 'guestbook.signGuestBook',
      config: {
        middlewares: ['api::guestbook.auth-guestbook'],
      },
    },
  ],
};
