import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


export default function BarItem({icons}){
    
}

/*
export default function BarItem({ icon, isSelected }) {
if(icon == 1){
  if (!isSelected) {
    return (
      <div className="w-auto h-auto bg-transparent rounded-full opacity-100 mb-2 mt-2">
        <MdOutlineAccountCircle fill="white" size={30} />
      </div>
    );
  } else {
    return (
      <div className="w-auto h-auto bg-white rounded-full opacity-100 mb-2 mt-2 text-black">
        <MdOutlineAccountCircle style={{color:"black" , backgroundColor:"white"}} size={30} />
      </div>
    );
  }
}else if(icon == 2){
    if (!isSelected) {
        return (
          <div className="w-auto h-auto bg-transparent rounded-full opacity-100 mb-2 mt-2">
            <GrCertificate fill="white" size={30} />
          </div>
        );
      } else {
        return (
          <div className="w-auto h-auto bg-white rounded-full opacity-100 mb-2 mt-2 text-black">
            <GrCertificate style={{color:"black"}} size={30} />
          </div>
        );
      }
}
else if(icon == 3){
    if (!isSelected) {
        return (
          <div className="w-auto h-auto bg-transparent rounded-full opacity-100 mb-2 mt-2">
            <FaCode fill="white" size={30} />
          </div>
        );
      } else {
        return (
          <div className="w-auto h-auto bg-white rounded-full opacity-100 mb-2 mt-2 text-black">
            <FaCode style={{color:"black"}} size={30} />
          </div>
        );
      }
}
else if(icon == 4){
    if (!isSelected) {
        return (
          <div className="w-auto h-auto bg-transparent rounded-full opacity-100 mb-2 mt-2">
            <IoMail fill="white" size={30} />
          </div>
        );
      } else {
        return (
          <div className="w-auto h-auto bg-white rounded-full opacity-100 mb-2 mt-2 text-black">
            <IoMail style={{color:"black"}} size={30} />
          </div>
        );
      }
}
}
*/
