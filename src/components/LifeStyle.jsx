import Gallery from "./Gallery";

const LifeStyle = () => {
  return (
    <div className="flex z-[2] w-[100%] animate-image">
      <Gallery />
      <div className="bg-white w-[30%] rounded-r-3xl pt-[7%] px-12">
        <h3 className="text-[20px] font-bold">Passionate Developer. Adventurous Soul. Lover of Music, Festivals, and Exploration.</h3>
        <p>From coding to conquering new horizons, my journey knows no bounds. Whether I'm immersed in lines of code or dancing to the rhythm of live music at festivals, life is an exhilarating adventure. Traveling fuels my curiosity, and discovering new places ignites my spirit. When I'm not diving into code, you'll find me hitting the gym or exploring nature through invigorating hikes. Join me as I navigate the thrilling intersection of technology, travel, and self-discovery. Let's create amazing experiences together!</p>
      </div>
    </div>
  )
}

export default LifeStyle