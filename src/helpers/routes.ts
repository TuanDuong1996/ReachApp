export const AppRoute = {
  list: "/",
  new: "/new",
  detail: (id = ":id") => "/" + id,
};
