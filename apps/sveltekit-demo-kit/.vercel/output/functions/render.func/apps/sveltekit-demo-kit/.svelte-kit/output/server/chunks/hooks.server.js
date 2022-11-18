import cookie__default from "cookie";
import { v4 } from "@lukeed/uuid";
const handle = async ({ event, resolve }) => {
  const cookies = cookie__default.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies.userid || v4();
  const response = await resolve(event);
  if (!cookies.userid) {
    response.headers.set("set-cookie", `userid=${event.locals.userid}; Path=/; HttpOnly`);
  }
  return response;
};
export {
  handle
};
