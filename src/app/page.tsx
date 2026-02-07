'use client'
 
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-veedco-cyan selection:text-black">
      
      {/* Sidebar - Fixed Left */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-gray-800 bg-black z-40 hidden md:flex flex-col">
        {/* Logo Area */}
        <div className="p-6">
          <h1 className="text-2xl font-display font-bold text-gradient flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-veedco-cyan to-veedco-cyan-light flex items-center justify-center text-black font-bold text-xl">V</span>
            Veedco
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link 
            href="/auth/signup" 
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-xl transition-all group"
          >
            {/* Explore Icon */}
            <svg className="w-5 h-5 group-hover:text-veedco-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <span className="font-medium">Explore</span>
          </Link>

          <Link 
            href="/auth/signup" 
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-xl transition-all group"
          >
            {/* Image to Video Icon */}
            <svg className="w-5 h-5 group-hover:text-veedco-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-medium">Image to Video</span>
          </Link>

          <Link 
            href="/auth/signup" 
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-xl transition-all group"
          >
            {/* Text to Video Icon */}
            <svg className="w-5 h-5 group-hover:text-veedco-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <span className="font-medium">Text to Video</span>
          </Link>
        </nav>

        {/* Bottom Auth Link in Sidebar */}
        <div className="p-4 border-t border-gray-800">
          <Link href="/auth/login" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Login / Sign up
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 relative">
        
        {/* Top Header (Login Button) */}
        <header className="absolute top-0 right-0 p-6 z-50 flex justify-end">
          <Link 
            href="/auth/login"
            className="px-6 py-2 bg-gray-900 border border-gray-700 hover:border-veedco-cyan rounded-full text-sm font-semibold transition-all hover:text-veedco-cyan"
          >
            Sign In
          </Link>
        </header>

        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          
          {/* Hero Section / Prompt Bar */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
              What do you want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-veedco-cyan to-white">create?</span>
            </h2>
            
            {/* Main Prompt Input Box */}
            <div className="relative max-w-3xl mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-veedco-cyan to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
              <div className="relative bg-[#0F0F0F] border border-gray-800 rounded-2xl p-2 flex items-center shadow-2xl">
                <div className="pl-4 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your imagination... (e.g., A cyberpunk city in rain)"
                  className="w-full bg-transparent border-none focus:ring-0 text-white text-lg placeholder-gray-500 py-4 px-4"
                />
                <Link 
                  href="/auth/signup"
                  className="p-3 bg-gradient-to-r from-veedco-cyan to-veedco-cyan-light rounded-xl hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <div className="flex gap-4 mt-4 justify-center text-sm text-gray-500">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-veedco-cyan"></span> Image</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Video</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Assist</span>
              </div>
            </div>
          </div>

          {/* Model Showcase (What's new style) */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-200">Featured Models</h3>
              <Link href="/auth/signup" className="text-sm text-veedco-cyan hover:underline">View all</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Veedco Pro */}
              <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-veedco-cyan transition-all">
                {/* Simulated Image Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">🎯</div>
                </div>
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-veedco-cyan text-xs font-bold tracking-wider uppercase mb-2 block">Our Model</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Veedco Vision Pro</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      High fidelity, 1080p generation with enhanced motion.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 2: Sora 2 */}
              <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">🌟</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-purple-400 text-xs font-bold tracking-wider uppercase mb-2 block">OpenAI</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Sora 2</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      Realistic video generation with complex scenes.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 3: Kling 3.0 */}
              <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">🔥</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-orange-400 text-xs font-bold tracking-wider uppercase mb-2 block">New Arrival</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Kling 3.0 Unlimited</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      Unlimited generation capabilities for pro users.
                    </p>
                  </div>
                </div>
              </Link>

               {/* Card 4: Runway Gen 4.5 */}
               <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">✈️</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-green-400 text-xs font-bold tracking-wider uppercase mb-2 block">Runway</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Gen 4.5</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      Advanced camera controls and artistic styles.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 5: Grok Imagine */}
              <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-white transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-black group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">👽</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-white text-xs font-bold tracking-wider uppercase mb-2 block">xAI</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Grok Imagine</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      Fast, unfiltered creativity for bold ideas.
                    </p>
                  </div>
                </div>
              </Link>
              
               {/* Card 6: Cinematic Camera */}
               <Link href="/auth/signup" className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-400 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">🎥</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feature</span>
                    <h4 className="text-2xl font-bold text-white mb-1">Camera Angles</h4>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      Control the director's eye in your videos.
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>

        </div>
        
        {/* Simple Footer */}
        <footer className="text-center py-8 text-gray-600 text-sm">
          &copy; 2026 Veedco AI. All rights reserved.
        </footer>
      </main>
    </div>
  )     
}
 
