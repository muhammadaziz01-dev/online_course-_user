import "./style.scss";

const index = () => {
  return (
    <footer className=" w-full bg-[#050920] text-white">
      <div className=" containe mx-auto px-2.5 py-[22px]  ">
        <h1 className=" text-center text-[20px]">
            &copy; {new Date().getFullYear()} Online Course Use Panel. All rights reserved.{" "}
        </h1>
      </div>
    </footer>
  );
};

export default index;
