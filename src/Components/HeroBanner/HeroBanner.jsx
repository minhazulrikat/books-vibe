import heroImage from '../../assets/hero-image.png';

const HeroBanner = () => {
  return (
   <div className="hero bg-base-300 min-h-[60vh] container mx-auto px-4 rounded-xl my-6 md:my-10 py-6 md:py-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='bg-base-300 w-1/2'>
        <img
      alt="book vibe hero component"
      src={heroImage}
      className="max-w-full h-auto "
    />
    </div>
    <div className='space-y-6'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary capitalize">View The List</button>
    </div>
  </div>
</div>
  );
};

export default HeroBanner;
