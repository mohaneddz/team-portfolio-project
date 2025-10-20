import Image from "next/image";

const footerSvg = '/svgs/footer.svg';

export default function Footer() {
  return (
    <footer className="full relative">
      <div className="flex flex-col items-center justify-center py-10 w-full">

        <Image src={footerSvg} alt="Footer Image" layout="fill" objectFit="cover"  />

        <p className="mt-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
