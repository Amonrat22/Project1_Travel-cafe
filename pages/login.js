import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css'
export default function register() {
    return ( 
    
    

    <div >
        <Head>
        <title> Login_cafe </title> <
        link rel = ''
        href = '' / >
        </Head> 
        <Navbar> </Navbar>

        <div className=' fill-bb text-center text-4xl m-7 font-bold'>
            เข้าสู่ระบบ

        </div>

        <div className=' '>

           <div className=' '>
           <svg xmlns="http://www.w3.org/2000/svg" className=" fill-YY h-96 w-96 ml-48 mt-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
           </div>

            <div className='  ' >
                
                <div class="container px-5 py-24 mx-auto -mt-96  flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      
                        <div class="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Your email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="email"></input>
                        </div>

                        <div class="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Your password</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder="xxxxxxxxx"></input>
                        </div>

                        <button class=" text-bb hover:text-white bg-YY border-0 py-2 px-6 focus:outline-none hover:bg-bottomS rounded text-lg">เข้าสู่ระบบ</button>
      
                    </div>
            
                </div>
            </div>

        </div>



     </div>

    )
}