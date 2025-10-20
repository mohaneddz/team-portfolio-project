import Image from "next/image";
const heroSvg = '/svgs/hero_member.svg';

type Props = {
  image?: string | null;
  name?: string | null;
  title?: string | null;
};

export default function MemberHero({ image, name, title }: Props) {
  return (
  <section className="top-0 h-screen min-h-screen center relative overflow-hidden -mt-14" id="home">
      <Image
        src={heroSvg}
        alt=""
        width={1920}
        height={1080}
        className="object-cover absolute -top-72 sm:-top-48 left-0 h-screen w-full pointer-events-none"
        priority
        aria-hidden="true"
      />
      {image && (
     <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20 flex flex-col items-center w-[85%] max-w-[300px] sm:w-auto"
      >
          <Image
            src={image}
            alt="member"
            width={300}
            height={360}
            className="rounded-lg object-cover shadow-lg w-[220px] h-[264px] sm:w-[300px] sm:h-[360px]"
            priority
          />

          <div className="mt-4 sm:mt-6 text-center w-full">
            <h1 className="tracking-widest uppercase font-semibold !text-black text-2xl sm:text-3xl md:text-4xl">
              {name ?? ''}
            </h1>
            <p className="mt-1 text-sm sm:text-lg text-grey-500">{title ?? ''}</p>
          </div>
        </div>
      )}

    </section>
  );

};
