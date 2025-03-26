type StatusCard = "pending" | "initial" | "rejected" | "verified";

export interface WorUser {
  _id: string;
  name: string;
  mobile: string;
  role: string;
  onDuty: boolean;
  holdingCaptain: boolean;
  profilePic: string | null;
  license: string | null;
  licenseBack: string | null;
  pan: string | null;
  panBack: string | null;
  adhar: string | null;
  adharBack: string | null;
  userVerified: boolean;
  emergencyContact: {
    name: string | null;
    mobile: string | null;
    option: string[];
    _id: string;
  }[];
  docsNumber: {
    newAadharNumber: string | null;
    newLicenNumber: string | null;
    dob: string | null;
  };
  adminDocsVerified: {
    adminAadharVerified: string;
    adminLicenVerified: string;
  };
  captainLocation: {
    type: string;
    coordinates: [number, number];
  };
  deviceId: string;
  ownRefCode: string;
  referalCode: string;
  accountDeleteStatus: string;
  deletionReason: string | null;
  accountDeleteRequestDate: string | null;
  mpin: string | null;

  aadharCarVerificaation: boolean;

  email: string;
  signUpDateAndTime: string;
  scheduleOrderCount: number;
  walletBalance: number;
  languages: string[];
  donationActive: boolean;
  activeService: string | null;
  services: {
    serviceType: string | null;
    rcVerificationStatuc?: string | null;
    rcNumber?: string | null;
    rcFrontImage?: string | null;
    rcBackImage?: string | null;

    fitUpTo?: string | null;
    registrationDate?: string | null;
    ownerName?: string | null;
    fatherName?: string | null;
    presentAddress?: string | null;
    permanentAddress?: string | null;
    makerDescription?: string | null;
    makerModel: string | null;
    fuelType?: string | null;
    color?: string | null;
    registeredAt?: string | null;
    _id: string;

    // vehicle image
    vehicleFrontImage: string | null;
    vehicleBackImage: string | null;
    vehicleRightImage: string | null;
    vehicleLeftImage: string | null;
    vehicleNumberPlate: string | null;
    vehicleHelmetImage: string | null;
    vehicleImageVerification: StatusCard | null;
  }[];
  fbtoken: string;
  averageRating: number;
  aadharCardDetails: {
    fullName: string | null;
    dob: string | null;
    gender: string | null;
    aadhaarNumber: string | null;
    careOf: string | null;
    address: {
      country: string | null;
      dist: string | null;
      state: string | null;
      mandal: string | null;
      village: string | null;
      house: string | null;
    };
    aadharImage: string | null;
  } | null;

  panCardDetails: {
    fullName: string | null;
    panNumber: string | null;
  };

  licenseCardDetails: {
    licenseNumber: string | null;
    state: string | null;
    name: string | null;
    permanentAddress: string | null;
    temporaryAddress: string | null;
    dob: string | null;
    gender: string | null;
    profileImage: string | null;
  };

  createdAt: string;
}
