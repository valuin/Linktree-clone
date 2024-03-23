import Ellipse3 from "./assets/Ellipse3.png";

function App() {
  return (
    <>
      <section className="bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex items-center justify-center overflow-hidden  w-300 h-600 bg-grey rounded-xl">
            <div className="flex flex-col overflow-hidden items-center ">
              <img
                src={Ellipse3}
                alt="Image"
                className=" w-24 h-24 mb-5 object-cover rounded-full"
              />
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center">
                Valtrizt Khalifah
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-primary-green mb-5 text-center">
                Jakarta, Indonesia
              </h2>
              <p className="text-sm sm:text-base text-white text-center my-4 ">
                Aspiring Full Stack Developer{" "}
              </p>
              <ul className="w-full p-3 mt-4 space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/valtrizt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">Instagram</button>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/valtrizt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">Linkedin</button>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/valuin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">Github</button>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/user/31ghprkxqxzyinr5rf27bhveg5wu?si=b4d3011b87ca4693"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">Spotify</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
