export const ServiceNowEndpoint = {
  incident: {
    list: "/api/now/table/incident",
    detail: (id: string) =>  "/api/now/table/incident/" + id,
    listUser: "api/now/table/sys_user"
  },
};

export const ReachEndpoint = {

}
