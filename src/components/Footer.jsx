import FooterLogo from "../assets/footerlogo.svg";
import GooglePlay from "../assets/googlePlay.svg";
import AppStore from "../assets/appStore.svg";

const Footer = () => {
  return (
    <div className="bg-[#103977] px-[30px] md:px-[128px] pt-[50px]">
      <div className="flex justify-center md:justify-end items-center mt-10 pb-[30px]">
        <img src={FooterLogo} alt="oneStop" className="h-16 w-36" />
      </div>
      <div className="mt-4">
        <hr className="border-t border-white" />
      </div>
      <div className="font-montserrat text-white mt-4 text-left text-sm">
        <br />
        <p className="font-medium mb-4">What is One Stop NDT?</p>
        <p className="leading-6 font-light text-xs">
          A informative dais for NDT enthusiasts, One Stop NDT has everything
          related to Non-Destructive Testing in one place. Backed by
          professionals with unprecedented experience & presence of more than 20
          years in NDT Market, One Stop NDT gives you a chance to freely
          communicate and interact with experts. NDT equipment manufacturers,
          service providers, plant operators, distributors, NDT professionals
          can check out the new developments, products and services available in
          the global market and have direct access for interactions with
          like-minded professionals. One Stop NDT users have access to NDT
          forums, jobs, blogs, events, courses, webinars and much more!
        </p>
        <br />
      </div>
      <div className="mt-4">
        <hr className="border-t border-white" />
      </div>
      <div className="mt-4">
        <div className="text-white flex items-center justify-center md:justify-between">
          <div className="pb-2 font-normal text-[14px] leading-6 hidden md:block">Support</div>
          <div className="flex items-center md:flex-row-reverse flex-col">
            <div className="pb-2">
              <img src={GooglePlay} className="h=[45px]" />
            </div>
            <div>
              <img src={AppStore} className="h=[45px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
