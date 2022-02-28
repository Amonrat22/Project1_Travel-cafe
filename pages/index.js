import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
    return ( 
    <div>
        <Head>
        <title> TRAVEL CAFE </title> <
        link rel = 'icon'
        href = '/favicon.ico' / >
        </Head> <Navbar> </Navbar>

        <div className=''>
            <div>
                <div className = ' bg-Grey  ' ><img className='object-cover h-96 w-full align-middle' src='https://www.wandeehouse.com/static-cache/static/upload/content/1/883/duklong-21-1200x630.jpg'></img>
                    
                </div> 
            </div>

            <div className=' '>
                <div className=' '>
                    <div className='flex justify-center -m-5 '>
                        <div>
                        <input className="  w-96 px-4 py-2 shadow bg-backG appearance-none border border-backG hover:border-bb  rounded-l-lg w-full py-2 px-3 text-bb leading-tight focus:outline-none focus:shadow-outline" id="usernamecafe" type="text" placeholder="ค้นหาคาเฟ่ที่ต้องการไป"></input>
                        <button className='px-4 text-white bg-bottomS border border-bottomS hover:bg-bb hover:border-bb rounded-r-lg h-10'>Search</button>
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <div className='container mx-auto py-20'>
                    <p className=' text-center text-2xl '> แนะนำร้านคาเฟ่</p>
                </div>
                <div className=' grid grid-cols-3 gap-4 mx-56'>
                    <div>
                        <a href='/post'>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>

                        <a href='/post'>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>                            
                        </div>
                        </a>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    <div>
                        <a>
                            <div>
                                <img className=' object-cover h-72 w-full' src='https://i.pinimg.com/564x/5e/2f/7b/5e2f7beb1f83ff80d4912ddc76bb6598.jpg' ></img>
                            </div>
                        </a>
                        <div className=' place-content-between grid grid-cols-2 bg-Grey '>
                            <div href='' className=' text-left ml-3 mt-3 mb-3 '>Onibus Coffee</div>
                            <div href='' className=' text-right mr-3 mt-3 mb-3 '> 60 views</div>

                        </div>
                    </div>

                    


                </div>
            </div>

            <div className=' container bg-Bb mx-auto h-72 mt-20'>
                <div className=' flex items-center justify-center h-24'>
                    <a className=' text-bb font-semibold text-2xl '>จุดหมายที่จะไป</a>
                </div>

                <div className=' grid grid-cols-2 gap-4 mx-96'>
                    <div className='  text-right mr-10'>
                        <a className=' border-2 m-16'>ภูมิภาค
                        </a></div>
                    <div className=' ml-10'>จังหวัด</div>

                </div>

            </div>
            
        </div>

         
    </div>
    );
}