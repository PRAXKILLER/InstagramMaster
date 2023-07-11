import React,{useEffect,useState} from "react";
import { ReactDOM } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAddressCard,faCamera } from "@fortawesome/free-solid-svg-icons";
import{faCirclePlay,faBookmark,faGripVertical} from "@fortawesome/free-solid-svg-icons";


const ProfileNavBar=()=> {
    
    
    return(
<>
     <div className="md:max-w-6xl md:mx-5 md:p-10 md:pb-0  xl:auto mx-auto mt-[30px] md:pt-0 w-full ">
        
        <hr className="border-gray-500 mt-6 " />
        <div className="flex  justify-center md:gap-10 gap-5">
            <button className="focus:border-t py-4 text-sm font-semibold flex justify-around  gap-2 w-1/3 md:w-auto text-gray-400 focus:text-gray-600 border-gray-800"><FontAwesomeIcon icon={faGripVertical} size="lg" /><div className="hidden md:block">POSTS</div></button>
            <button className="focus:border-t py-4 text-sm font-semibold justify-around flex gap-2 w-1/3 md:w-auto  text-gray-400 focus:text-gray-600 border-gray-800"><FontAwesomeIcon icon={faCirclePlay} size="lg" /><div className="hidden md:block">VIDEOS</div></button>
            <button className="hidden focus:border-t py-4 text-sm font-semibold md:flex gap-2 md:w-auto  text-gray-400 focus:text-gray-600 border-gray-800"><FontAwesomeIcon icon={faBookmark} size="lg" /><div className="hidden md:block">SAVED</div></button>
            <button className="focus:border-t py-4 text-sm font-semibold justify-around flex gap-2 md:w-auto  w-1/3 text-gray-400 focus:text-gray-600 border-gray-800"><FontAwesomeIcon icon={faAddressCard} size="lg" /><div className="hidden md:block">TAGGED</div></button>
        </div>
        </div>   
</>
    );
}
export default ProfileNavBar;