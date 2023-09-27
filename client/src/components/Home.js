import React from "react";

function Home() {

    return (
        <section className="bg-[#f5f1ed]">


        <div className= "snap-y snap-mandatory h-screen w-screen overflow-scroll">
          <div className="min-h-screen bg-[#f5f1ed] w-screen pt-20 flex flex-col justify-center snap-start">
          
            <h1 className="text-8xl font-bold mt-40 ml-96">Project Name </h1>
            <div className = "container mr-96 flex flex-row ">
              <div className= " w-3/5">
                <p className=" text-3xl mt-40 text-right ">Something about education</p>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-[#a1a485] w-screen pt-20 flex flex-col justify-center snap-start">
            <h1 className="text-6xl font-bold underline mt-40 ml-96">What is it?</h1>
            <div className = "container mr-96 flex flex-row ">
              <div className= " w-3/5">
                <p className="text-left text-3xl pr-10 mt-40 ">Short Summary</p>
              </div>
              <div>
                <img className="flex-1 w-auto" src="https://i.pinimg.com/originals/3a/80/36/3a80363ad681b4f6a79276c85f81ccb0.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-[#4a5240] w-screen pt-20 flex flex-col justify-center snap-start">
            <h1 className="text-6xl font-bold underline mt-40 ml-96 text-[#f5f1ed]">What is it?</h1>
            <div className= "container mr-96 flex flex-row ">
          
              <div className= " w-3/5">
                <p className="text-left text-2xl pt-6 pr-10 text-[#f5f1ed]" >Welcoming Text </p>
                <p className="text-left text-2xl pt-6 pr-10 text-[#f5f1ed]">Our platform Mission.</p>
        
              </div>
              <div>
                <img className="flex-1 w-auto" src="https://i.pinimg.com/originals/3a/80/36/3a80363ad681b4f6a79276c85f81ccb0.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <div className="snap-start w-screen h-screen overflow-scroll">
          </div>
        </div>
        
        </section>

    )
}

export default Home;
