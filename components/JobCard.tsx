import React from "react";
import { ArrowRightIcon } from "@primer/octicons-react";
import tw from "twin.macro";
import { JobOffer } from "../lib/useJobs";

export const JobCard: React.FC<JobOffer> = ({
  role,
  company,
  location,
  location_place,
}) => {
  return (
    <div tw="py-4 grid grid-flow-col">
      <div>
        <div tw="text-3xl font-bold pb-3 flex items-center">
          {["remote", "remote_possible"].includes(location) && (
            <div tw="mr-3 w-3 h-3 bg-indigo-500 rounded-full" />
          )}
          <h3 tw="m-0 p-0">{role}</h3>{" "}
        </div>
        <p tw="text-indigo-800">
          {company}{" "}
          {location_place && <span tw="font-medium">({location_place})</span>}
        </p>
      </div>
      <div tw="flex flex-wrap flex-row items-center justify-end text-indigo-700">
        <div>
          <img src="/coreboard_icon.png" width="40" height="40" tw="block" />
        </div>

        <div tw="cursor-pointer transition ml-3 px-2 text-indigo-700 hover:bg-indigo-700 hover:text-white rounded-full flex items-center">
          <span tw="pr-2">Apply now</span>
          <ArrowRightIcon size={30} />
        </div>
      </div>
    </div>
  );
};
