import { teamMembers } from "@/data/team";

interface Props {
  member: (typeof teamMembers)[number];
}

const About = ({ member }: Props) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5" id="member-about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">{member.name.split(' ')[0]}</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {member.about}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold">Role</h3>
              </div>
              <div className="ml-15">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-medium">
                  {member.title}
                </span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold">Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2 ml-15">
                {member.expertise?.map((skill: string) => (
                  <span 
                    key={skill} 
                    className="inline-block bg-secondary/10 hover:bg-secondary/20 text-foreground px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
