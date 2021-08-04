// @ts-ignore
import { Page } from "@reach/chrome";

import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetIncidentDetailQuery } from "../../services/queries/useGetIncidentDetailQuery";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import TextArea from "../../components/TextArea";
import { useState } from "react";
import { useRef } from "react";
import SaveSVG from "../../icons/SaveSVG";
import { useEditIncidentMutation } from "../../services/mutations/useEditIncidentMutation";
import CloseSVG from "../../icons/CloseSVG";
import { AppRoute } from "../../helpers/routes";
import { useRootPath } from "../../hooks/useRootPath";
import Button from "../../components/Button";

export const IncidentDetail: FC = () => {
  const [isEditMode, setEditMode] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [comment, setComment] = useState("");

  const [text, setText] = useState("");

  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetIncidentDetailQuery(id, {
    onSuccess: (res) => setComment(res.comments),
  });

  const { mutate: editIncident, isLoading: editCommentLoading } =
    useEditIncidentMutation(id, {
      onSettled: () => {
        setEditMode(false);
        setText("");
      },
      onSuccess: (res) => setComment(res.comments),
    });

  function handleSaveComment() {
    if (text.trim().length) {
      editIncident({
        comments: text.trim(),
      });
    }
  }

  const { path } = useRootPath();
  const history = useHistory();

  return (
    <Page title="My Incident">
      <Container containerClassName="p-0" style={{ backgroundColor: "white" }}>
        <CloseSVG
          width={16}
          height={16}
          className="fixed cursor-pointer text-white"
          style={{ top: "16px", right: "16px", zIndex: 9999 }}
          onClick={() => history.push(path + AppRoute.list)}
        />
        {isLoading && (
          <div className="my-20px">
            <Loading />
          </div>
        )}
        {data && (
          <div>
            <div className="px-4 pt-4 pb-6 text-black bg-gray-100">Details</div>
            <div className="bg-white p-4">
              <div>
                <span className="text-gray-500 text-xs">Short Description</span>
                <div className="border-b border-gray-500 mb-10px mt-15px pb-2">
                  <span className="text-black">{data.short_description}</span>
                </div>
              </div>

              <div className="mt-8">
                <span className="text-gray-500 text-xs">Urgency</span>
                <div className="border-b border-gray-500 mb-10px mt-15px pb-2">
                  <span className="text-black">{data.urgency}</span>
                </div>
              </div>

              <div className="mt-8">
                <span className="text-gray-500 text-xs">Description</span>
                <div
                  className="border-b border-gray-500 mb-10px mt-15px pb-2"
                  style={{ minHeight: "32px" }}
                >
                  <div
                    className="text-black whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>

              {isEditMode ? (
                <div className="mt-8">
                  <span className="text-gray-500 text-xs">Comment</span>
                  <div className="mt-10px">
                    <TextArea
                      ref={textAreaRef}
                      placeholder="Comment"
                      onChange={(val) => setText(val.target.value)}
                      value={text}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-8">
                  <span className="text-gray-500 text-xs">Comment</span>
                  <div
                    className="border-b border-gray-500 mb-10px mt-15px pb-2"
                    style={{ minHeight: "32px" }}
                  >
                    <div
                      className="text-black whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: comment }}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                {isEditMode ? (
                  <Button
                    className="border-2 border-gray-900 w-24 h-40px mt-20px flex justify-center items-center self-end rounded-5px mr-10px cursor-pointer space-x-1"
                    isLoading={editCommentLoading}
                    disabled={editCommentLoading}
                    onClick={handleSaveComment}
                  >
                    <span className="self-center text-15px">Save</span>
                    <SaveSVG />
                  </Button>
                ) : (
                  <Button
                    className="border-2 border-gray-900 w-150px h-40px mt-20px items-center justify-center self-end rounded-5px mr-10px"
                    onClick={() => {
                      setEditMode(true);
                      textAreaRef.current?.focus();
                    }}
                  >
                    <span className="self-center text-15px">Add a comment</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </Page>
  );
};
