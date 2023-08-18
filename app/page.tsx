import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-6 p-24">
      <Heading>Frontend Mentor Challenges</Heading>
      <div>
        <Link href="/qr-code" className="hover:text-blue-500 transition">
          <Text>QR Code Component</Text>
        </Link>
      </div>
    </main>
  );
}
