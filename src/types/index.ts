import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IUser {
 
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  profilePicture: string;
  avatar:string
  created_at? :Date
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export type shop ={
  id:string
  profile_picture: string
  name:string
  location:string
  status:string
  created_at:Date
  cover_photo:string
  follower:string[]
}


export type TNewProduct = {
  replaceCartWithNewItem?: boolean;
  newProductId?: string | null;
  clearCartOnPurchase?:boolean
};


export type item = {
    id: string;
    images:string[]
    name:string
    price:number
    description :string
}


export type AdminPayload = {
  name: string;
  email: string;
  password: string;
  location: string;
  designation: string;
  contactNo: string;
};


export type VendorPayload = {
  name: string;
  email: string;
  password: string;
  businessName: string;
  contactNo: string;
};

export type OrderData ={
  id?:string
  userId: string;
  products: { productId: string; quantity: number }[];
  totalAmount: number;
  shippingAddress: string;
  contactNumber: string;
  created_At?: Date
  paymentStatus?:string
  orderStatus?:string
}

export type ReviewData = {
  id: string | undefined;
  userName: string | undefined;
  userProfilePicture: string | undefined;
  comment: string;
  ratings: number;
  timestamp: number;
};

export type Category = {
  id: string;
  name: string;
  isDeleted: boolean;
  created_at: string; 
  updated_at: string;
};
