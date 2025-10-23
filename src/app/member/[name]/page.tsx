import { teamMembers } from "@/data/team";
import Hero from "@/sections/member/Hero";
import About from "@/sections/member/About";
import Contact from "@/sections/Contact";

interface Props {
  params: Promise<{ name: string }>;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function page({ params }: Props) {
  const { name } = await params;

  const member = teamMembers.find((m) => slugify(m.name) === name.toLowerCase());

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Member not found</h1>
          <p className="text-muted-foreground">We couldn't find a team member matching &ldquo;{name}&rdquo;.</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Hero member={member} />
      <About member={member} />
      <Contact />
    </main>
  );
}
