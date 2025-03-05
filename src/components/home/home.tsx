import Header from "./header/header";

export default function Home () {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-white text-black relative flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 rounded-2xl shadow-2xl w-[750px] h-[500px] bg-white p-6">
          <img src="src/assets/pngs/fruits.png" alt="logo" className="w-110"/>
          <p className="home-header">به پنل ادمین ارگانیک شاپ خوش آمدید.</p>
        </div>
      </div>
    </div>
  );
};


