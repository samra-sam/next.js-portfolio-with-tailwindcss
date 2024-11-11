const page = () => {
    return (
      <div className='flex flex-col gap-8 items-center lg:my-10 my-28 md:mx-40 mx-16'>
        <h1 className="md:text-5xl sm:text-4xl text-3xl text-[#5500e9]">CONTACT ME</h1>
        <p className="text-center sm:mx-10 mx-0">
        Get in touch today to discuss your project needs or any inquiries. We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. Reach out now!
        </p>
        <div className="flex sm:flex-row flex-col gap-10 mt-10">
        <div className="flex flex-col gap-5">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea name="message" id="message" rows={3} placeholder="Message"></textarea>
          <button className="bg-[#5500e9] w-[150px] py-2 rounded-full">Send Message</button>
        </div>

          
        <map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231649.78350580044!2d66.99251014275394!3d24.879969905155086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3398c21ee360d%3A0x6114a9b297d321eb!2sShah%20Faisal%20Town%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731223790156!5m2!1sen!2s" width="600"  height="450"></iframe>
        </map>

      </div>
    </div>
  )
}

  export default page