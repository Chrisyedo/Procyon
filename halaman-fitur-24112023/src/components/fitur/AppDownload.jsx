export const AppDownload = () => {
  return (
    <div className="h-fit py-24 px-8 lg:px-56" style={{
        backgroundImage: 'url("src/assets/img/download-bg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
      <div className="flex justify-start">
        <h5 className="text-5xl font-bold lg:w-[50%] leading-[10rem]">Ayo Unduh Aplikasi MyParent Sekarang Juga.</h5>
      </div>

      <div className="flex justify-start text-white">
        <a href="" className="flex items-center gap-4 p-6 bg-[#C689C6] rounded-2xl font-bold text-xl"><span><img src="src/assets/icons/playstore.png" alt="" /></span>Play Store</a>
      </div>
    </div>
  );
};
