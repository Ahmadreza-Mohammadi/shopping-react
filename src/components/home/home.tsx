import Header from "./header/header";

import Logo from "@/logo/logo";
export default function Home () {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-white text-black relative flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
          <img src="src\assets\plant 1.png" alt="logo" className='w-30 h-30'/>
          <p className="text-9xl font-bold">به شرکت Organic Shop خوش آمدید. </p>
        </div>
      </div>
    </div>
  );
};


