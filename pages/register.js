import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css'
export default function register() {
    return ( 
    <div >
        <Head>
        <title> Register_cafe </title> <
        link rel = ''
        href = '' / >
        </Head> 
        <Navbar> </Navbar>

        <div className=' fill-bb text-center text-4xl m-7 font-bold'>
            สมัครสมาชิก

        </div>

        <div className=' '>

            <div className=' '>
                <svg xmlns="http://www.w3.org/2000/svg" className=" fill-YY h-96 w-96 ml-48 mt-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
           </div>

            <div className='  '>
                <div class="container px-5 py-24 mx-auto -mt-96  flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      
                    <div class="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Your email</label>
                        <input type="text" id="email" name="email" maxLength={100} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Jane@example.com"></input>
                    </div>

                    <div class="relative mb-4">
                        <label for="username" className="leading-7 text-sm text-gray-600">Your name</label>
                        <input type="text" id="username" name="username" maxLength={100} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Jane Doe"></input>
                    </div>

                    <div class="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-gray-600">Your password</label>
                        <input type="password" id="password" name="password" maxLength={100} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder="xxxxxxxxx"></input>
                    </div>

                    <div className=' relative mb-4'>
          
                        <label for="sex" className="leading-7 text-sm text-gray-600">Sex</label>
            
                        <div class="mt-2 flex">
                            <label class="inline-flex items-center">
                                <input type="radio" className="form-radio" name="accountType" value="personal" ></input>
                                <span class="ml-2">ชาย</span>
                            </label>

                            <label class="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="accountType" value="busines"></input>
                                <span class="ml-2">หญิง</span>
                            </label>

                            <label class="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="accountType" value="busines"></input>
                                <span class="ml-2">ไม่ระบุ</span>
                            </label>

                        </div>

                    </div>

                    <button class=" text-bb hover:text-white bg-YY border-0 py-2 px-6 focus:outline-none hover:bg-bottomS rounded text-lg">สมัครสมาชิก</button>
      
                </div>
            
            </div>
                </div>

        </div>



     </div>

    )
}