import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

const index = () => {
  return (
    <header className="  shadow-md w-full sticky z-10  ">
      <nav className="flex items-center justify-between py-2.5 container mx-auto px-2.5">
        <div>
          <a href="#" className="text-xl font-bold">
            <img
              className="w-[100px] h-[60px] object-fill"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/code-4900589-4079217.png?f=webp"
              alt="logo"
            />
          </a>
        </div>
        <div className=" flex items-center justify-center gap-2">
            <p className=" text-[18px] font-medium text-[#091356]">Kirish</p>
          <button className=" rounded-[50%] py-2 px-2.5 border border-[#391356] ">
            <UserOutlined  />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default index;
