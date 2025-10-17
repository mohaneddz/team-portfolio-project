import Image from "next/image";
import { teamMembers } from "@/data/team";

interface Props {
  params: { name: string };
}

export default function Page({ params }: Props) {
  const decoded = decodeURIComponent(params.name);
  const member = teamMembers.find((m) => m.name === decoded);

  if (!member) {
    return (
      <div className="screen center p-8">
        <h2 className="text-2xl font-bold">Member not found</h2>
        <p className="mt-2">We couldn't find a team member matching "{decoded}".</p>
      </div>
    );
  }

  return (
    <div className="screen center p-8">
      <div className="max-w-3xl w-full bg-white/5 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-56 h-56 rounded-lg overflow-hidden flex-shrink-0">
          <Image src={member.image} alt={`Photo of ${member.name}`} fill className="object-cover" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold">{member.name}</h1>
          <p className="text-lg text-primary/90 font-semibold mt-2">{member.title}</p>
          <p className="mt-4 text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae? Non repellendus inventore cumque iste earum iusto voluptatem laborum minus perferendis magni velit cupiditate numquam asperiores, libero dicta itaque nulla?</p>
        </div>
      </div>
    </div>
  );
}
