import { stringify } from "qs";
import { useEffect, useState } from "react";
import { useQuery, UseQueryOptions } from "react-query";
import { snRequest } from "../../helpers/request";
import { ServiceNowEndpoint } from "../endpoint";
import { APIErrorResponse, IncidentEntity } from "../types.interface";

export type GetIncidentsQueryResponse = IncidentEntity[];
export type GetIncidentsQueryOptions = UseQueryOptions<
  GetIncidentsQueryFunc,
  APIErrorResponse,
  GetIncidentsQueryResponse
>;
export type GetIncidentsQueryFunc = () => GetIncidentsQueryResponse;
export type GetIncidentsQueryParams = {
  sysparm_limit?: number;
  sysparm_offset?: number;
  search?: string;
  opened_by: string; //9ee1b13dc6112271007f9d0efdb69cd0
};

export const sysparm_fields =
  "sys_id,number,short_description,assigned_to,opened_at,urgency,comments,description";

export function useGetIncidentsQuery(
  params: GetIncidentsQueryParams,
  options?: GetIncidentsQueryOptions
) {
  const { sysparm_limit = 10, sysparm_offset = 0, search, opened_by } = params;

  return useQuery<
    GetIncidentsQueryFunc,
    APIErrorResponse,
    GetIncidentsQueryResponse
  >({
    queryKey: ["useGetIncidentsQuery", params],
    queryFn: () =>
      snRequest
        .get(ServiceNowEndpoint.incident.list, {
          params: {
            sysparm_limit,
            sysparm_offset,
            sysparm_query:
              "opened_by=" +
              opened_by + '^ORDERBYDESCnumber' +
              (search ? "^short_descriptionCONTAINS" + search : ""),
            sysparm_fields,
            sysparm_display_value: true,
          },
        })
        .then((res) =>
          res.data.result.map((item) => ({
            ...item,
            urgency: +item.urgency,
          }))
        ),
    ...options,
  });
}

// "parent": "",
// "made_sla": "true",
// "caused_by": "",
// "watch_list": "",
// "upon_reject": "cancel",
// "sys_updated_on": "2016-12-14 02:46:44",
// "child_incidents": "0",
// "hold_reason": "",
// "task_effective_number": "INC0000060",
// "approval_history": "",
// "number": "INC0000060",
// "resolved_by": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user/5137153cc611227c000bbd1bd8cd2007",
//   "value": "5137153cc611227c000bbd1bd8cd2007"
// },
// "sys_updated_by": "employee",
// "opened_by": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user/681ccaf9c0a8016400b98a06818d57c7",
//   "value": "681ccaf9c0a8016400b98a06818d57c7"
// },
// "user_input": "",
// "sys_created_on": "2016-12-12 15:19:57",
// "sys_domain": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user_group/global",
//   "value": "global"
// },
// "state": "7",
// "route_reason": "",
// "sys_created_by": "employee",
// "knowledge": "false",
// "order": "",
// "calendar_stc": "102197",
// "closed_at": "2016-12-14 02:46:44",
// "cmdb_ci": {
//   "link": "https://ven04150.service-now.com/api/now/table/cmdb_ci/109562a3c611227500a7b7ff98cc0dc7",
//   "value": "109562a3c611227500a7b7ff98cc0dc7"
// },
// "delivery_plan": "",
// "contract": "",
// "impact": "2",
// "active": "false",
// "work_notes_list": "",
// "business_service": {
//   "link": "https://ven04150.service-now.com/api/now/table/cmdb_ci_service/27d32778c0a8000b00db970eeaa60f16",
//   "value": "27d32778c0a8000b00db970eeaa60f16"
// },
// "priority": "3",
// "sys_domain_path": "/",
// "rfc": "",
// "time_worked": "",
// "expected_start": "",
// "opened_at": "2016-12-12 15:19:57",
// "business_duration": "1970-01-01 08:00:00",
// "group_list": "",
// "work_end": "",
// "caller_id": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user/681ccaf9c0a8016400b98a06818d57c7",
//   "value": "681ccaf9c0a8016400b98a06818d57c7"
// },
// "reopened_time": "",
// "resolved_at": "2016-12-13 21:43:14",
// "approval_set": "",
// "subcategory": "email",
// "work_notes": "",
// "universal_request": "",
// "short_description": "Unable to connect to email",
// "close_code": "Solved (Permanently)",
// "correlation_display": "",
// "delivery_task": "",
// "work_start": "",
// "assignment_group": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user_group/287ebd7da9fe198100f92cc8d1d2154e",
//   "value": "287ebd7da9fe198100f92cc8d1d2154e"
// },
// "additional_assignee_list": "",
// "business_stc": "28800",
// "description": "I am unable to connect to the email server. It appears to be down.",
// "calendar_duration": "1970-01-02 04:23:17",
// "close_notes": "This incident is resolved.",
// "notify": "1",
// "service_offering": "",
// "sys_class_name": "incident",
// "closed_by": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user/681ccaf9c0a8016400b98a06818d57c7",
//   "value": "681ccaf9c0a8016400b98a06818d57c7"
// },
// "follow_up": "",
// "parent_incident": "",
// "sys_id": "1c741bd70b2322007518478d83673af3",
// "contact_type": "self-service",
// "reopened_by": "",
// "incident_state": "7",
// "urgency": "2",
// "problem_id": "",
// "company": {
//   "link": "https://ven04150.service-now.com/api/now/table/core_company/31bea3d53790200044e0bfc8bcbe5dec",
//   "value": "31bea3d53790200044e0bfc8bcbe5dec"
// },
// "reassignment_count": "2",
// "activity_due": "2016-12-13 01:26:36",
// "assigned_to": {
//   "link": "https://ven04150.service-now.com/api/now/table/sys_user/5137153cc611227c000bbd1bd8cd2007",
//   "value": "5137153cc611227c000bbd1bd8cd2007"
// },
// "severity": "3",
// "comments": "",
// "approval": "not requested",
// "sla_due": "",
// "comments_and_work_notes": "",
// "due_date": "",
// "sys_mod_count": "15",
// "reopen_count": "0",
// "sys_tags": "",
// "escalation": "0",
// "upon_approval": "proceed",
// "correlation_id": "",
// "location": "",
// "category": "inquiry"
