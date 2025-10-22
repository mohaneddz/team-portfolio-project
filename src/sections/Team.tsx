import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <div className="min-h-screen py-20" id="team">

      <div className="container mx-auto px-4 center col full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented individuals working together to create exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl full">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
