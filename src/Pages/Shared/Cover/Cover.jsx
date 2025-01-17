import { Parallax } from "react-parallax";
const Cover = ({ title, coverImg }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="the Restaurant"
      strength={-200}
      className="w-full h-[700px] mb-20"
    >
      <div>
        <div className="hero min-h-screen mb-10">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
