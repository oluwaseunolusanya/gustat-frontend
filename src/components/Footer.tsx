const Footer = () => {
  return (
    <div className="bg-red-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                Gustat
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Copyright © 2024 Gustat</span>
            </span>
        </div>
    </div>
  );
};

export default Footer;