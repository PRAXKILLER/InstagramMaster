import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
// import {lazyLoadImage} from "react-lazy-load-image-component"
import ProfileNavBar from "./ProfileNavBar.js"
import Photo from "./Photo.js";

function Profile() {
  const Profile = {
    name: "Jayesh_Savaliya_004",
    url:"Images/profile1.jpg",
    post: `${25}`,
    followers: `${273} `,
    following: `${493} `,
    discription: "savaliya jayesh | foody | Youtuber ",
  };
  const Image=[
    {id: 1,url:"Images/profile2.jpg",like:5000,comment:61},
    {id: 2,url:"Images/profile3.jpg",like:50,comment:26 },
    {id: 3,url:"Images/profile4.jpg",like:514,comment:67 },
    {id: 4,url:"Images/profile5.jpg",like:15,comment:26 }
]
           
 
  return (
    <>
    <div className="w-3/4 pt-2 text-xl px-1 mx-2  font-semibold md:hidden text-justify tracking-widest ">
        {Profile.name}
      </div>

      <div className="md:max-w-6xl md:mx-5 md:p-10 xl:mx-auto max-w-3xl mx-2 pt-[12px]">

        <div className="grid grid-cols-4 justify-items-stretch   gap-2 md:gap-4">

          <div className="avatar md:justify-self-center">

            <div className="md:rounded-full  justify-around md:w-36 md:h-36">
              <img
                className="rounded-full md:w-36 md:h-36 w-20 h-20 "
                src={Profile.url}
                alt="My Profile img"
              />
            </div>
          </div>

          <div className="mt-4 mx-3 col-span-3 flex space-x-3 md:hidden">
              <div className="text-center">
                <span className="font-semibold  ">{Profile.post}</span> posts
              </div>
              <div className="text-center">
                <span className="font-semibold">{Profile.followers}</span>
                followers
              </div>
              <div className="text-center">
                <span className="font-semibold">{Profile.following}</span>
                following
              </div>
            </div>


          
          
          <div className="col-start-2 col-end-4 hidden md:block">
            <span className="text-gray-700 text-2xl mr-4">{Profile.name}</span>
            <div className="cursor-pointer bg-[#dbdbdb2e] hover:bg-[#DBDBDB] inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4">
              Edit profile
            </div>
            <span className="cursor-pointer h-8 inline ">
              {" "}
              <FontAwesomeIcon icon={faGear} />{" "}
            </span>
            <div className="mt-4 flex space-x-3 cursor-pointer">
              <div className="cursor-auto">
                <span className="font-semibold">{Profile.post}</span> posts
              </div>
              <div>
                <span className="font-semibold ">{Profile.followers}</span>
                followers
              </div>
              <div>
                <span className="font-semibold ">{Profile.following}</span>
                following
              </div>
            </div>
            <div className="pt-3">{Profile.discription}</div>
          </div>
            


          


        </div>
        <div className="pt-3 w-full md:hidden ">{Profile.discription}</div>
        <div className="grid grid-row-1 grid-flow-col pt-5 md:hidden gap-1 justify-between">
          
          {/* <div className="text-gray-700 text-2xl mr-4 hidden md:block">
            {Profile.name}
          </div> */}
          <div className="cursor-pointer text-center row-span-1 w-[170px] text-md  text-gray-700 font-semibold p-1 px-2 border border-gray-700 rounded mr-4 ">
            Edit profile
          </div>
          <div className="cursor-pointer text-center row-span-1 text-md  w-[170px]  text-gray-700 font-semibold p-1 px-2 border  border-gray-700 rounded mr-4 ">
            share profile
          </div>
          {/* <span className="cursor-pointer h-8 md:inline hidden ">
            {" "}
            <FontAwesomeIcon icon={faGear} />{" "}
          </span> */}
          
         </div>
          <ProfileNavBar/>
          <Photo img={Image} />
      </div>
    </>
  );
}

export default Profile;
