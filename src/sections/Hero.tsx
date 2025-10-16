import Image from "next/image";
const heroSvg = '/svgs/hero.svg';

export default function Hero() {
  return (
    <section className="min-h-screen center" id="home">

      <Image src={heroSvg} alt="" width={1920} height={1080}
        className="object-cover absolute inset-0 overflow-hidden h-screen w-full"
        priority
      />

      <div className="center mr-auto col ml-24 z-20">

        <h1 className="z-30 w-full">Hero Title</h1>
        <p className="text-lg text-muted-foreground z-30 max-w-[40ch]">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining </p>

      </div>

    </section>
  );

};
