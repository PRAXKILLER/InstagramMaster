import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faGear } from '@fortawesome/free-solid-svg-icons'
import ProfileImg from'../Image/profile1.jpg'
function ProfileBar(){

    const Profile = {
        name: 'Jayesh Savaliya',
        post: `${25}`,
        followers: `${273} `,
        following: `${493} `,
        discription:'savaliya jayesh | foody | Youtuber '

    }
    return(
        <>
            <div className='max-w-6xl mx-5 p-10 xl:mx-auto'> 
            <div className='grid grid-cols-4 gap-4'>
                <div className='avatar justify-center'>
                    <div className='rounded-full w-36 h-36'>
                            <img className='rounded-full w-36 h-36' src={ProfileImg} alt='My Profile img'/>  
                       </div>
                    </div>
                    <div className='col-span-2'>
                        <span className='text-gray-700 text-2xl mr-4'>{Profile.name}</span>
                        <div className='cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4'>Edit profile</div>
                        <span className='cursor-pointer h-8 inline '> <FontAwesomeIcon icon={faGear} /> </span>
                        <div className='mt-4 flex space-x-3'>
                        <div><span className='font-semibold'>{Profile.post}</span> posts</div>
                        <div><span className='font-semibold'>{Profile.followers}</span>followers</div>
                         <div><span className='font-semibold'>{Profile.following}</span>following</div>

                         </div>
                        
                         <div className='pt-3'>

                         {Profile.discription}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileBar;