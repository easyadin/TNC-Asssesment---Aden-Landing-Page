import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AdenBadge } from './components/AdenBadge'
import { BackGrid } from './components/BackGrid'
import BodyBg from './components/BodyBg'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SocialMediaLinks } from './components/SocialMediaLinks'

export default function Home() {
  return (
    <>
      <Header />
      <BackGrid />

      <div className="grid gap-4 overflow-y-auto z-50 relative bg-skin-accent">
        {/* Hero Header Large Screen */}
        <section className="p-4 grid-cols-2 lg:grid max-w-screen-2xl mx-auto w-full">
          {/* Left */}
          <div className="h-full p-6 flex items-center justify-center">
            <div className="text-center lg:text-left">
              {/* Large Text */}
              <div className="text-4xl sm:text-7xl font-extrabold sm:max-w-md text-white text-center lg:text-left">The Aden Network</div>
              <div className="text-sm lg:text-base font-medium text-gray-400 max-w-sm xl:max-w-lg mt-4 text-center lg:text-left mx-auto lg:mx-0">A unique Blockchain platform designed to help ICO projects to reach more audiences and provides security to investors through our ICO Wallet.</div>
              {/* CTA */}
              <button className="font-bold text-sm sm:text-base border-gray-400 border-2 px-4 py-2 text-white mt-4 text-center lg:text-left">LAUNCH YOUR ICO</button>
            </div>

            {/* Section Footer */}
            <div className="flex flex-row justify-between absolute bottom-2 right-0 w-full p-4">
              {/* Social Networks */}
              <div>
                <SocialMediaLinks />
              </div>

              {/* Demo CTA */}
              <div className="flex flex-row items-center">
                <div className="font-bold text-base px-4 py-2 text-skin-accent">WATCH A DEMO</div>
                <button className="border-skin-accent border-2 p-4 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.744" height="14.679" viewBox="0 0 11.744 14.679"><path id="Icon_ionic-ios-play" data-name="Icon ionic-ios-play" d="M9,7.131V21.049a.358.358,0,0,0,.537.33L20.569,14.42a.394.394,0,0,0,0-.656L9.537,6.805A.355.355,0,0,0,9,7.131Z" transform="translate(-9 -6.751)" fill="#001454" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:flex hidden items-center justify-center h-full w-full">
            <div className="grid grid-cols-2 gap-4 items-center justify-center h-full text-gray-400 xl:p-32 relative z-50 max-h-80 xl:max-h-full h-full w-full">
              <div className="flex justify-center items-center h-full hover:shadow-lg cursor-pointer bg-skin-dark hover:text-skin-accent hover:bg-gray-400 font-bold transition-all delay-150 duration-350"> Mainnet</div>
              <div className="flex justify-center items-center h-full hover:shadow-lg cursor-pointer bg-skin-dark hover:text-skin-accent hover:bg-gray-400 font-bold transition-all delay-150 duration-350"> Architecture</div>
              <div className="flex justify-center items-center h-full hover:shadow-lg cursor-pointer bg-skin-dark hover:text-skin-accent hover:bg-gray-400 font-bold transition-all delay-150 duration-350"> Core</div>
              <div className="flex justify-center items-center h-full hover:shadow-lg cursor-pointer bg-skin-dark hover:text-skin-accent hover:bg-gray-400 font-bold transition-all delay-150 duration-350"> Protocol</div>
            </div>

            <div className="flex items-center justify-center h-full opacity-30 fixed top-0">
              <AdenBadge />
            </div>
          </div>
        </section>

        {/* Aden Features */}
        <section></section>

        {/* Aden Cons */}
        <section></section>

        {/* Footer */}
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}
