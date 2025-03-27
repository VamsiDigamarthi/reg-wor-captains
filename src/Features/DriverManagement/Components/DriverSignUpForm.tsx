import Button from "../../../SharedComponents/Button";
import Input from "../../../SharedComponents/Input";
import { useDriverSignupFormHook } from "../Hooks/DriverSignUpForm.hook";

const DriverSignUpForm = () => {
  const { formData, handleChange, error, handleSubmitCode, isLoading } =
    useDriverSignupFormHook();

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        label="Full Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter full name"
        error={error?.name}
      />
      <Input
        label="Contact Number"
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Enter contact number"
        error={error.mobile}
      />
      <Input
        label="Date of Birth"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="Enter contact number"
        error={error.dob}
      />
      <Input
        label="Email Addres"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email Address"
        error={error.email}
      />
      <Button
        bgColor="#e02e88"
        text="Add Driver"
        textColor="#fff"
        onClick={handleSubmitCode}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DriverSignUpForm;
