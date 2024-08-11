import { useParams } from "react-router-dom";
import {  useEffect } from "react";
import {  useLessonsStore } from "@stor";
import { Watermark } from "antd";
import { Collapse } from 'antd';
const { Panel } = Collapse;
import {Vido} from "@ui"

function Index() {
  const { courseId } = useParams();
  const { getDataLessons, dataLessons } = useLessonsStore();
  const data = [
    {
      id: 1,
      title: "Bilim va ko'nikmalar",
      discription:
        "Bu sohada mutaxassisi boʻlish uchun kerakli bilimlar beriladi.",
      icons: "bx bx-book-open",
      color: "#2F85DA",
      bg: "#F5FAFF",
    },
    {
      id: 2,
      title: "Loyihalar",
      discription:
        "Kurs davomida siz zamonaviy texnologiyalardan foydalanilgan holda 5 ta loyiha yakunlanadi.",
      icons: "bx bxs-file",
      color: "#0BCF74",
      bg: "#F3FDF8",
    },
    {
      id: 3,
      title: "Sertifikat",
      discription:
        "Har bir bitiruvchiga bilim darajasini ifodalovchi sertifikat taqdim etiladi.",
      icons: "bx bx-certification",
      color: "#EDB200",
      bg: "#FFFCED",
    },
    {
      id: 4,
      title: "Karyerani boshlash",
      discription:
        "Kurs yakunida oʻquvchilar karyera boshlashga tayyor boʻlib chiqadi.",
      icons: "bx bxs-briefcase-alt-2",
      color: "#616970",
      bg: "#F5F7FA",
    },
  ];
  useEffect(() => {
    getDataLessons(courseId);
  }, [courseId]);

  return (
    <Watermark content={["Biz bilan o'rganing ", "O'z kasbingizni toping"]}>
      {/* Kurs nimalr kutishligi  */}
      <section>
        <div className="mx-auto container px-2.5">
          <h1 className="text-3xl font-bold text-[#2F85DA] py-4 ">
            Kursdan nimani kutishingiz mumkin?
          </h1>
          <div className="w-full flex items-center justify-around  gap-5 ">
            {data.map((el) => {
              return (
                <div key={el?.id} className="flex items-start flex-col gap-3">
                  <span
                    className={` flex items-center justify-center p-2 rounded-[50%]  bg-[#090523]`}
                  >
                    <i
                      className={` ${el?.icons} text-white font-medium text-[28px] `}
                    ></i>
                  </span>
                  <h1 className="text-[24px] font-semibold">{el?.title}</h1>
                  <p className=" text-[16px] font-medium">{el?.discription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kurs darsliklari  */}
       <section className="py-16"> 
        <div className=" container mx-auto px-2.5">
          <div>
            <h1 className="text-3xl font-bold text-[#2F85DA] py-4 w-full mb-4 border-b-[2.5px] border-[#2F85DA]">
              Kursdan darsliklari
            </h1>
            <Collapse bordered={false}>
              {dataLessons.map((lesson) => (
                <Panel header={lesson.title} key={lesson._id} className="text-xl font-bold py-2 text-gray-800">
                  <Vido videoUrl={lesson?.video} ></Vido>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
       </section>

      {/* Kursga ro'yhatdan o'tish */}
      <section className="py-10">
        <div className="container mx-auto px-2 5">
          <div className="p-12 relative w-full rounded-[40px] bg-[#F5F7FA] flex items-center justify-between ">
            <div className="flex items-start flex-col gap-3">
              <h1 className=" text-[46px] font-bold">
                <span className="text-[#2F85DA]">Sertifikatli</span> <br /> boʻling!
              </h1>
              <p className="text-[20px] font-medium max-w-[50vw]">
                Kursni muvaffaqiyatli bitirgan oʻquvchilarga 
                platformamiz tomonidan maxsus sertifikat topshiriladi
              </p>
              <button className="px-8 py-3 text-white font-medium rounded-[50px] bg-[#2F85DA] hover:bg-[#246D9C] duration-300">
                Kursga ro'yxatdan o'tish
              </button>

            </div>
            <div>
              <img
                className="w-full h-[300px] object-cover"
                src="https://www.mohirdev.uz/images/certificate-bg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Watermark>
  );
}

export default Index;
