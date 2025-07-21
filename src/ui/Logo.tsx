
import profileImage from "../assets/images/portfolio-profile.jpg"

const Logo = () => {
    return <span className='flex justify-start items-center gap-x-1'>
        <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: `url(${profileImage})` }}
        />        
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Henry Orji</h2>
    </span>;
};

export default Logo;
