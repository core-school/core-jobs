import tw, { styled } from "twin.macro";

const Remark = tw.span`bg-indigo-200 text-indigo-900 p-1 rounded m-1`;

export const MainQuote = () => {
  return (
    <div tw="text-center px-36">
      <h3 tw="text-6xl font-bold">"Love Code" is the way we roll</h3>
      <p tw="text-3xl my-10 text-gray-500 leading-loose">
        We want our <Remark>students</Remark> to raise their career inside a
        company that share the same CORE values of Delivering code quality,
        <Remark>Transparency</Remark>, Honesty and Tolerance.
      </p>
      <div tw="text-xl text-center">
        <img
          src="https://unavatar.vercel.app/github/boyander"
          width="40"
          tw="rounded-full inline-block mb-5 ring-4 ring-indigo-200"
        />
        <p tw="text-gray-800">Marc Pomar</p>
        <p tw="text-indigo-400">CORE Code School Founder</p>
      </div>
    </div>
  );
};
