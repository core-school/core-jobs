import tw from "twin.macro";
import _ from "lodash";
import { PhotoCard } from "../components/PhotoCard";
import { MainQuote } from "../components/MainQuote";
import { JobCard } from "../components/JobCard";

const index_page = () => {
  return (
    <>
      <section tw="bg-indigo-800">
        <div tw="container mx-auto py-36 px-5">
          <h1 tw="text-7xl font-bold uppercase text-indigo-100">CORE Jobs</h1>
          <h2 tw="text-3xl font-bold uppercase text-indigo-400">
            Land in your dream tech job
          </h2>
          <div tw="pt-10">
            {_.range(10).map((i) => (
              <PhotoCard id={i} key={i} />
            ))}
          </div>
        </div>
      </section>
      <section tw="container mx-auto py-36 px-5">
        <MainQuote />
      </section>
      <section tw="container mx-auto pb-36 px-5 divide-y divide-indigo-300">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
      <footer tw="text-center pb-10">
        <img src="/large_logo.png" width="300" tw="inline-block" />
        <p>
          CORE Jobs is edited by <b>CORE Code School</b> in Madrid, Spain
        </p>
      </footer>
    </>
  );
};

export default index_page;
