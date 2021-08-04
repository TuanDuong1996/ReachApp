import { useMutation, UseMutationOptions } from "react-query";
import { snRequest } from "../../helpers/request";
import { ServiceNowEndpoint } from "../endpoint";
import { sysparm_fields } from "../queries/useGetIncidentsQuery";
import {
  APIErrorResponse,
  IncidentEntity,
  UrgencyEnum,
} from "../types.interface";

export type CreateIncidentMutationOptions = UseMutationOptions<
  CreateIncidentMutationResponse,
  APIErrorResponse,
  CreateIncidentMutationInput
>;

export type CreateIncidentMutationResponse = IncidentEntity;

export type CreateIncidentMutationInput = {
  urgency: UrgencyEnum;
  comments?: string;
  description: string;
  short_description: string;
  opened_by: string;
};

export function useCreateIncidentMutation(
  options?: CreateIncidentMutationOptions
) {
  return useMutation<
    CreateIncidentMutationResponse,
    APIErrorResponse,
    CreateIncidentMutationInput
  >(
    (values) =>
      snRequest
        .post(ServiceNowEndpoint.incident.list, values, {
          params: {
            sysparm_fields: sysparm_fields,
          },
        })
        .then((res) => res.data.result),
    options
  );
}
