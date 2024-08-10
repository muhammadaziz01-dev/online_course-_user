import "./style.scss";


const index = () => {
    return (
        <header className="  shadow-md w-full  ">
            <nav className="flex items-center justify-between py-2.5 container mx-auto px-2.5">
                <div>
                    <a href="#" className="text-xl font-bold">
                        <img className="w-[100px] h-[60px] object-fill" src="https://cdn3d.iconscout.com/3d/premium/thumb/code-4900589-4079217.png?f=webp" alt="logo" />
                    </a>
                </div>
                <div>
                    <button>
                        login
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default index;