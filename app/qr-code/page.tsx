import Image from "next/image";
import QRimage from "./qr.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-grayish-blue">
      <div className="bg-white w-[332px] p-4 rounded-2xl drop-shadow-2xl inline-block">
        <Image
          src={QRimage}
          alt="Frontend Mentor QR Code"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="my-8 text-center px-2 space-y-4">
          <p className="text-dark-blue font-bold text-[22px] leading-tight">
            Improve your front-end skills by building projects
          </p>
          <p className="text-light-gray font-medium text-[15px] leading-tight">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
