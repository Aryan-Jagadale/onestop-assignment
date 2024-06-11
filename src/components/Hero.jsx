import Form from "./Form";

const Hero = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 items-center gap-16 my-6 bg-white text-[#333] font-[sans-serif] shadow-[0_6px_18px_-6px_rgba(193,195,248)] rounded-[20px] py-[66px] px-[48px]">
        <div className="h-full">
          <h1 className="text-4xl font-extrabold font-montserrat">Got any questions?</h1>
          <p className="text-md font-medium text-gray-400 mt-3 font-montserrat">
            Let’s discuss it over a cup of coffee.
          </p>
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </>
  );
};

export default Hero;