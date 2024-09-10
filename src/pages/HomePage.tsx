import appDownloadImage from "../assets/appDownload.png";
import landingImage from "../assets/landing.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-red-800">
                Tuck into tasty delights
            </h1>
            <span className="text-xl">Just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order with convenience!
                </span>
                <span>
                    Download Gustat App for fast ordering and personalised recommendations
                </span>
                <img src={appDownloadImage} />

            </div>
        </div>
    </div>
  );
};

export default HomePage;