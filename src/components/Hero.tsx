import hero from "../assets/hero.png"

const Hero=()=> {
    return (
        <div>
            <img src={hero} className='w-full max-h-[600px] object-cover' alt="" />
            {/* object cover means it is goint to keep aspect ratio */}
        </div>
    );
};

export default Hero;
