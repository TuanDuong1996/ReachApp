// @ts-ignore
import { Page } from "@reach/chrome";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Container } from "../../components/Container";

export interface InvalidAccountProps { }

function InvalidAccount(props: InvalidAccountProps) {
  const history = useHistory();

  return (
    <Page title="My Incidents">
      <Container>
        <div
          className="fixed w-screen h-screen top-0 left-0"
          style={{ zIndex: 9999, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full border border-gray-300 shadow-2xl rounded-md overflow-hidden"
            style={{ width: 320, backgroundColor: '#8D3DEB' }}
          >
            <div className="py-4 px-2 text-center bg-white">
              <div> You do not have a ServiceNow account. Please contact your
                administrator for further details.
              </div>
              <div className="flex justify-center mt-20px">
                <Button
                  style={{ width: 60, borderColor: 'black', borderWidth: 0.5, }}
                  className="bg-white-100 border-1"
                  onClick={() => history.push("/")}
                >
                  <span className="">Ok</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
}

export default InvalidAccount;
