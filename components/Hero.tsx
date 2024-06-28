function Hero() {
  return (
    <section className="py-11 container">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br />
        dream job
      </h1>
      {/* <p className="text-center text-gray-600 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero
        quis laborum illo quia unde voluptatem laudantium dicta alias inventore
        blanditiis nam natus nemo, doloremque repellendus sint aliquid? Nam,
        corrupti.
      </p>
 */}
      <form className="flex gap-2 mt-4  max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded outline-blue-700"
          placeholder="Search phrase..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
