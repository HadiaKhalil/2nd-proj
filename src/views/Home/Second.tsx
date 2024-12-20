import Image from "next/image";

const Second = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex justify-between items-center md:flex-row flex-col text-[white]">
        <div className="h-full md:w-1/2 w-full max-lg:px-7 max-sm:px-0">
          <div className="md:max-w-[70%] mx-auto md:px-0 md:py-0 max-md:w-[75%]">
            <h1 className="lg:text-5xl md:text-3xl font-title text-2xl font-extrabold pt-[100px] max-w-[440px] max-lg:text-[25px] max-sm:pt-[100px]">
              {` Hello!`}
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-title font-extrabold pt-2 max-w-[440px] max-lg:text-[25px]">
              I am <span className="text-sky-200">Hadia Khalil.</span>
            </h1>
            <p className="lg:text-1xl md:text-base text-sm mb-12 mt-12 max-lg:text-[15px] max-sm:mt-4">
              I am a passionate and dedicated full-stack web developer with a
              knack for turning ideas into beautifully functional websites and
              applications. With expertise in both{" "}
              {`front-end and back-end technologies,`} I bring creativity and
              precision to every project. My commitment to staying{" "}
              {`up-to-date`} with the latest industry trends and my{" "}
              {`problem-solving`} skills make me a valuable asset in delivering
              innovative digital solutions. {`let's`} collaborate and bring your
              web vision to life.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full pt-32 pl-36 max-md:pt-5 max-sm:items-center max-sm:mr-[90px] max-md:w-[350px] relative">
          <Image
            src="/Image/img2.png"
            alt="my image"
            width={350}
            height={330}
            className="mb-36"
          />
          <div className="mt-[-490px] ml-[-100px] absolute max-sm:ml-[-90px] max-sm:mt-[-350px] max-sm:w-[225px] max-sm:h-[240px]">
            <Image
              src="/Image/Gradient(3).png"
              alt="my image"
              width={330}
              height={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
