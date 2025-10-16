import Image from "next/image";

export default function TeamCard({ name, title, image }: { name?: string, title?: string, image?: string }) {
    return (
        <div className="relative group w-60 md:w-80 aspect-[0.8] rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-slate-400/40">
            <Image
                src={image || "/image/managers/default.png"}
                alt={`Photo of ${name}`}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-700/80 via-slate-600/40 md:via-tertiary/20 to-transparent"></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {name}
                </h3>
                <p className="text-sm md:text-lg text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)' }}>
                    {title}
                </p>
            </div>
        </div>
    );
};