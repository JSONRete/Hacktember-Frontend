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

        <div className="h-2/5 bg-[#a1a485] w-screen flex flex-col justify-center snap-start">
          <h1 className="text-6xl font-bold underline text-center">
            Review Section
          </h1>

          <div className="flex w-full h-2/4 justify-center items-center">
            <div className="w-1/3 h-2/3 bg-blue-300 flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full mb-4">
                {/* This div creates a centered square */}
              </div>
              <img src="your-image-url" alt="Image" className="h-8 w-8" />
              <p className="text-center">Review</p>
            </div>

            <div className="w-1/3 h-2/3 bg-green-300 flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full mb-4">
                {/* This div creates a centered square */}
              </div>
              <img src="your-image-url" alt="Image" className="h-8 w-8" />
              <p className="text-center">Review</p>
            </div>

            <div className="w-1/3 h-2/3 bg-red-300 flex flex-col justify-center items-center">
              
              <img src="your-image-url" alt="Image" className="h-8 w-8" />
              <p className="text-center">Review</p>
              <div className="w-20 h-20 bg-white rounded-full mb-4">
                {/* This div creates a centered square */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-2/5 bg-[#a1a485] w-screen  flex flex-col justify-center snap-start">
          

          <h1 className="text-6xl font-bold underline ">Review Section</h1>

          <div className="flex w-full h-2/4">
            
            <div className="w-1/3 h-2/4 bg-blue-300">
              <p>review</p>
            </div>
            
            <div className="w-1/3  bg-green-300">
              <p>review</p>
            </div>
            
            <div className="w-1/3 bg-red-300">
              <p>review</p>
            </div>
          </div>
        </div> */}

        <div className="min-h-screen bg-[#4a5240] w-screen flex flex-col justify-center snap-start">
          <h1 className="text-center text-6xl font-bold underline  text-[#f5f1ed]">
            View Our course Catalogue
          </h1>
        </div>

        <div className="snap-start w-screen h-screen overflow-scroll"></div>
      </div>
    </section>
  );
}

export default Home;
