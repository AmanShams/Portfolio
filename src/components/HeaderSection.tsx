export default function HeaderSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
      <div className="w-full flex flex-row items-center justify-start gap-12">
        <div className="flex flex-col gap-2">
          <div className="space-y-2 w-full">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold tracking-tighter">
              <span className="italic text-2xl sm:text-5xl md:text-3xl font-light tracking-tighter">
                Hello I&apos;m{" "}
              </span>
              Amanullah Shams
            </h1>
          </div>

          <p className="text-base sm:text-xl tracking-tight text-muted-foreground leading-relaxed">
            Self-taught developer and student with a passion for technology.{" "}
            <b>
              <u className="italic">Experienced</u>{" "}
            </b>
            <br />
            in full-stack development & building modern web interfaces
          </p>
        </div>
      </div>
    </section>
  );
}
