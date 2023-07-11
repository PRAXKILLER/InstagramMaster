import React from 'react';


function Signin() {
  return (
   <>
   <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
    {/* login container */}
    <div className='bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
      {/* from */}
      <div className='w-1/2'>
        <h2 className='font-boldtext-2xl'>Login</h2>
      </div>
    
    {/* image */}
    <div className='w-1/2 '>
      <img src="profile1.jpg" alt="photo" className='rounded-2xl'/>
    </div>
    </div>
   </section>
   
   </>
  );
}

export default Signin;