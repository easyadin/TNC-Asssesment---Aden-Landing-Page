import { Logo } from "./Logo"

export const Header = () => {
    return (
        <div className="p-8 flex flex-row items-center fixed top-0 justify-between w-full z-50" style={{ zIndex: 999 }}>
            {/* Left */}
            <div className="flex flex-row items-center w-full">
                {/* Logo */}
                <Logo />
            </div>

            {/* Right */}
            <div className="flex flex-row items-center">
                {/* Navs for Large screen */}
                <div className="sm:flex hidden flex-row gap-4 text-sm text-gray-400 w-full font-medium whitespace-nowrap mr-4">
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">Who We are</div>
                    <div className="cursor-pointer">Our Technology</div>
                    <div className="cursor-pointer">Integration</div>
                </div>

                <div className="flex-row items-center justify-end cursor-pointer whitespace-nowrap hidden md:flex">
                    <span className="text-sm mr-4 font-bold" style={{ color: '#009EFF' }}>Launch your ICO</span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#009EFF' }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>

                <button className="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
        </div>
    )
}
