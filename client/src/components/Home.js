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

          <div className="rightSide w-1/2 bg-[#ffffff] flex flex-col justify-center snap-start border-l-4 border-black">
            <h1 className="text-8xl font-extrabold mt-40 text-center px-28">
              Learn Python At Any Age{" "}
            </h1>

            <div>
              <p className="text-4xl font-bold mt-20 text-center pb-20 ">
                Join thousands of other seniors who taught themselves to code
                with our free resources!
              </p>
            </div>

            <button className="form-button text-3xl bg-[#000000] text-white px-4 py-10 mx-80 ">
              Get Started
            </button>
          </div>
        </div>

        <div className="greenReviewDiv h-3/5 bg-[#d3cfc8] w-auto flex flex-col border-t-4 border-black justify-center snap-start">
          <div className="reviewHolder flex w-full justify-between items-center h-full">
            <div className="leftOne w-1/3 h-full bg-[#d3cfc8] flex flex-col justify-center items-center p-4 px-40">
              <div className="reviewSquare square bg-white p-4 border-2 border-black">
                <p className="text-center font-bold">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
                <p className="text-center"> - Name, 67 </p>
              </div>
              <img
                src="https://icons.iconarchive.com/icons/google/noto-emoji-people-face/256/10167-older-adult-medium-skin-tone-icon.png"
                alt="Image"
                className="h-20 w-20 mt-4"
              />
              <p className="text-center">5/5 Review</p>
            </div>

            <div className="middleOne w-1/3 h-full bg-[#d3cfc8] flex flex-col justify-center items-center p-4 px-40">
              <div className="reviewSquare square bg-white p-4 border-2 border-black">
                <p className="text-center font-bold">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
                <p className="text-center"> - Name, 76 </p>
              </div>
              <img
                src="https://www.iconarchive.com/download/i108757/google/noto-emoji-people-face/10181-old-woman-dark-skin-tone.1024.png"
                alt="Image"
                className="h-20 w-20 mt-4"
              />
              <p className="text-center">5/5 Review</p>
            </div>

            <div className="rightOne w-1/3 h-full bg-[#d3cfc8] flex flex-col justify-center items-center p-4 px-40">
              <div className="reviewSquare square bg-white p-4 border-2 border-black">
                <p className="text-center font-bold">
                  “I never thought I'd be able to learn Python at my age, but
                  this online course made it possible! The step-by-step lessons
                  and patient explanations made the world of programming
                  accessible to someone like me.”
                </p>
                <p className="text-center"> - Name, 71 </p>
              </div>
              <img
                src="https://www.iconarchive.com/download/i108751/google/noto-emoji-people-face/10175-old-man-dark-skin-tone.ico"
                alt="Image"
                className="h-20 w-20 mt-4"
              />
              <p className="text-center">5/5 Review</p>
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
