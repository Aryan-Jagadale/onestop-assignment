import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="py-[40px]">
      <img src={Logo} alt="oneStop" className="h-[46px] md:h-[66px] w-[147px]" />
    </div>
  );
};

export default Navbar;
