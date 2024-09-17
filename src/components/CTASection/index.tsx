import {
  CTA_TITLE_1,
  CTA_TITLE_2,
  CTA_DESCRIPTION,
  CTA_BUTTON,
} from "@/constants/ctaSection";

export function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold max-sm:text-2xl text-3xl text-center">
        {CTA_TITLE_1}
        <span className="text-theme px-1">{CTA_TITLE_2}</span>
      </h2>
      <p className="text-center text-sm md:text-lg w-[450px] md:w-[600px] max-sm:w-full text-slate-500">
        {CTA_DESCRIPTION}
      </p>

      <button
        className="block px-9 py-3 text-sm font-medium text-white transition duration-400 focus:outline-none"
        type="button"
      >
        {CTA_BUTTON}
      </button>
    </div>
  );
}
