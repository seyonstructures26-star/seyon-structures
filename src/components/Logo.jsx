export default function Logo({ variant = "nav" }) {
  const wrap = {
    nav: "bg-white rounded-sm px-2 py-1 sm:px-2.5 sm:py-1.5 inline-flex items-center shrink-0",
    footer: "bg-white rounded-sm px-3 py-2 inline-flex items-center",
  };

  const sizes = {
    nav: "h-7 sm:h-9 md:h-10 lg:h-11 w-auto max-w-[min(58vw,260px)] sm:max-w-[300px] lg:max-w-[320px]",
    footer: "h-10 sm:h-12 w-auto max-w-[340px]",
  };

  return (
    <div className={wrap[variant]}>
      <img
        src="/logo-clean.png"
        alt="Seyon Structures"
        className={`${sizes[variant]} object-contain object-left block`}
        draggable={false}
      />
    </div>
  );
}
