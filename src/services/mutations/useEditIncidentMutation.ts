import { useMutation, UseMutationOptions } from "react-query";
import { snRequest } from "../../helpers/request";
import { ServiceNowEndpoint } from "../endpoint";
import { sysparm_fields } from "../queries/useGetIncidentDetailQuery";
import { APIErrorResponse, IncidentEntity } from "../types.interface";

export type LoginMutationOptions = UseMutationOptions<
  EditIncidentMutationResponse,
  APIErrorResponse,
  EditIncidentMutationInput
>;

export type EditIncidentMutationResponse = IncidentEntity;
export type EditIncidentMutationInput = {
  comments?: string;
};

export function useEditIncidentMutation(
  id: string,
  options?: LoginMutationOptions
) {
  return useMutation<
    EditIncidentMutationResponse,
    APIErrorResponse,
    EditIncidentMutationInput
  >(
    (values) =>
      snRequest
        .put(ServiceNowEndpoint.incident.detail(id), values, {
          params: {
            sysparm_fields,
            sysparm_display_value: true,
          },
        })
        .then((res) => res.data.result),
    options
  );
}
