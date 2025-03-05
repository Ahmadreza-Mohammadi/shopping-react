import plantImage from "../../assets/pngs/plant.png";

function Footer() {
  return (
    <footer className="bg-green-800 text-white shadow-lg mt-10">
      <div className="h-24 flex justify-around items-center">
        <div className="flex gap-2 items-center">
          <img className="w-10 h-10" src={plantImage} alt="Plant Logo" />
          <span className="text-xl font-bold">پنل ادمین ارگانیک شاپ</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg">مدیریت و نظارت بر محصولات ارگانیک شاپ</span>
          <span className="text-sm">© ۲۰۲۵ پنل ادمین ارگانیک شاپ. تمامی حقوق محفوظ است.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
