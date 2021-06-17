import { v4 as uuid } from "uuid";

export interface JobOffer {
  id: string;
  role: string;
  company: string;
  location: "remote" | "onsite" | "remote_possible";
  location_place?: string;
}

export const useJobs = (): JobOffer[] => {
  return [
    {
      id: uuid(),
      role: "Junior React Developer",
      company: "CORE Code School",
      location: "remote_possible",
      location_place: "Madrid Headquarters",
    },
    {
      id: uuid(),
      role: "Data Analyst",
      company: "CORE Code School",
      location: "onsite",
      location_place: "Madrid Headquarters",
    },
    {
      id: uuid(),
      role: "Senior React Developer",
      company: "CORE Code School",
      location: "onsite",
      location_place: "Madrid Headquarters",
    },
    {
      id: uuid(),
      role: "Junior Data Scientist Associate",
      company: "CORE Code School",
      location: "remote",
    },
  ];
};
