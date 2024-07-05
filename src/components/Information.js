import Link from "next/link";

function Information({}) {
  return (
    <div className="bg-neutral-900 w-full px-5 pt-4 pb-5 flex flex-col gap-4 rounded-md text-neutral-400 font-light">
      <h1 className="text-3xl sm:text-4xl font-medium text-neutral-100">
        Polyio Sound Healn
      </h1>
      <p>
        Polyio (meaning "many sounds") is a polyrhythmic 5D radio station for sound healing.
        Polyio can be used to reduce stress and anxiety, improve mood, enhance focus and concentration,
        and promote creativity. Listen to Polyio during meditation sessions, on the way to work or during
        work, or whenever you need to relax, focus, or be creative.
      </p>
      <Link
        href={"https://buy.stripe.com/bIYcO739J7HC45GbJj"}
        target="_blank"
        className="w-fit self-end px-3 py-1 rounded-full bg-neutral-950 border border-neutral-700 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
      >
        ✨ Tip the DJ
      </Link>
    </div>
  );
}

export default Information;
