import React from "react";
import Navbar from "./Navbar.jsx";
import Services from "./Aside/Services.jsx";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";  
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
  const navigate = useNavigate();
  function handleDocumentation() {
    window.location.href = "https://docs.cloud.llamaindex.ai/";
  }
  function handleSendboxButton(){
      navigate('/parse');
  }
  function handleHistoryButton(){
    navigate('/parse/history');
  }
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
          <button className="justify-center mt-8 ml-10 w-28 h-10 bg-slate-100" onclick={handleSendboxButton}>
            Sendbox
          </button>
          <button className="ml-8 bg-slate-100 h-10 w-28" onClick={handleHistoryButton}>History</button>

          <button
            className="ml-80 border-zinc-400   border w-40 rounded-md h-10 hover:bg-black hover:text-white"
            onClick={handleDocumentation}
          >
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
              <div>
                <h5 className="ml-3 mt-3 font-bold text-xl">Parse Settings</h5>
                <br />
                <div className="ml-3">Mode</div>
                <div>
                  <Mode />
                </div>
                {/* <div className=" flex items-center">
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
                </div> */}

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
                <div>
                  <WebHook />
                </div>
                <div>
                  <CacheSetting />
                </div>
                <div>
                  <Advanced />
                </div>
              </div>

              {/* <div><ParsingButton /></div>
               */}
            </div>

            {/* File Upload area is here */}
            <div className="w-2/3 h-72 border border-slate-300 rounded-2xl ml-1 mt-1 mb-1 mr-5">
              {/* <div className="w-full h-72 border border-slate-300 rounded-2xl ml-1 mt-1 mb-1 mr-5"> */}
              <div className="h-64 mt-1 ml-1 mr-1 mb-3  rounded-xl  border-dashed border-gray-400 border-2 overflow-hidden justify-center items-center">
                <div className="items-center justify-center "> 
                <input type="file" className="w-auto h-64 block items-center text-white file:hidden absolute" />
                </div>
                <p className="relative text-center mt-20">  
               
                  <span className="font-bold text-gray-500">
                    Drag 'n' drop files here, or click to select files
                  </span>
                  <br />
                  <span className="ml-7 text-gray-300">
                    You can upload a file up to 315 MB.
                  </span>
                </p>
                {/* <input type="file"  className="w-full h-64 outline-none "/>
                <span className="font-bold text-gray-500">
                    Drag 'n' drop files here, or click to select files
                  </span>
                  <br />
                  <span className="ml-7 text-gray-300">
                    You can upload a file up to 315 MB.
                  </span> */}
              </div>
            </div>
          </div>
          {/* </div> */}
          <div>
            <ParsingButton />
          </div>
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
        <label className="flex">
          <input
            type="radio"
            name="options"
            value="Fast"
            checked={selectedOption === "Fast"}
            onChange={handleOptionChange}
            className="hidden"
          />
          <div className="icon">
            {selectedOption === "Fast" ? (
              <span className="checked-icon">✓</span> // Custom icon for selected state
            ) : (
              <span className="unchecked-icon">○</span> // Custom icon for unselected state
            )}
          </div>
          <span className="ml-2">Fast </span>
          <span className=" w-24 bg-slate-200 h-5 rounded-xl ml-2 flex items-center justify-center mt-1 text-sm">
            1 cred. /3 p.
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </label>
        {/* Option 2  */}
        <label className="flex">
          <input
            type="radio"
            name="options"
            value="Accurate"
            checked={selectedOption === "Accurate"}
            onChange={handleOptionChange}
            className="hidden"
          />
          <div className="icon">
            {selectedOption === "Accurate" ? (
              <span className="checked-icon">✓</span> // Custom icon for selected state
            ) : (
              <span className="unchecked-icon">○</span> // Custom icon for unselected state
            )}
          </div>

          <span className="ml-2">Accurate</span>
          <span className=" w-24 bg-slate-200 h-5 rounded-xl ml-2 flex items-center justify-center mt-1 text-sm">
            1 cred. /1 p.
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </label>
        {/* Option 3 */}
        <label className="flex">
          <input
            type="radio"
            name="options"
            value="Premium mode (our most accurate mode)"
            checked={selectedOption === "Premium mode (our most accurate mode)"}
            onChange={handleOptionChange}
            className="hidden"
          />
          <div className="icon">
            {selectedOption === "Premium mode (our most accurate mode)" ? (
              <span className="checked-icon">✓</span> // Custom icon for selected state
            ) : (
              <span className="unchecked-icon">○</span> // Custom icon for unselected state
            )}
          </div>
          <span className="ml-2 ">
            Premium mode (our most accurate{" "}
            <span className="m-auto flex">
              mode)
              <span className=" w-24 bg-slate-200 h-5 rounded-xl ml-1 flex items-center justify-center text-sm">
                1 cred. /1 p.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </span>
          </span>
        </label>
        {/* option 4 */}
        <label className="flex">
          <input
            type="radio"
            name="options"
            value="3rd Party multi-modal model"
            checked={selectedOption === "3rd Party multi-modal model"}
            onChange={handleOptionChange}
            className="hidden"
          />
          <div className="icon">
            {selectedOption === "3rd Party multi-modal model" ? (
              <span className="checked-icon">✓</span> // Custom icon for selected state
            ) : (
              <span className="unchecked-icon">○</span> // Custom icon for unselected state
            )}
          </div>
          <span className="ml-2">3rd Party multi-modal</span>

          <span className=" w-24 bg-slate-200 h-5 rounded-xl ml-1 flex items-center justify-center text-sm">
            n cred. /1 p.
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </label>
        {/* option 5 */}
        <label className="flex">
          <input
            type="radio"
            name="options"
            value="Continuous mode Beta"
            checked={selectedOption === "Continuous mode Beta"}
            onChange={handleOptionChange}
            className="hidden"
          />
          <div className="icon">
            {selectedOption === "Continuous mode Beta" ? (
              <span className="checked-icon">✓</span> // Custom icon for selected state
            ) : (
              <span className="unchecked-icon">○</span> // Custom icon for unselected state
            )}
          </div>
          <span className="ml-2">
            Continuous mode <sup className="text-sm">Beta</sup>
          </span>
          <br />
          <span className=" w-24 bg-slate-200 h-5 rounded-xl ml-1 flex items-center justify-center text-sm">
            10 cred. /1 p.
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
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
      <div className="ml-5 ">
        <button onClick={HandleToggleButton} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Text and Image handling
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[85px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="ml-9">
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z" />
            </svg>
            <p>OCR Language(s) for images</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
            </svg>
            <p>Capture page screenshot</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
            </svg>
            <p>Skip OCR</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
            </svg>
            <p>Skip Image Extraction</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
            <p>Annotate Links</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
            </svg>
            <p>Skip Diagonal Text</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
          <span className="flex ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              {" "}
              <path d="M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            <p>Do not unroll columns</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
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
      <div className="ml-5 ">
        <button onClick={handlePageSpecification} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Page Specification
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[130px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isPageSpecificationOpen && (
        <div className="ml-9">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[15px] h-[15px] mt-1 mr-1 "
            >
              <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
            </svg>{" "}
            <p>Target Pages</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2 p-3"
            placeholder="1,23,45"
          />
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[15px] h-[15px] mt-5 ml-1 "
            >
              <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
            </svg>{" "}
            <p className="mt-3">Bounding Box</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[13px] h-[13px] ml-1 mt-5 text-slate-200"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-40 h-8 rounded-md border border-spacing-1 mt-2 p-3"
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
  const handlePageFormatting = (event) => {
    event.preventDefault();
    setIsPageFormattingIsOpen(!isPageFormattingIsOpen);
  };
  return (
    <>
      <div className="ml-5 ">
        <button onClick={handlePageFormatting} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Page Formatting
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[142px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isPageFormattingIsOpen && (
        <div className="ml-9 ">
          <p>
            If the string contains the string <br />
            pageNumber it will be replaced by the <br />
            page number.
          </p>
          <span className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  className="w-[13px] h-[13px] ml-1 mt-1 text-slate-200"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg><p className="ml-1">Page separator</p>
          </span> <input
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

const ParsingButton = () => {
  return (
    <>
      <div className="flex rounded-md border border-slate-400  w-80 mt-0 h-14 items-center  ">
        <p className="ml-2">Upload File first to parse</p>
        <button className="ml-14 w-20 h-10 rounded-md text-white bg-gray-400">
          Parse
        </button>
      </div>
    </>
  );
};

// Web Hook Component
const WebHook = () => {
  const [isWebHookIsOpen, setIsWebHookIsOpen] = useState(false);
  const handleWebHookButton = (event) => {
    event.preventDefault();
    setIsWebHookIsOpen(!isWebHookIsOpen);
  };
  return (
    <>
      <div className="ml-5 ">
        <button onClick={handleWebHookButton} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Web Hook
          </span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[184px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isWebHookIsOpen && (
        <div className="ml-9 ">
          <p>
            The URL of the webhook endpoint where
            <br /> data will be sent
            <br />
            This should be a valid URL that your
            <br /> application or service is set up to handle <br /> incoming
            data from.
            <br />
            The protocol must be HTTPS.
            <br />
            The host must be a domain name rather than <br /> an IP address.
          </p>
        </div>
      )}
    </>
  );
};

// Cache Setting Component
const CacheSetting = () => {
  const [isCacheSettingIsOpen, setIsCacheSettingIsOpen] = useState(false);
  const handleCacheSetting = (event) => {
    event.preventDefault();
    setIsCacheSettingIsOpen(!isCacheSettingIsOpen);
  };
  return (
    <>
      <div className="ml-5 ">
        <button onClick={handleCacheSetting} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Cache setting
          </span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[163px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isCacheSettingIsOpen && (
        <div className="ml-9 ">
          <p>
            The URL of the webhook endpoint where
            <br /> data will be sent
            <br />
            This should be a valid URL that your
            <br /> application or service is set up to handle <br /> incoming
            data from.
            <br />
            The protocol must be HTTPS.
            <br />
            The host must be a domain name rather than <br /> an IP address.
          </p>
        </div>
      )}
    </>
  );
};

// Advanced Component
const Advanced = () => {
  const [isAdvancedIsOpen, setIsAdvancedIsOpen] = useState(false);
  const handleAdvancedButton = (event) => {
    event.preventDefault();
    setIsAdvancedIsOpen(!isAdvancedIsOpen);
  };
  return (
    <>
      <div className="ml-5 ">
        <button onClick={handleAdvancedButton} className="flex items-center">
          <span className="inline-block hover:border-b-2 hover:border-black">
            Advanced
          </span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 ml-[188px]"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      {isAdvancedIsOpen && (
        <div className="ml-9 ">
          <p>
            The URL of the webhook endpoint where
            <br /> data will be sent
            <br />
            This should be a valid URL that your
            <br /> application or service is set up to handle <br /> incoming
            data from.
            <br />
            The protocol must be HTTPS.
            <br />
            The host must be a domain name rather than <br /> an IP address.
          </p>
        </div>
      )}
    </>
  );
};

// file upload detail

// const PdfFileUpload=()=>{
//   const fileInputRef = useRef(null);
//   const [fileDetails , setFileDetails] = useSate(
//      {
//          name:'',
//          size:'',
//          pages:'',
//      }
//   )  
//  return(
//      <>
//      </>
//  )
// }