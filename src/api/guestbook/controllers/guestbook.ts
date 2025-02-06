/**
 * guestbook controller
 */

import { factories } from "@strapi/strapi";

const initialReactions = {
  likes: [],
  reports: [],
};
export default factories.createCoreController("api::guestbook.guestbook");
