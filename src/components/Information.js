import Link from "next/link";

function Information({}) {
  return (
    <div className="flex flex-col w-full gap-4 px-5 pt-4 pb-5 font-light rounded-md bg-neutral-900 text-neutral-400">
      <h1 className="text-3xl font-medium sm:text-4xl text-neutral-100">
        Polyio Sound Healn
      </h1>
      <p>
        Polyio (polyrhythmic radio) is a 5D radio station for sound healing. Listen to Polyio to reduce
        stress and anxiety, improve mood, enhance focus and concentration, and promote creativity. Listen
        to Polyio during meditation sessions, on the way to work or during work, or whenever you need to
        relax, focus, or be creative.
      </p>
      <Link
        href={"https://buy.stripe.com/bIYcO739J7HC45GbJj"}
        target="_blank"
        className="self-end px-3 py-1 transition-colors duration-150 ease-in-out border rounded-full w-fit bg-neutral-950 border-neutral-700 hover:text-neutral-200"
      >
        ✨ Tip the DJ
      </Link>
    </div>
  );
}

export default Information;
