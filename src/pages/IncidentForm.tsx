import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import SaveSVG from "../icons/SaveSVG";
import { IncidentEntity } from "../services/types.interface";
import { FormValue } from "./NewIncident";
import UrgencyDropdown from "./NewIncident/UrgencyDropdown";

export interface IncidentFormProps {
  onSubmit: (data: FormValue) => void;
  initial?: IncidentEntity;
  isLoading?: boolean;
}

function IncidentForm({
  onSubmit: handleSubmit,
  initial,
  isLoading,
}: IncidentFormProps) {
  const {
    register,
    handleSubmit: onSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValue>({
    reValidateMode: "onSubmit",
    defaultValues: {
      comment: initial?.comments,
      description: initial?.description,
      short_description: initial?.short_description,
      urgency: initial?.urgency,
    },
  });

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div>
        <span className="text-gray-500 text-xs">Short Description</span>
        <div className="mt-10px">
          <Input
            placeholder="Short description"
            defaultValue={initial?.short_description}
            {...register("short_description", { required: true })}
          />
        </div>
        {errors.short_description && (
          <span className="text-sm text-red-500">
            Short description is required
          </span>
        )}
      </div>

      <div className="mt-20px">
        <span className="text-gray-500 text-xs">Urgency</span>
        <div className="mt-10px">
          <UrgencyDropdown onChange={(value) => setValue("urgency", value)} />
          <input hidden {...register("urgency", { required: true })} />
        </div>
        {errors.urgency && (
          <span className="text-sm text-red-500">Urgency is required</span>
        )}
      </div>

      <div className="mt-20px">
        <span className="text-gray-500 text-xs">Description</span>
        <div className="mt-10px">
          <TextArea
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </div>
        {errors.short_description && (
          <span className="text-sm text-red-500">Description is required</span>
        )}
      </div>

      <div className="mt-20px">
        <span className="text-gray-500 text-xs">Comment</span>
        <div className="mt-10px">
          <TextArea placeholder="Comment" {...register("comment")} />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          className="border-2 border-gray-900 w-24 h-40px mt-20px flex justify-center items-center self-end rounded-5px mr-10px cursor-pointer space-x-1"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
        >
          <span className="self-center text-15px">Save</span>
          <SaveSVG />
        </Button>
      </div>
    </form>
  );
}

export default IncidentForm;
