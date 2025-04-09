import React from 'react'
import logo from "../assets/logo.png"
import './Homepage.css'
import { Link } from 'react-router-dom'
import { FaFacebook,FaLinkedin, FaInstagram, FaIdCard, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { Share2, Package, DollarSign, Leaf, Search, Shield, Users } from 'lucide-react';

export default function Homepage() {
  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-50 to-red-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <Share2 className="h-8 w-8 text-red-600" /> */}
              {/* <span className="ml-2 text-2xl font-bold text-gray-900">BorrowBee</span> */}
              <img className="w-50 h-10" src={logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              {/* <a href="#how-it-works" className="text-gray-900 hover:text-red-600">How It Works</a> */}
              {/* <a href="#features" className="text-gray-900 hover:text-red-600">Features</a> */}
              <a href="#features" className="text-gray-900 hover:text-red-600">About Us</a>
              <Link to="https://forms.gle/Rsb2DyjxBQEqvnd28">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                Sign up
              </button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Borrow What You Need, Share What You Don't
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join the sharing revolution with BorrowBee. Save money, reduce waste, and connect with your community through our secure peer-to-peer rental platform.
          </p>
          <div className="flex justify-center space-x-4">
            {/* <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition">
              Start Borrowing
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg border-2 border-black hover:bg-gray-900 transition">
              List Your Items
            </button> */}
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Search className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Find What You Need</h3>
              <p className="text-gray-700">Browse thousands of items available in your community</p>
            </div>
            <div className="text-center">
              <Package className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Borrow or Lend</h3>
              <p className="text-gray-700">Connect with owners and arrange the rental details</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Save Money</h3>
              <p className="text-gray-700">Pay only for what you use, earn from what you don't</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose BorrowBee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaIdCard className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Verified with AADHAAR</h3>
              <p className="text-gray-700">AADHAAR-based user verification for trust & security</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaShieldAlt className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Insurance-Backed Rentals</h3>
              <p className="text-gray-700">Insurance-backed rentals for peace of mind</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaTruck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flexible Logistics</h3>
              <p className="text-gray-700">Flexible logistics – pick up yourself or opt for doorstep delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Join BorrowBee?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start borrowing and lending today. Join thousands of users making better use of resources.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition">
            Sign Up today!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                {/* <Share2 className="h-8 w-8 text-red-600" /> */}
                {/* <span className="ml-2 text-2xl font-bold">BorrowBee</span> */}
                <img className="w-50 h-10" src={logo} alt="" />
              </div>
              <p className="mt-4 text-gray-400 max-w-sm">
              Borrow what you need, share what you don't 
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-red-500">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-500">Vision/Mission</a  ></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-500">Goals</a></li>
                  {/* <li><a href="#" className="text-gray-400 hover:text-red-500">Careers</a></li> */}
                  {/* <li><a href="#" className="text-gray-400 hover:text-red-500">Press</a></li> */}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-red-500">Help Center</a></li>
                  {/* <li><a href="#" className="text-gray-400 hover:text-red-500">Safety</a></li> */}
                  <li><a href="#" className="text-gray-400 hover:text-red-500">Terms of Service</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          <div>
                <h3 className="text-lg font-semibold mb-4"></h3>
                <ul className="space-y-2 flex">
                  <li><a href="https://www.instagram.com/borrowbee" className="m-4 p-4 text-gray-400 hover:text-red-500"><FaInstagram size={24} color="#E1306C" /></a></li>
                  <li><a href="https://www.facebook.com/BorrowBeeByCudaIQ/" className="m-4 p-4 text-gray-400 hover:text-red-500"><FaFacebook size={24} color="#4267B2" /></a></li>
                  <li><a href="https://www.linkedin.com/company/borrowbee" className="m-4 p-4 text-gray-400 hover:text-red-500"><FaLinkedin size={24} color="#0A66C2" /></a></li>
                </ul>
              </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 BorrowBee. All rights reserved by CudaIQ.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
