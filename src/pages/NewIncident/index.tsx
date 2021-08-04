// @ts-ignore
import { Page } from "@reach/chrome";

import React, { FC } from "react";
import { Container } from "../../components/Container";
import { UrgencyEnum } from "../../services/types.interface";
import { useCreateIncidentMutation } from "../../services/mutations/useCreateIncidentMutation";
import { useCurrentUser } from "@livetiles/reach-components-react";
import { useHistory } from "react-router-dom";
import { AppRoute } from "../../helpers/routes";
import IncidentForm from "../IncidentForm";
import { useRootPath } from "../../hooks/useRootPath";
import CloseSVG from "../../icons/CloseSVG";

export interface FormValue {
  short_description: string;
  urgency: UrgencyEnum;
  description: string;
  comment?: string;
}

export const CreateIncident: FC = () => {
  const user = useCurrentUser();

  const history = useHistory();

  const { path } = useRootPath();

  const { mutate: createIncident, isLoading } = useCreateIncidentMutation({
    onSuccess: () => history.push(path + AppRoute.list),
  });

  const handleSubmit = (data: FormValue) => {
    createIncident({
      description: data.description,
      short_description: data.short_description,
      urgency: data.urgency,
      comments: data.comment,
      opened_by: user.id,
    });
  };

  return (
    <Page title="My Incident">
      <Container>
        <CloseSVG
          width={16}
          height={16}
          className="fixed cursor-pointer text-white"
          style={{ top: "16px", right: "16px", zIndex: 9999 }}
          onClick={() => history.push(path + AppRoute.list)}
        />
        <IncidentForm onSubmit={handleSubmit} isLoading={isLoading} />
      </Container>
    </Page>
  );
};
