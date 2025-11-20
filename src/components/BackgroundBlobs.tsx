const BackgroundBlobs = () => {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/70 blur-[90px]" />
      <div className="pointer-events-none absolute -top-64 right-[-120px] w-[520px] h-[520px] rounded-full bg-accent/80 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-24 w-[220px] h-[220px] rounded-full bg-accent/80 blur-[70px]" />
    </>
  );
};

export default BackgroundBlobs;
