import tw from "twin.macro";
import { useJobs } from "../lib/useJobs";
import { JobCard } from "./JobCard";
import { ChevronDownIcon } from "@primer/octicons-react";

export const JobOffers = () => {
  const jobs = useJobs();
  return (
    <>
      {jobs.map((job) => (
        <JobCard {...job} key={job.id} />
      ))}
      <div tw="text-center pt-10">
        <p tw="p-0 m-0">See more</p>
        <div tw="animate-bounce">
          <ChevronDownIcon size={16} />
        </div>
      </div>
    </>
  );
};
