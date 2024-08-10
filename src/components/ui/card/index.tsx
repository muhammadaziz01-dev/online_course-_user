import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Index = ({ data }: { data: any }) => {
    const navigate = useNavigate();
  return (
    <div onClick={() => {navigate(`/${data?._id}`)}} className="relative cursor-pointer overflow-hidden h-[480px] group hover:shadow-xl text-[#050920] ">
      <div
    
        className=" border h-[480px] overflow-hidden transition rounded-md hover:shadow-lg"
      >
        <div className="w-full max-h-[260px] h-full mx-auto flex items-center justify-center overflow-hidden ">
          <img
            src={ data ? data?.photo :
              "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
            }
            alt={"product_name"}
            className="max-h-[260px] w-full h-full  group-hover:scale-110 duration-300 object-fill"
          />
        </div>
        <div className="pt-[8px] px-5">
          <p className=" flex items-center gap-3 text-[18px] font-medium">
            <UserOutlined />
            {
                data?.lessonsCount ? data?.lessonsCount + 480  + " o'quvchi" : "480 o'quvchi"
            }
          </p>
          <h2 className=" text-[22px] font-semibold text-center mb-[5px] cursor-pointer ">
            {data?.title}
          </h2>
          <p className=" text-center text-[#18px] font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            atque?
          </p>
          <p className="text-center text-[#18px] font-medium">
            {"Dars soni : " + data?.lessonsCount}
          </p>
          <h1 className="text-[32px] text-[#3F9CFB] font-bold">Bepul</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
