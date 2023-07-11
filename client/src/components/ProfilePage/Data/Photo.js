import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal"
const Photo =(props)=> {
    return (
      <>
      <div className="md:max-w-6xl md:mx-5 md:p-10 xl:auto mx-auto mt-[-5px] md:mt-[10px] md:pt-0 w-full ">
        <div className="grid grid-cols-3 md:gap-5 gap-[2.5px]">
          {props.img.map((Image) => {
            const { id, url, like, comment } = Image;
            return (
              <div className="  md:h-64 h-32 overflow-hidden">
                <div className="relative group cursor-pointer">
                  <img
                    onClick={<Modal img={Image}/>}
                    className="object-cover h-32 md:h-64 w-full"
                    loading="eager"
                    src={url}
                    key={id}
                    alt={`Image ${id}`}
                  />
                  <div className="absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-full h-full bg-black/30 flex text-white justify-center items-center space-x-2 text-xs md:text-lg md:space-x-4">
                    <div className="space-x-1 flex">
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="sm md:h-6 h-3 inline md:lg"
                      />
                      <div>{like}</div>
                    </div>

                    <div className="space-x-1 flex">
                      <FontAwesomeIcon
                        icon={faComment}
                        size="sm md:h-6 h-3 scale-x-[-1] inline md:lg"
                      />
                      <div>{comment}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </>
    );
}

export default Photo ;