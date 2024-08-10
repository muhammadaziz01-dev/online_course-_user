import { Carusel } from "@ui";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

const Index = () => {
  return (
    <>
      <section className="w-full py-5 ">
        <div className=" container mx-auto px-2.5 ">
          <Carusel />
        </div>
      </section>
      <section className="w-full py-7 bg-[#050920] text-white">
        <div className=" container mx-auto px-2.5 ">
          <div>
            <h1 className="text-[33px] font-bold">Kasblar</h1>
            <p className="text-[20px] py-2 w-[65%]">
              Kasbga yo'nalitirilgan praktikumlar yordamida eng tez va samarali
              yo'llar bilan mutaxassislar qatoriga qo'shiling. Har bir praktikum
              soha mutaxassislari tomonidan eng zamoaviy o'quv reja asosida
              tayyorlangan.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap py-4">
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Frontend
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Backend
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              SMM
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Dizayn
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Full Stack
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Mobil
            </div>
            <div className="py-2 px-7 font-medium text-[18px] border border-[#3F9CFB] text-[#3F9CFB] rounded-md hover:text-[#3F9CFB] hover:bg-[#FFF] hover:border-white hover:shadow-lg hover:shadow-white cursor-pointer duration-300 ">
              Sun'iy intlekt
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="container mx-auto px-2.5">
          <div className="grid grid-cols-4 gap-5">
            {/* product card */}

            <div className="relative overflow-hidden h-[450px] group hover:shadow-xl text-[#050920] ">
              <div
                onClick={() => {}}
                className=" border h-[450px] overflow-hidden transition rounded-md hover:shadow-lg"
              >
                <div className="w-full max-h-[260px] h-full mx-auto flex items-center justify-center overflow-hidden ">
                  <img
                    src={
                      "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
                    }
                    alt={"product_name"}
                    className="max-h-[260px] w-full  group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="pt-[8px] px-5">
                  <p className=" flex items-center gap-3 text-[18px] font-medium">
                    <UserOutlined/>
                    480 o'quvchi
                  </p>
                  <h2 className=" text-[22px] font-semibold text-center mb-[5px] cursor-pointer ">
                    Frontend
                  </h2>
                  <p className=" text-center text-[#18px] font-medium">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod, atque?
                  </p>
                  <h1 className="text-[32px] text-[#3F9CFB] font-bold">
                     Bepul
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
