import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section id="contact-me" className="pt-8 relative">
      <div className="container px-6 md:px-0 flex flex-col md:flex-row z-[5] relative">
        <div className="md:w-[50%] mr-14">
          <h3 className="text-4xl md:text-6xl leading-[40px] md:leading-[70px] border-b-4 border-b-darkGrey pb-8 text-darkGrey font-bold z-[5]">Searching for a Developer to join your team?</h3>
          <p className="mt-3 text-2xl md:text-3xl font-light text-grey">Let's create some <span className="font-bold z-[5]">great</span> things together!</p>
        </div>
        <form name="contact" className="mt-5 md:w-[50%]" method="POST" netlify>
          <div className="flex justify-between">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Your Name" className="w-[50%] mr-[10px] text-[18px] focus:outline-0 focus-visible:outline-0 rounded-full border-[1px] border-darkGrey px-8 py-2 text-gray-900 placeholder:text-darkGrey"/>
            <input type="email" name="email" placeholder="Your Email" className="w-[50%] rounded-full text-[18px] focus:outline-0 focus-visible:outline-0 border-[1px] border-darkGrey px-8 py-2 text-gray-900 placeholder:text-darkGrey"/>
          </div>
          <div className="relative w-[100%] flex items-center mt-6 rounded-full border-[1px] border-darkGrey px-8 py-2 bg-white">
          <textarea name="message" placeholder="How can I help you?" className="resize-none w-[90%] text-[18px] focus:outline-0 focus-visible:outline-0 text-gray-900 placeholder:text-darkGrey"></textarea>
            <button type="submit" className="absolute right-2 rounded-full bg-darkGrey w-[50px] h-[50px] flex justify-center items-center">
              <FontAwesomeIcon icon={faLongArrowRight} className="text-white text-[20px]" />
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white w-full h-[120px] md:h-[180px] absolute bottom-0"></div>
    </section>
  )
}

export default Contact
