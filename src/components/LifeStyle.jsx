import Gallery from "./Gallery";

const LifeStyle = () => {
  return (
    <div className="flex flex-col md:flex-row z-[2] bg-white rounded-3xl overflow-hidden h-[50%] md:h-[84vh] md:min-h-[580px] animate-image">
      <Gallery />
      <div className=" w-[100%] md:w-[30%] py-[7%] px-12 leading-7 md:px-12">
        <h3 className="text-[24px] mb-4 font-bold">Life Beyond the Code.</h3>
        <p className="text-md">In my daily life, I aim to strike a balance between spontaneity and discipline.
        I firmly believe that taking time to recharge is essential for long-term happiness and productivity.
        I derive joy from exploring and learning, whether it's about myself or the world around me.
        My personal sources of happiness and energy include travel (no wonder!), enjoying music and festivals,
        tuning into podcasts, and staying active at the gym. Life is an exciting journey, and though
        I may not have all the answers, I'm definitely enjoying the process of discovering them.</p>
      </div>
    </div>
  )
}

export default LifeStyle
