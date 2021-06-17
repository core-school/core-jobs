import { ArrowRightIcon } from "@primer/octicons-react";
import tw from "twin.macro";

export const JobCard = () => {
  return (
    <div tw="py-4 grid grid-flow-col">
      <div>
        <h3 tw="text-3xl font-bold pb-3">Senior React Developer</h3>
        <p tw="text-indigo-800">Core Code School (Madrid Headquarters)</p>
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
