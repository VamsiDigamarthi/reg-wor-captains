import { API } from "../../../Core/url";

export const addServices = async ({
  mobile,
  serviceType,
}: {
  mobile: string;
  serviceType: string;
}) => {
  try {
    const res = await API.patch("/auth/services", { mobile, serviceType });

    return {
      success: true,
      message: "Service added successfully",
      user: res.data.user,
    };
  } catch (error) {
    console.error("Error adding service:", error);
    return { success: false, message: "Internal Server Error" };
  }
};
