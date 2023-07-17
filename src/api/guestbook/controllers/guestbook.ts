/**
 * guestbook controller
 */

import { factories } from "@strapi/strapi";
import { checkToken } from "../middlewares/auth-guestbook";

const initialReactions = {
  likes: [],
  reports: [],
};
export default factories.createCoreController(
  "api::guestbook.guestbook",
  ({ strapi }) => ({
    // find logged in user by token
    async meGuestBook(ctx: any) {
      const timeNow = new Date().getTime();

      if (ctx.response && ctx.response.header) {
        const token = ctx.request.header.authorization;
        const userData = checkToken(token, timeNow);
        try {
          const entry = await strapi.entityService.findMany(
            "api::guestbook.guestbook",
            {
              filters: { visitor: { $eq: userData.email } },
            }
          );
          ctx.body = {
            signs: entry,
            message: "these are my signs",
          };
          return entry;
        } catch (err) {
          return (ctx.body = err);
        }
      }
    },
    async signGuestBook(ctx: any) {
      const timeNow = new Date().getTime();

      if (ctx.response && ctx.response.header) {
        const token = ctx.request.header.authorization;
        const userData = checkToken(token, timeNow);
        // console.log(
        //   "🚀 ~ file: guestbook.ts:41 ~ signGuestBook ~ userData:",
        //   ctx.request.body,
        //   userData.email
        // );
        const { body } = ctx.request;
        // add a new sign in
        // TODO limit the users sign in comments to 100
        const entry = await strapi.entityService.create(
          "api::guestbook.guestbook",
          {
            data: {
              comment: body?.comment,
              app_code: body?.appCode,
              display_name: userData?.name,
              visitor: userData?.email,
              reactions: initialReactions,
            },
          }
        );
        if (entry) {
          console.log('if entry',{entry})
          ctx.response.status = 200
          ctx.body = {
            data: entry,
            message: "Thank you for your comment!",
          };
          return entry;
        } else {
          ctx.body = {
            data: entry,
            message: "something went wrong",
          };
          ctx.response.status = 500;
        }
      }
      ctx.response.status = 401;
      return (ctx.body = {
        message: "You are not authorized 🤷‍♂️",
      });
    },
  })
);
