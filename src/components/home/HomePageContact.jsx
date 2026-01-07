import React from "react"
import girlImage2 from "../../assets/images/girlImage2.png"
import mail from "../../assets/images/mail.png"
import phone from "../../assets/images/phone.png"
import ContactSubmitForm from "../contactSubmitForm/ContactSubmitForm"

function HomePageContact() {
    return (
        <section className="relative min-h-screen bg-[#0F103F] flex items-center justify-center  ">

            {/* MAIN CARD */}
            <div
                className="
          relative z-10
          w-[90%] md:w-[80%] max-w-[900px]
          bg-[#2F2F8A99]
          rounded-xl
          px-[10px] md:px-10 py-12
          grid grid-cols-1 md:grid-cols-2
          gap-10
          text-white
        "
            >
                {/* LEFT CHARACTER IMAGE */}
                <img
                    src={girlImage2}
                    alt="Girl sitting"
                    className="hidden md:block absolute left-[-120px] top-[-330px] w-[280px] z-15"
                />
                {/* LEFT CONTENT */}
                <div >
                    <h2 className="text-3xl font-serif font-bold tracking-wide mb-4">Get in touch</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                        I'm very approachable and would love to speak to you.
                        Feel free to call, send me an email. Follow me on social
                        media or simply complete the enquiry form.
                    </p>

                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                                <img
                                    className=' h-[25px] w-[25px] invert cursor-pointer'
                                    src={phone}
                                    alt='phone'
                                />
                            </span>
                            <span className="text-[12px] md:text-[14px] ">+91 7895763977</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                                <img
                                    className=' h-[12px] w-[12px]  cursor-pointer'
                                    src={mail}
                                    alt='Mail'
                                />
                            </span>
                            <span className="text-[12px] md:text-[14px] ">priyankachandel348@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>

                    {/* contact submit form using web3forms  */}
                    <ContactSubmitForm />

                </div>
            </div>
        </section>
    )
}

export default HomePageContact
