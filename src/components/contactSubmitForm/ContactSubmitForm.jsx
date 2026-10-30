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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        aria-label="Name"
        className="w-full rounded-xl border border-[#eae8ef] bg-[#faf9fc] px-4 py-3 text-sm text-[#242039] outline-none transition placeholder:text-[#9693a3] focus:border-[#304ffe] focus:ring-4 focus:ring-[#304ffe]/10"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email Address"
        aria-label="Email address"
        className="w-full rounded-xl border border-[#eae8ef] bg-[#faf9fc] px-4 py-3 text-sm text-[#242039] outline-none transition placeholder:text-[#9693a3] focus:border-[#304ffe] focus:ring-4 focus:ring-[#304ffe]/10"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Mobile Number"
        aria-label="Mobile number"
        className="w-full rounded-xl border border-[#eae8ef] bg-[#faf9fc] px-4 py-3 text-sm text-[#242039] outline-none transition placeholder:text-[#9693a3] focus:border-[#304ffe] focus:ring-4 focus:ring-[#304ffe]/10"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        placeholder="Your message"
        aria-label="Your message"
        className="w-full resize-none rounded-xl border border-[#eae8ef] bg-[#faf9fc] px-4 py-3 text-sm text-[#242039] outline-none transition placeholder:text-[#9693a3] focus:border-[#304ffe] focus:ring-4 focus:ring-[#304ffe]/10"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          mt-2 inline-flex items-center gap-2
          rounded-full bg-[#304ffe]
          px-6 py-3
          text-sm font-semibold text-white
          transition hover:bg-[#243fda] hover:shadow-lg hover:shadow-[#304ffe]/20
          disabled:cursor-not-allowed disabled:opacity-60
          cursor-pointer
        "
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      {success && <p role="status" className="text-sm text-green-700">{success}</p>}
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
    </form>
  )
}


export default ContactSubmitForm
