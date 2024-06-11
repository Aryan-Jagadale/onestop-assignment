import Google from "../assets/google.svg";

const Map = () => {
  return (
    <div className="my-[110px]">
    <div className="h-[700px] sm:h-[500px] md:h-[600px] relative bg-custom-background bg-cover bg-no-repeat ">
      <div className="absolute top-1/4 md:top-1/2 left-4 right-4 sm:left-8 md:left-16 lg:left-32 transform -translate-y-1/2">
        <Card />
      </div>
    </div>
  </div>
  );
};

const Card = () => {
  return (
    <div className="p-[50px] font-montserrat bg-gray-700 max-w-[470px] rounded-[10px] text-white flex gap-4 flex-col bg-custom-gradient">
      <div>
        <h1 className="font-semibold text-[18px] md:text-[24px] leading-2">OnestopNDT</h1>
      </div>
      <div className="font-normal text-[12px] md:text-[15px]">
        <p>
        
          PAP/R/406 Rabale MIDC Near Dol Electric 
          <br/>
          Company Rabale MIDC, Navi
          Mumbai - 400701.
        </p>
      </div>
      <div className="font-medium text-[12px] md:text-[15px]">
        <p>Landline - 022 4131 0099</p>
      </div>

      <div className="flex gap-2 items-center text-[12px] md:text-[15px]">
        <img src={Google} />
        <p>Google map Link</p>
      </div>
    </div>
  );
};

export default Map;