import ScrollUpText from "../components/ScrollUpText";

const Page = () => {
  return (
    <section className="py-16">
      <div className="h-[1200px] bg-amber-400"></div>
      <div className=" mx-auto px-4">
        <ScrollUpText className="font-bold text-2xl md:text-3xl text-center text-[#5C5649] my-5">
          SOME NICE WORDS FROM PAST CLIENTS
        </ScrollUpText>
      </div>
      <div className="h-[1200px] bg-amber-600"></div>
    </section>
  );
};

export default Page;
