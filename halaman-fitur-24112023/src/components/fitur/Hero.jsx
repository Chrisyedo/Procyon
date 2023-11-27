export const Hero = () => {
  return (
    <div
      className="h-fit lg:px-24"
      style={{
        backgroundImage: 'url("src/assets/img/hero-bg.png")',
        backgroundPosition: "-0px -0rem",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* hero text */}
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold mb-6">Catatan Aktivitas Bayi</h2>
        <p className="leading-loose text-2xl">
          “Catatan yang mencakup berbagai aspek perkembangan, kesehatan, dan
          kehidupan sehari-hari bayi. Ini bisa menjadi alat yang berguna bagi
          orang tua untuk memahami dan melacak perkembangan anak mereka.”
        </p>
      </div>

      {/* foto bayi */}
      <div className="">
        <div className="flex justify-center">
          <div className="p-6 bg-white rounded-full">
            <img src="src/assets/img/baby.png" alt="" />
          </div>
        </div>

        <div className="grid gap-2 justify-center text-center items-center -translate-y-6">
          <h3 className="font-bold text-2xl">Syakila</h3>
          <p className="px-4 py-2 bg-black/30 text-white rounded-full z-1">
            2 Months Old
          </p>
        </div>
      </div>

      {/* height and weight */}
      <div className="flex max-lg:flex-wrap max-lg:justify-center justify-between items-center lg:translate-y-[-5rem]">
        <div className="grid gap-y-12 w-[20rem] p-8 bg-white rounded-[20px] shadow-[4px_8px_0px_2px_gray]">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold">Weight</h3>
            <img src="src/assets/icons/clock.png" alt="" />
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#E8A0BF]">5.5Kg</h3>
          </div>
        </div>

        <div className="grid gap-y-12 w-[20rem] bg-white p-8 rounded-[20px] shadow-[4px_8px_0px_2px_gray]">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold">Height</h3>
            <img src="src/assets/icons/height.png" alt="" />
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#E8A0BF]">58.5cm</h3>
          </div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-center mb-24">
        <div className="p-8 px-20 lg:bg-white rounded-[20px] lg:shadow-[4px_8px_0px_2px_gray] max-lg:mt-12">
          <div className="flex items-center mb-6">
            <img src="src/assets/icons/note.png" alt="" />
            <h4 className="text-4xl font-bold ms-8">Progres Full</h4>
          </div>

          <div className="flex justify-start rounded-[20px] w-full bg-[#C4C4C4]">
            <div className="bg-[#FCC5C0] w-[50%] text-center p-4 rounded-[20px]">
              <span className="text-2xl font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* keterangan */}
      <div className="text-center pb-8">
        <p className="text-3xl">“Berat Badan Stabil dan Tinggi badan cukup”</p>
      </div>
    </div>
  );
};
