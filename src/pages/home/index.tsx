import { useEffect } from "react";
import {useCoursesStore} from "@stor"
import { Carusel , Card} from "@ui";
import "./style.scss";

const Index = () => {

  const { getDataCourses , dataCourses } = useCoursesStore();

  useEffect(() => {
    getDataCourses();
  }, []);


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
          <div className="grid grid-cols-4 gap-7">
            {
              dataCourses && dataCourses.map((el , index) =>{
                return (
                  <Card key={index} data={el}/>
                )
              })
            }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
