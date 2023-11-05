import "./Profile.css";
import { FiMail } from "react-icons/fi";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IconContext } from "react-icons";

type Props = {
  age: number;
};

const Profile = (props: Props) => {
  return (
    <>
      <div className="md-10 grid place-items-center w-5/6 h-11/12 text-slate-100 p-10 shadow-[50px_50px_78px_0_rgb(3,10,18),-50px_-50px_78px_0_rgb(11,38,74)] card">
        <div className="z-50 text-lg">
          <img src="./icon.svg" className="object-fill rounded-lg"></img>
          <div className="mt-4 text-center text-2xl">Tatsuya Hasunuma</div>
          <div className="border-t-2 mt-4"></div>
          <div className="mt-3 grid grid-rows-7 grid-cols-3">
            <div className="row-span-2 place-self-center mt-5 mb-5">
              <div className="p-4 rounded-xl shadow-[13px_13px_26px_0_rgb(3,10,18),-13px_-13px_26px_0_rgb(11,38,74)]">
                <FiMail />
              </div>
            </div>
            <div className="col-span-2 mt-5">
              <span className="text-[#00B7FF]">E</span>mail
            </div>
            <div className="col-span-2 text-base mb-5">
              thasu.work@gmail.com
            </div>
            <div className="row-span-2 place-self-center mb-5">
              <div className="p-4 rounded-xl shadow-[13px_13px_26px_0_rgb(3,10,18),-13px_-13px_40px_0_rgb(11,38,74)]">
                <FaLocationArrow />
              </div>
            </div>
            <div className="col-span-2">
              <span className="text-[#8074FF]">L</span>ocation
            </div>
            <div className="col-span-2 text-base mb-5">Gifu, Japan</div>
            <div className="row-span-2 place-self-center mb-5">
              <div className="p-4 rounded-xl shadow-[13px_13px_26px_0_rgb(3,10,18),-13px_-13px_40px_0_rgb(11,38,74)]">
                <FaBirthdayCake />
              </div>
            </div>
            <div className="col-span-2">
              <span className="text-[#FF30FF]">B</span>irthdaty
            </div>
            <div className="col-span-2 text-base mb-5">
              January 1 , 2001 ({props.age})
            </div>
            <div className="col-span-3 place-self-center mt-5  w-full">
              <div className="flex justify-center items-center p-4 rounded-xl shadow-[13px_13px_26px_0_rgb(3,10,18),-13px_-13px_26px_0_rgb(11,38,74)] hover:shadow-[inset_13px_13px_50px_0_rgb(3,10,18),inset_-13px_-13px_26px_0_rgb(11,38,74)] cursor-pointer transition duration-300 ease-in-out">
                <IconContext.Provider value={{ size: "3rem" }}>
                  <FaGithub />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
