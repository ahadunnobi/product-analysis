import React from 'react'
import { Link } from 'react-router-dom';
import useReview from '../../Hook/useReview';
import Reviewdata from '../Reviewdata/Reviewdata';
import './home.css'

const Home = () => {
        const [Review] = useReview();
        Review.splice(3, 10);
        return (
                <>
                <div className='home-cotainer bg-gray-300'>
                       <div className="product-detail bg-slate-200 p-12 rounded-lg">
                        <h1 className='text-violet-900 text-left text-4xl m-3 font-mono font-bold  '>Visual Studio Code</h1>
                        <p className='indent-8 text-left font-sans font-semibold'>Visual Studio Code is a free source code editor developed by Microsoft for Windows, Linux, and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring. The editor is also highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. Visual Studio Code is an ideal tool for web development, allowing developers to quickly and easily create, debug, and deploy applications.</p>
                        <button className="flex justify-center mt-2"><Link to={'https://product-analysis-an.netlify.app'}><div className=" hover:text-gray-300 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">LIVE DEMO</div></Link></button>
                       </div>
                       <div className='product-imag'>
                       <img  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS code"/>
                       </div>
                </div>
                <div className='pb-16'>
                        <h1 className='m-3 text-5xl text-center font-mono font-semibold pt-5'> WHAT OUR CUSTOMER SAY ABOUT US!</h1>
                        <div className='flex flex-row flex-wrap gap-24 justify-center'>
                        {
                                Review.map(Review => <Reviewdata key={Review.id} Review={Review}></Reviewdata>)
                        }
                        </div>
                        <div className='flex justify-evenly'>
                        <button className='mt-5 w-52'><Link to={'/review'}><div className=" hover:text-gray-300 hover: bg-blue-500 bg-gray-700text-white px-3 py-5 rounded-md text-sm font-medium font-extrabold decoration-indigo-50 text-lg" aria-current="page">SEE ALL REVIEWS</div></Link></button>
                        </div>
                </div>
                </>
        );
};

export default Home;