import { ReactNode } from "react";

export type RcDetails = {
  rcNumber: string | null;
  makerModel: string | null;
};

export type DriverData = {
  name: string;
  mobile: string;
  profilePic: string | null;
  email: string | null;
  services: RcDetails[];
  createAt: string;
};

export type ColumnNameType<T> = {
  name: string;
  width: string;
  render?: (row: T) => ReactNode;
};
