import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/70 blur-[90px]" />
      <div className="pointer-events-none absolute -top-64 right-[-120px] w-[520px] h-[520px] rounded-full bg-accent/80 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-24 w-[220px] h-[220px] rounded-full bg-accent/80 blur-[70px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* name block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-20"
        >
          <div className="flex justify-between text-xs tracking-[0.2em] uppercase mb-4">
            <span>20</span>
            <span>Plano, TX</span>
          </div>

          <h1 className="font-display leading-none text-[56px] sm:text-[72px] md:text-[96px] tracking-tight text-primary">
            JERRY
          </h1>
          <div className="mt-1 text-[11px] tracking-[0.35em] uppercase">
            Designer &amp; Developer
          </div>
          <h2 className="font-display leading-none text-[56px] sm:text-[72px] md:text-[96px] tracking-tight mt-4 text-primary">
            CHEN
          </h2>
        </motion.div>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 max-w-md text-xs sm:text-sm leading-relaxed"
        >
          Aspiring UI designer and Software Engineer
          <br />
          Student at The University of Texas at Dallas
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
