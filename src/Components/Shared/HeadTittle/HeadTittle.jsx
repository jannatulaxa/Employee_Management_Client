/* eslint-disable react/prop-types */
const HeadTittle = ({ tittle, heading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto mt-10 mb-4 ">
      <p className="text-2xl font-semibold italic text-[#646EE4] border-y-[2px] border-w">--- {tittle} ---</p>
      <h3 className="text-sm ">
        {heading}
      </h3>
    </div>
  );
};


export default HeadTittle;