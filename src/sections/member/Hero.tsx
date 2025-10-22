import Image from "next/image";
import { teamMembers } from "@/data/team";

interface Props {
  member: (typeof teamMembers)[number];
}

const Hero = ({ member }: Props) => {
  const isDefaultImage = member.image?.endsWith("DEFAULT.avif");
  return (
    <section className="min-h-[60vh] py-20 bg-secondary text-secondary-foreground" id="member-hero">
      <div className="container mx-auto px-4">
        {isDefaultImage ? (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{member.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{member.title}</p>

            <div className="flex justify-center items-center gap-4">
              {member.social_links?.github && (
                <a href={member.social_links.github} target="_blank" rel="noreferrer" className="underline">
                  GitHub
                </a>
              )}
              {member.social_links?.linkedin && (
                <a href={member.social_links.linkedin} target="_blank" rel="noreferrer" className="underline">
                  LinkedIn
                </a>
              )}
              {member.social_links?.twitter && (
                <a href={member.social_links.twitter} target="_blank" rel="noreferrer" className="underline">
                  Twitter
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{member.title}</p>

              <div className="flex items-center gap-4">
                {member.social_links?.github && (
                  <a href={member.social_links.github} target="_blank" rel="noreferrer" className="underline">
                    GitHub
                  </a>
                )}
                {member.social_links?.linkedin && (
                  <a href={member.social_links.linkedin} target="_blank" rel="noreferrer" className="underline">
                    LinkedIn
                  </a>
                )}
                {member.social_links?.twitter && (
                  <a href={member.social_links.twitter} target="_blank" rel="noreferrer" className="underline">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
