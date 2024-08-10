import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();

  return (
    <header className="  shadow-md w-full fixed top-0  z-[9999999] bg-white  ">
      <nav className="flex items-center justify-between py-2.5 container mx-auto px-2.5">
        <div>
          
            <img
              onClick={()=>{navigate("/")}} 
              className="w-[100px] h-[60px] object-fill cursor-pointer"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/code-4900589-4079217.png?f=webp"
              alt="logo"
            />
        </div>
        <div className=" flex items-center justify-center gap-2">
            <p onClick={()=>{navigate("/auth")}}  className=" text-[18px] font-medium text-[#091356]">Kirish</p>
          <button onClick={()=>{navigate("/auth")}} className=" rounded-[50%] py-2 px-2.5 border border-[#391356]  ">
            <UserOutlined  />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default index;
