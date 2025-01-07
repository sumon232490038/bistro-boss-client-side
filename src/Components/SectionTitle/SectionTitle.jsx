const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className=" w-4/12 text-center  mx-auto mb-10">
      <h3 className="text-yellow-600 mb-2 italic">--- {subHeading} ---</h3>
      <h1 className="border-y-4 p-4 text-4xl uppercase">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
