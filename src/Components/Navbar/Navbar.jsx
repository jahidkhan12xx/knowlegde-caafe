import profile from './profile.png'

const Navbar = () => {
    return (
        <div className='flex justify-between my-5 border-b-2 pb-4'>
           <h2 className=" text-5xl font-bold">Knowledge Cafe</h2>
           <img src={profile} alt="" />
        </div>
    );
};

export default Navbar;