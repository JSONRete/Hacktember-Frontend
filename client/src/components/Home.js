import React from "react";

function Home() {
  return (
    <section className="bg-[#f5f1ed]">
      <div className="firstView h-[80vh] w-auto border-t-4 border-b-8 border-black">
        <div className="leftSide h-screen w-screen flex">
          <div
            className="w-1/2 bg-[#f5f1ed] bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/elderly-man-works-computer-with-computer-screen-that-says-word-code_902338-4686.jpg')",
            }}
          ></div>

          <div className="rightSide w-1/2 bg-[#f5f1ed] flex flex-col justify-center snap-start border-l-4 border-black">
            <h1 className="text-8xl font-bold mt-40 text-center">
              Learn Python At Any Age{" "}
            </h1>

            <div>
              <p className="text-3xl mt-40 text-center">
                Join thousands of other seniors who taught themselves to code
                with our free resources!
              </p>
            </div>
          </div>
        </div>

        
        <div className="greenReviewDiv h-3/5 bg-[#d3cfc8] w-auto flex flex-col border-t-4 border-black justify-center snap-start">
          <div className="flex w-full justify-between items-center">
            <div className="leftOne w-1/3 h-full bg-blue-300 flex flex-col justify-center items-center p-4 mx-4">
              <div className="reviewSquare w-full h-full bg-white rounded-md p-4">
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

            <div className="middleOne w-1/3 h-full bg-green-300 flex flex-col justify-center items-center p-4 mx-4">
              <div className="reviewSquare w-full h-full bg-white rounded-md p-4">
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

            <div className="rightOne w-1/3 h-full bg-red-300 flex flex-col justify-center items-center p-4 mx-4">
              <div className="reviewSquare w-full h-full bg-white rounded-md p-4">
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

        <div className="min-h-screen bg-[#4a5240] w-auto flex flex-col justify-center snap-start">
          <h1 className="text-center text-6xl font-bold underline  text-[#f5f1ed]">
            View Our Course Catalogue
          </h1>
        </div>

        <div className="snap-start w-auto h-40 overflow-scroll">
          <p className="text-center"> footer?</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
