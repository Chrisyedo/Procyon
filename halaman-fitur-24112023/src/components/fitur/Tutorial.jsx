export const Tutorial = () => {
  return (
    <div
      className="h-fit py-24 lg:px-48"
      style={{
        backgroundImage: 'url("src/assets/img/video-bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center mb-20">
        <h4 className="text-5xl font-bold">Video Education</h4>
      </div>

      <div className="flex max-lg:flex-wrap justify-center items-center gap-8 p-4 py-24">
        <div className="grid">
            <h4 className="text-center text-6xl font-bold mb-8">Testimonials</h4>
            <p className="text-justify leading-loose">Lorem ipsum dolor sit amet consectetur. Ullamcorper nunc tortor sit risus integer elit. Sodales arcu vel neque nibh mattis non est. Tellus sollicitudin pharetra fringilla justo orci.</p>
        </div>

        <div className="flex justify-end">
            <iframe
                title="YouTube Video"
                height="315"
                src="https://www.youtube.com/embed/3i8mv4aX3ZA"
                frameBorder="0"
                allowFullScreen
                className="w-screen md:w-[560px]"
            ></iframe>
        </div>
      </div>
    </div>
  );
};
