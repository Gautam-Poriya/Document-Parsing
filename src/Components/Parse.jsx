import React from "react";
import Navbar from "./Navbar.jsx";
import Services from "./Aside/Services.jsx";
import { useState } from "react";
const Parse = () => {
  return (
    <>
      <Navbar />
      <section className="flex">
        <Services />
        <ParseService />
      </section>
    </>
  );
};
export default Parse;

const ParseService = () => {
  return (
    <>
      <article className="h-screen w-4/5">
        <div className="ml-10 mt-5 ">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mt-2"
              viewBox="0 0 512 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z" />
            </svg>
            <h5 className="font-bold text-xl">LlamaParse</h5>
          </div>
          <p>Analyze documents, tailored for optimal performance with RAG.</p>
        </div>
        <div className="h-1 border-b-2 border-b-slate-50 w-full mt-2"></div>
        <div className="h-20 mt-0 pt-0">
          <button className="justify-center mt-8 ml-10 w-28 h-10 bg-slate-100">
            Sendbox
          </button>
          <button className="ml-8 bg-slate-100 h-10 w-28">History</button>

          <button className="ml-80 border-zinc-400   border w-40 rounded-md h-10 hover:bg-black hover:text-white">
            Documentation
          </button>
          <button className="ml-4 border-zinc-400   border w-48 rounded-md h-10 hover:bg-black hover:text-white ">
            Report issue on Github
          </button>
        </div>

        {/* main funtionality of parsing */}

        <section className="h-72">
          <div className="flex">
          <div className="w-1/3 h-72  rounded-md border-2 border-gray-300  overflow-y-scroll overflow-hidden ">
          <div >
            <h5 className="ml-3 mt-3 font-bold text-xl">Parse Settings</h5>
            <br />
            <div className="ml-3">Mode</div>
            <div>
              <Mode />
            </div>
            <div className=" flex items-center">
              <p className="flex ml-3 mt-1 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 mt-2 "
                  viewBox="0 0 512 512"
                >
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                Parsing Instruction
              </p>
            </div>
            {/* checkbox goes here bu not impleamented yet */}
            {/* <div className="bg-slate-400 h-48">
                   <input type="textarea" placeholder="The provided document is a manga comic book. Most pages do NOT have a title. It does not contain tables. Try to reconstruct the dialogue spoken in a cohesive way." className="overflow-y-scroll overflow-x-clip w-full h-28 mr-3 ml-3 "/>
                   </div> */}
            <div>
              <ToggleButton />
            </div>
            <div>
              <PageSpecification />
            </div>
            <div>
              <PageFormatting />
            </div>
          </div>
         
           {/* <div><ParsingButton /></div>
            */}
           </div>
         
           {/* File Upload area is here */}
           <div className="w-2/3 h-72 border border-slate-300 rounded-2xl ml-1 mt-1 mb-1 mr-5">
            <div className="h-64 mt-1 ml-1 mr-1 mb-3  rounded-xl  border-dashed border-gray-400 border-2 overflow-hidden flex justify-center items-center">
              <p><span className="font-bold text-gray-500">Drag 'n' drop files here, or click to select files</span>
                <br />
       <span className="ml-7 text-gray-300">You can upload a file up to 315 MB.</span></p>
            </div>
           </div>
           </div>
           <div><ParsingButton /></div>
        </section>
      </article>
    </>
  );
};
// pages parsing filter
const Mode = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="ml-3 ">
        <label>
          <input
            type="radio"
            name="options"
            value="Fast"
            checked={selectedOption === "Fast"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Fast</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="options"
            value="Accurate"
            checked={selectedOption === "Accurate"}
            onChange={handleOptionChange}
          />

          <span className="ml-2">Accurate</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="options"
            value="Premium mode (our most accurate mode)"
            checked={selectedOption === "Premium mode (our most accurate mode)"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">
            Premium mode (our most accurate <span className="m-5">mode)</span>
          </span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="options"
            value="3rd Party multi-modal model "
            checked={selectedOption === "3rd Party multi-modal model "}
            onChange={handleOptionChange}
          />
          <span className="ml-2">3rd Party multi-modal model </span>
        </label>
      </div>
    </>
  );
};

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  function HandleToggleButton() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Toggle Button */}
      <div className="ml-5 inline-block hover:border-b-2 hover:border-black">
        <button onClick={HandleToggleButton} className="flex items-center">Text and Image handling<svg xmlns="http://www.w3.org/2000/svg"  className="w-3 h-3 ml-7" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
      </div>
      {isOpen && (
        <div className="ml-9">
          <p>OCR Language(s) for images</p>
          <p>Capture page screenshot</p>
          <p>Skip OCR</p>
          <p>Annotate Links</p>
          <p>Skip Diagonal Text</p>
          <p>Do not unroll columns</p>
        </div>
      )}
    </>
  );
};
const PageSpecification = () => {
  const [isPageSpecificationOpen, setIsPageSpecificationOpen] = useState(false);
  function handlePageSpecification() {
    setIsPageSpecificationOpen(!isPageSpecificationOpen);
  }
  return (
    <>
      <div className="ml-5 inline-block hover:border-b-2 hover:border-black">
        <button onClick={handlePageSpecification} className="flex items-center">Page Specification<svg xmlns="http://www.w3.org/2000/svg"  className="w-3 h-3 ml-7" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
      </div>
      {isPageSpecificationOpen && (
        <div className="ml-9">
          <p>Target Pages</p>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2"
            placeholder="1,23,45"
          />
          <p className="mt-3">Bounding Box</p>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2"
            placeholder="0.1,0.2"
          />
        </div>
      )}
    </>
  );
};
// Page Formatting Component
const PageFormatting = () => {
  const [isPageFormattingIsOpen, setIsPageFormattingIsOpen] = useState(false);
  const handlePageFormatting = (event)=> {
    event.preventDefault();
    setIsPageFormattingIsOpen(!isPageFormattingIsOpen);
  }
  return (
    <>
      <div className="ml-5 inline-block hover:border-b-2 hover:border-black">
        <button onClick={handlePageFormatting} className="flex items-center">Page Formatting<svg xmlns="http://www.w3.org/2000/svg"  className="w-3 h-3 ml-7" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
      </div>
      {isPageFormattingIsOpen && (
        <div className="ml-9 ">
          <p>
            If the string contains the string <br />
            pageNumber it will be replaced by the <br />
            page number.
          </p>
          <p>Page separator</p>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2"
            placeholder="\n---\n"
          />
          <p className="mt-3">Page Prefix</p>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2"
          />
          <p className="mt-3">Page Suffix</p>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2"
          />
        </div>
      )}
    </>
  );
};


// Parsing button

const ParsingButton =()=>{
  return(
    <>
     <div className="flex rounded-md border border-slate-400  w-80 mt-0 h-14 items-center  " >
              <p className="ml-2">Upload File first to parse</p>
              <button className="ml-14 w-20 h-10 rounded-md text-white bg-gray-400">Parse</button>
            </div>
    </>
  )
}