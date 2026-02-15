// Contact section - Form with FormSubmit integration for email submissions
import React from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`min-h-screen px-20 py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white tracking-wider">
          GET <span className="text-purple-400">IN TOUCH</span>
        </h2>
      </div>

      <div className="flex gap-20">

        {/* LEFT SIDE INFO */}
        <div className="w-1/3">

          <h3 className="text-white text-2xl font-semibold mb-6">
            Don't Be Shy
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Feel free to get in touch with me. I'm always open to discussing 
            new projects, creative ideas, or opportunities.
          </p>

          <div className="space-y-6 text-gray-300">

            <div>
              <p className="text-purple-400 font-medium">ADDRESS</p>
              <p>Bangalore, India</p>
            </div>

            <div>
              <p className="text-purple-400 font-medium">MAIL ME</p>
              <p>kishorekn26@gmail.com</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM - Uses FormSubmit for backend-free email handling */}
        <div className="w-2/3">

          <form 
            action="https://formsubmit.co/kishorekn26@gmail.com" 
            method="POST"
            className="space-y-6"
          >

            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New contact from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="flex gap-6">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                required
                className="w-1/2 bg-white/5 backdrop-blur-sm border border-white/20 
                rounded-lg px-4 py-3 text-white placeholder-gray-400
                focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:ring-2 focus:ring-purple-500/50 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                required
                className="w-1/2 bg-white/5 backdrop-blur-sm border border-white/20 
                rounded-lg px-4 py-3 text-white placeholder-gray-400
                focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:ring-2 focus:ring-purple-500/50 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="YOUR SUBJECT"
              required
              className="w-full bg-white/5 backdrop-blur-sm border border-white/20 
              rounded-lg px-4 py-3 text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500 focus:bg-white/10
              focus:ring-2 focus:ring-purple-500/50 transition"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="YOUR MESSAGE"
              required
              className="w-full bg-white/5 backdrop-blur-sm border border-white/20 
              rounded-lg px-4 py-3 text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500 focus:bg-white/10
              focus:ring-2 focus:ring-purple-500/50 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 
              text-white font-semibold px-8 py-3 
              rounded-full transition duration-300 
              shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70
              hover:scale-105"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact
