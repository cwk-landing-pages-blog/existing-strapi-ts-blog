/**
 * cwk-user controller
 */

import { factories } from '@strapi/strapi'
import { checkToken } from '../middlewares/auth-cwk-user';

export default factories.createCoreController('api::cwk-user.cwk-user',({ strapi }) => ({

  // find logged in user by token
  async find(ctx:any) {
    const timeNow = new Date().getTime();

    if (ctx.response && ctx.response.header) {
      const token = ctx.request.header.authorization
      const userData = checkToken(token,timeNow);
      try {
        const entry = await strapi.entityService.findMany('api::cwk-user.cwk-user', {
          filters: { email: { $eq: userData.email } },
        });
        ctx.body = {
          user: entry[0],
          message: "This Is Me @cwk-users"
        }
        return entry
      } catch (err) {
        return (ctx.body = err);
      }
    }
  },

  // login with google from next auth token
  async authWithToken(ctx){
    const timeNow = new Date().getTime();

    if (ctx.response && ctx.response.header) {
      const token = ctx.request.header.authorization
      const userData = checkToken(token,timeNow);

      const entry = await strapi.entityService.findMany('api::cwk-user.cwk-user', {
        filters: { email: { $eq: userData.email} },
      });
      // check if user already exists
      if(entry.length){
        // user already exist in cwk-users
        ctx.body = {
          user: entry[0],
          message: "User already exists"
        }
        return entry[0]
      }else{

        const entry = await strapi.entityService.create('api::cwk-user.cwk-user',{
          data: {
            email: userData?.email,
            full_name: userData?.name,
            img_url: userData?.picture
          },
        })
        return entry
      }
    }
    (ctx.response.status = 401);
    return  ctx.body ={
      message:'You are not authorized 🤷‍♂️'
    }
  }

  // delete account(soft delete)
}));
