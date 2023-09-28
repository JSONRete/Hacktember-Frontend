import React from "react";

function Home() {
  return (
    <section className="bg-[#f5f1ed]">
      <div className=" h-screen w-screen overflow-scroll">
        <div className="min-h-screen bg-[#f5f1ed] w-1/2 pt-20 flex flex-col justify-center snap-start">
          <h1 className="text-8xl font-bold mt-40 text-center">
            Learn Python At Any Age{" "}
          </h1>

          <div>
            <p className=" text-3xl mt-40 text-center">
              Join thousands of other seniors who taught themselves to code with
              our free recources!
            </p>
          </div>
        </div>

        <div className="greenreviewdiv h-3/5 bg-[#a1a485] w-screen flex flex-col justify-center snap-start">
          <div className="flex w-full justify-between items-center">
            <div className="leftone w-1/3 bg-blue-300 flex flex-col justify-center items-center p-4">
              <div className="w-full h-full bg-white rounded-md p-4">
                <p className="text-center">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
              </div>
              <img src="your-image-url" alt="Image" className="h-8 w-8 mt-4" />
              <p className="text-center">Review</p>
            </div>

            <div className="middleone w-1/3 bg-green-300 flex flex-col justify-center items-center p-4">
              <div className="w-full h-full bg-white rounded-md p-4">
                <p className="text-center">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
              </div>
              <img src="your-image-url" alt="Image" className="h-8 w-8 mt-4" />
              <p className="text-center">Review</p>
            </div>

            <div className="rightone w-1/3 bg-red-300 flex flex-col justify-center items-center p-4">
              <div className="w-full h-full bg-white rounded-md p-4">
                <p className="text-center">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
              </div>
              <img src="your-image-url" alt="Image" className="h-8 w-8 mt-4" />
              <p className="text-center">Review</p>
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-[#4a5240] w-screen flex flex-col justify-center snap-start">
          <h1 className="text-center text-6xl font-bold underline  text-[#f5f1ed]">
            View Our course Catalogue
          </h1>
        </div>

        <div className="snap-start w-screen h-40 overflow-scroll">
          <p className="text-center"> footer?</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
