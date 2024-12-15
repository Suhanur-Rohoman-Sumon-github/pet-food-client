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
}





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