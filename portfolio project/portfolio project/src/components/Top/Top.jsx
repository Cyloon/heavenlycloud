const Top = () => {
  return (
    <section className="my-4 h-[70vh] lg:h-[90vh] w-full relative -z-20">
      <video
        className="w-full h-full object-cover object-right lg:object-contain"
        autoPlay
        muted
        loop
        disableRemotePlayback
        style={{ maxWidth: "1024px" }}
      >
        <source autoPlay src="/daniel_petterssoncarusel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Top;
