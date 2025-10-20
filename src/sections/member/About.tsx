import Image from "next/image";
const memberFrame = "/svgs/member_frame.svg";

export default function About({ about, image }: { about?: string; image?: string }) {
  return (
    <section className="w-full min-h-screen overflow-hidden flex items-center" id="about">
      <div className="w-full relative h-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-3xl w-full md:w-1/2 p-6 md:p-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-6">About me</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {about ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining."}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-full md:absolute md:top-0 md:bottom-0 md:right-0 md:w-1/2 flex items-center justify-center">
              <Image
                src={memberFrame}
                alt="member frame"
                fill
                className="object-cover md:object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
