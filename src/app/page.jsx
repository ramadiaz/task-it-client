import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-row items-center py-14">
          <div className="basis-1/2">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold">
                An online task management tool
              </h2>
              <h3 className="text-xl opacity-80">
                Quick task completion wherever you are
              </h3>
            </div>
          </div>
          <div className="basis-1/2">
            <Image src="/hero-image/hero.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
