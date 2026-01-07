import React, { useState } from "react"

function ContactSubmitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "6b5bba12-0d31-4046-aee7-2c38f55919af",
          subject: "New Contact Message",
          ...formData,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess("Message sent successfully ✅")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setError(data.message || "Something went wrong ")
      }
    } catch (err) {
      setError("Network error ")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-full rounded-md bg-[#FFFFFF4D] px-4 py-2 outline-none placeholder:text-[#FFFFFF99]"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email Address"
        className="w-full rounded-md bg-[#FFFFFF4D] px-4 py-2 outline-none placeholder:text-[#FFFFFF99]"
      />

      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="w-full rounded-md bg-[#FFFFFF4D] px-4 py-2 outline-none placeholder:text-[#FFFFFF99]"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        placeholder="Your message"
        className="w-full rounded-md bg-[#FFFFFF4D] px-4 py-2 outline-none placeholder:text-[#FFFFFF99] resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          mt-2
          bg-gradient-to-r from-[#C961DE] to-[#2954A3]
          px-6 py-2
          rounded-md
          text-sm font-medium
          hover:opacity-90 transition
          disabled:opacity-60
          cursor-pointer
        "
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      {success && <p className="text-green-400 text-sm">{success}</p>}
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  )
}


export default ContactSubmitForm
