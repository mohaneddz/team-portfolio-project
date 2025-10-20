import Image from "next/image";
import MemberHero from "@/sections/member/MemberHero";
import About from "@/sections/member/About";
import Work from "@/sections/member/Work";
import ReachOut from "@/sections/member/ReachOut";
import { teamMembers } from "@/data/team";
import Home from "@/app/page";

interface Props {
  params: { name: string };
}

export default function Page({ params }: Props) {
  const decoded = decodeURIComponent(params.name);
  const member = teamMembers.find((m) => m.name === decoded);

  if (!member) {
    return Home();
  }

  return (
  <>
    <MemberHero image={member.image} name={member.name} title={member.title} />
    <About about={member.about} image={member.image} />
    <Work projects={member.projects}/>
    <ReachOut links={member.social_links} />
  </>
  );
}
