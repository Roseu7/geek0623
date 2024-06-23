import Image from "next/image";
import bgImage from "@/assets/bg.png";
import bgImage2 from "@/assets/bg1.png";

export function BackgroundImage() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 blur-md">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </div>
  );
}
