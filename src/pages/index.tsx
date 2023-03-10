import CustomButton from "@/components/common/custom-button";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="shadow-lg p-3 max-w-sm mx-auto rounded-xl text-center mt-2 ">
          <h1 className="text-black font-medium text-xl ">
            Profile Card Using Tailwind CSS
          </h1>
        </div>
        <div className="max-w-xs mx-auto my-4 flex flex-col align-center justify-center  rounded-lg ">
          <img
            src={"/image/darshan.jpg"}
            alt=""
            className="object-cover rounded-t-lg"
          />
          <div className=" bg-black text-center rounded-b-lg pb-4">
            <h2 className="font-bold text-2xl text-white mt-5">
              Darshan Gowda
            </h2>
            <h4 className="text-orange-400 mt-1">Frontend Developer</h4>
            <div className="flex gap-6 justify-center mt-3">
              <button className="bg-white hover:bg-gray-200 text-black rounded-lg py-3 px-5 font-bold max-w-[115px] w-full">
                Email
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold py-3 px-5 max-w-[115px] w-full">
                LinkedIn
              </button>
            </div>
            <div className="px-9 pt-8 mb-3">
              <h4 className="text-base font-bold text-white text-left mb-1">
                About
              </h4>
              <p className="text-white text-left text-sm ">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </div>
            <div className="px-9 mb-3">
              <h4 className="text-white font-bold mb-1 text-left">Interests</h4>
              <p className="text-white text-left text-sm">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
            <CustomButton
              label="Landing Pages"
              onClick={() => router.push("/gallery")}
              styles={"bg-white max-w-none rounded-none"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
