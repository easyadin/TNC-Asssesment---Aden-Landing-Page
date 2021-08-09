export const BackGrid = () => {
    return (
        <div className="z-0 fixed h-screen w-screen top-0 grid grid-cols-4 lg:grid-cols-6 gap-4 opacity-5">
            <div className="border-r border-gray-100"></div>
            <div className="border-r border-gray-100"></div>
            <div className="border-r border-gray-100"></div>
            <div className="border-r border-gray-100"></div>
            <div className="border-r border-gray-100 hidden lg:block"></div>
            <div className="border-r border-gray-100 hidden lg:block"></div>
        </div>
    )
}
