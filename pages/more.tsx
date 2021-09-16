import tw from "twin.macro";
import _ from "lodash";
import { PhotoCard } from "../components/PhotoCard";
import { MainQuote } from "../components/MainQuote";
import { JobOffers } from "../components/JobOffers";
import { MoreLetters } from "../components/MoreLetters";

const index_page = () => {
  return (
    <section tw="bg-gradient-to-tr from-indigo-900 to-indigo-500">
      <div tw="container mx-auto py-36 px-5">
        <MoreLetters />
      </div>
    </section>
  );
};

export default index_page;
