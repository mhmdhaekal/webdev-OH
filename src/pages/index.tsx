import type { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'   
import axios from 'axios'

function Home(){

   
return(
<div>
    <div className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800' id='#home'>
    <div className='container flex-wrap flex justify-between items-center mx-auto'>
        <a href='#home'><h1 className='text-xl text-bold hover:text-gray-200 dark:text-white dark:hover:text-gray-200'>Haekal.</h1></a>
        <h1 className=' text-md text-bold hover:text-gray-200 dark:text-white dark:hover:text-gray-200 space-y-4 md:block'>OH FASILKOM UI 2022</h1>
    </div>
    </div>

    <div className='py-5 px-5'>
    <form>
    <input type="text" className=' bg-gray-200 dark:bg-gray-600 dark:text-white h-10 w-80 pr-8 pl-8 rounded z-0 focus:shadow focus:outline-none ml-2 mr-2' placeholder="Search anything..."/>
    <button className='bg-gray-200 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-bold py-2 px-4 rounded ml-2'>Submit</button>
    </form>
    </div>
</div>
);
}

export default Home