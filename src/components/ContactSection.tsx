"use client";

import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { FaDribbble, FaGoogle, FaInstagram } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import emailjs from '@emailjs/browser'

// Define types
interface FormData {
  name: string;
  email: string;
  message: string;
}

type AlertType = 'success' | 'danger' | 'warning';

// Simple Alert component
const Alert = ({ type, text }: { type: AlertType; text: string }) => {
  const styles = {
    success: 'border-green-400 text-green-700 bg-green-100',
    danger: 'border-red-400 text-red-700 bg-red-100',
    warning: 'border-yellow-400 text-yellow-700 bg-yellow-100'
  };

  return (
    <div className={`p-4 mb-4 border rounded-lg ${styles[type]}`}>
      {text}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [alertType, setAlertType] = useState<AlertType>("success")
  const [alertMessage, setAlertMessage] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showAlertMessage = (type: AlertType, message: string) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        "service_vkn9swj",
        "template_nnfvz3f",
        {
          from_name: formData.name,
          to_name: "Robi",
          from_email: formData.email,
          to_email: "robiulhassanrobi33@gmail.com",
          message: formData.message,
        },
        "GIC1ykCVoLPftxMwd"
      )
      
      if (result.status === 200) {
        setIsLoading(false)
        setFormData({ name: "", email: "", message: "" })
        showAlertMessage("success", "Your message has been sent successfully!")
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error: any) {
      setIsLoading(false)
      console.error('EmailJS error:', error)
      
    
      if (error?.text?.includes('Gmail_API') || error?.status === 412) {
        showAlertMessage("warning", "Email service is temporarily unavailable. Please contact me directly at robiulhassanrobi17@gmail.com")
      } else {
        showAlertMessage("danger", "Something went wrong! Please try again or contact me directly.")
      }
    }
  }

  return (
    <section id="contact" className='py-24 relative'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-7'>Get In Touch</h3>
            <p className='text-sm text-white/60 max-w-xl mb-6'>
              I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's connect.
            </p>
            
            <div className='space-y-6'>
              <div className='text-white/80'>
                <p className="text-white/60 text-sm mb-2">Email me directly at</p>
                <Link 
                  href="mailto:robiulhassanrobi17@gmail.com" 
                  className='hover:text-[#a855f7] transition-colors duration-300 text-lg underline'
                >
                  robiulhassanrobi17@gmail.com
                </Link>
              </div>

              <div>
                <p className="text-white/60 text-sm mb-4">Or follow me on</p>
                <div className='flex items-center gap-4 text-white/80'>
                  <Link 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='hover:text-[#a855f7] transition-colors duration-300'
                  >
                    <FaInstagram className='size-6'/>
                  </Link>
                  <Link 
                    href="https://www.dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='hover:text-[#a855f7] transition-colors duration-300'
                  >
                    <FaDribbble className='size-6'/>
                  </Link>
                  <Link 
                    href="https://www.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='hover:text-[#a855f7] transition-colors duration-300'
                  >
                    <FaGoogle className='size-6'/>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

         
          <ScrollReveal stagger={0.08}>
            <div className="border border-white/10 rounded-2xl bg-black/20 p-8 backdrop-blur-sm">
              {showAlert && <Alert type={alertType} text={alertMessage} />}
              
              <div className="flex flex-col items-start w-full gap-5 mb-8">
                <h2 className="text-2xl font-semibold text-white/90">Let's Talk</h2>
                <p className="font-normal text-white/60 text-sm">
                  Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                </p>
              </div>
              
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-white/40 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-colors duration-300"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-white/40 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-colors duration-300"
                    placeholder="JohnDoe@email.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-white/40 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-colors duration-300 resize-none"
                    placeholder="Share your thoughts..."
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 text-lg font-medium text-white text-center rounded-lg cursor-pointer bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:from-[#9333ea] hover:to-[#6d28d9] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {!isLoading ? "Send Message" : "Sending..."}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection