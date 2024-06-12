import { useState } from "react";
import Arrow from "../assets/arrow.svg";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Input = ({ type, value, onChange, placeholder, error }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border-b-[1px] border-slate-400 text-[12px] md:text-sm outline-none"
      />
      {error && <span className="text-red-500 text-[12px] md:text-sm">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const TextArea = ({ value, onChange, message, error }) => {
  return (
    <div className="w-full md:w-1/2">
      <textarea
        rows="4"
        placeholder={message}
        value={value}
        onChange={onChange}
        className="w-full p-3 border-b-[1px] border-slate-400 text-[12px] md:text-sm outline-none"
      ></textarea>
      {error && <span className="text-red-500 text-[12px] md:text-sm">{error}</span>}
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const SubmitButton = ({ text,onClick }) => {
  return (
    <div onClick={onClick} className="w-full md:w-auto cursor-pointer mt-3 px-[30px] rounded-[50px] py-[13px] bg-[#00ADEE] hover:bg-[#80ddff] text-white flex items-center justify-center  text-[12px] md:text-sm">
      <span className="font-medium">{text}</span>
      <img src={Arrow} alt="Arrow" className="ml-2" />
    </div>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Form = () => {
  const [name, setName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleContactNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      if (value.length <= 10) {
        setContactNumber(value);
        setErrors((prevErrors) => ({ ...prevErrors, contactNumber: null }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contactNumber: "Contact number must be exactly 10 digits",
        }));
      }
    }
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length <= 5) {
      errors.name = "Name must be greater than 5 characters";
    }

    if (!orgName) {
      errors.orgName = "Organization name is required";
    } else if (orgName.length <= 5) {
      errors.orgName = "Organization name must be greater than 5 characters";
    }

    if (!emailID) {
      errors.emailID = "Email ID is required";
    } else if (!emailRegex.test(emailID)) {
      errors.emailID = "Invalid email format";
    }

    if (!contactNumber) {
      errors.contactNumber = "Contact number is required";
    } else if (contactNumber.length !== 10) {
      errors.contactNumber = "Contact number must be exactly 10 digits";
    }

    if (!message) {
      errors.message = "Message is required";
    } else if (message.length <= 5) {
      errors.message = "Message must be greater than 5 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setTimeout(() => {
      setErrors({});
      }, 2000);
    } else {
      setErrors({});
      toast.success("Form submitted successfully!", {
        duration: 2500,
      });
      // Clear the form after 5 seconds
      setTimeout(() => {
        setName("");
        setOrgName("");
        setEmailID("");
        setContactNumber("");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="font-montserrat">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4">
        <Input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Name"}
          error={errors.name}
        />
        <Input
          type={"text"}
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder={"Organization Name"}
          error={errors.orgName}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4">
        <Input
          type={"email"}
          value={emailID}
          onChange={(e) => setEmailID(e.target.value)}
          placeholder={"Email ID"}
          error={errors.emailID}
        />
        <Input
          type={"text"}
          value={contactNumber}
          onChange={handleContactNumberChange}
          placeholder={"Contact Number"}
          error={errors.contactNumber}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          message={"Message"}
          error={errors.message}
        />
        <div className="flex items-end justify-end mt-4 md:mt-0 w-full md:w-[270px]">
          <SubmitButton text={"Submit"} onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default Form;
