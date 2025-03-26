import { useLoginScreenHook } from "../Hook/LoginScreen.hook";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../SharedComponents/Input";
import Button from "../../../SharedComponents/Button";

const LoginScreen = () => {
  const {
    handleSubmitLogic,
    handleInputChange,
    userData,
    loading,
    errors,
    error,
  } = useLoginScreenHook();
  return (
    <AuthLayout>
      <div className="w-full  flex flex-col gap-4 shadow-custom rounded-md px-8 py-8">
        <p className="text-md text-primary">Welcome !</p>
        <h2 className="text-2xl text-primary font-[600]">Sign in to</h2>
        <Input
          label="Full Name"
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
          placeholder="Enter your username"
          error={errors?.userName}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          error={errors?.password}
        />
        {error && <p className="text-red-400 font-medium text-sm">{error}</p>}
        <Button
          bgColor="#e02e88"
          textColor="#fff"
          text="Login"
          onClick={handleSubmitLogic}
          isLoading={loading}
        />
      </div>
    </AuthLayout>
  );
};

export default LoginScreen;
