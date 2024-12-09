import { CgMail } from "react-icons/cg";
import { LiaPagerSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FaHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import Image from "next/image";

const TopNav = () => {
  return (
    <div className="  pb-2 mt-1  flex justify-between items-center container mx-auto">
      <div className="w-fit flex items-center gap-1 ">
        <LiaPagerSolid className="text-2xl" />{" "}
        <span className="text-sm">
          Wants to Explore Upcoming Deals on Weekends?
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li className="flex items-center gap-1">
            <CgMail className="text-2xl" /> <span>support@gmail.com</span>
          </li>
          <li className="bg-slate-200 w-[2px] h-4"></li>
          <li>
            <Select defaultValue="USD">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="USD">
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-4 h-[11px]  "
                        src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                        alt=""
                        width={460}
                        height={460}
                      />{" "}
                      <span>USD</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="EUR">
                    {" "}
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-4 h-[11px]  "
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
                        alt=""
                        width={460}
                        height={460}
                      />{" "}
                      <span>EUR</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="GBP">
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-4 h-[11px]  "
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
                        alt=""
                        width={460}
                        height={460}
                      />{" "}
                      <span>GBP</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="AUD">
                    {" "}
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-4 h-[11px]  "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGoZ7B2JY7aBv5f_c_-tiXyise-AirdopfsoGDOdyIGJN3oPTNEIstTW7wqDX6FM93p8&usqp=CAU"
                        alt=""
                        width={460}
                        height={460}
                      />{" "}
                      <span>AUD</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li className="bg-slate-200 w-[2px] h-4"></li>
          <li>
            <Select defaultValue="English">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li className="bg-slate-200 w-[2px] h-4"></li>
          <li className="flex items-center gap-2">
            <FaHeart /> Wishlist
          </li>
          <li className="bg-slate-200 w-[2px] h-4"></li>
          <li className="flex items-center gap-2">
            <GoGitCompare /> Compare
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
