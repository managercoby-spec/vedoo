'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-gradient">
            Veedco
          </h1>
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login"
              className="text-gray-300 hover:text-white transition px-4 py-2"
            >
              Login
            </Link>
            <Link 
              href="/auth/signup"
              className="bg-gradient-to-r from-veedco-cyan to-veedco-cyan-light px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-veedco-cyan/30 transition text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Create for <span className="text-gradient">Free</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Transform your ideas into stunning AI videos instantly
            </p>

            {/* CTA Box */}
            <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl bg-black border border-gray-700 focus:border-veedco-cyan focus:outline-none text-white placeholder-gray-500"
                />
                <Link 
                  href="/auth/signup"
                  className="px-8 py-4 bg-gradient-to-r from-veedco-cyan to-veedco-cyan-light rounded-xl font-bold hover:shadow-lg hover:shadow-veedco-cyan/40 transition whitespace-nowrap text-center"
                >
                  Start Free
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                ✨ 100 free credits • No credit card required
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
            <Link 
              href="/dashboard"
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-veedco-cyan transition group"
            >
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-sm group-hover:text-veedco-cyan transition">Explore</div>
            </Link>
            <Link 
              href="/dashboard/image-to-video"
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-veedco-cyan transition group"
            >
              <div className="text-3xl mb-2">🎬</div>
              <div className="font-semibold text-sm group-hover:text-veedco-cyan transition">Image to Video</div>
            </Link>
            <Link 
              href="/dashboard/text-to-video"
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-veedco-cyan transition group"
            >
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold text-sm group-hover:text-veedco-cyan transition">Text to Video</div>
            </Link>
            <Link 
              href="/dashboard/my-media"
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-veedco-cyan transition group"
            >
              <div className="text-3xl mb-2">📁</div>
              <div className="font-semibold text-sm group-hover:text-veedco-cyan transition">My Media</div>
            </Link>
          </div>

          {/* AI Models Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">
              Powered by <span className="text-gradient">Advanced AI Models</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Veedco Vision Pro - Featured */}
              <div className="relative bg-gradient-to-br from-veedco-cyan/20 via-gray-900 to-gray-900 border-2 border-veedco-cyan rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-3 right-3">
                  <span className="bg-veedco-cyan text-xs font-bold px-3 py-1 rounded-full">
                    OUR MODEL
                  </span>
                </div>
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-veedco-cyan to-veedco-cyan-light rounded-xl flex items-center justify-center text-2xl mb-3">
                    🎯
                  </div>
                  <h4 className="font-bold text-lg mb-1">Veedco Vision Pro</h4>
                  <p className="text-xs text-gray-400 mb-3">Best quality & speed</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">1080p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">24 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">10s</span>
                  </div>
                </div>
              </div>

              {/* Sora 2 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🌟
                  </div>
                  <h4 className="font-bold text-lg mb-1">Sora 2</h4>
                  <p className="text-xs text-gray-400 mb-3">OpenAI's latest</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">720p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">30 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">10s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Standard plan+</div>
              </div>

              {/* Kling 2.6 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-orange-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🔥
                  </div>
                  <h4 className="font-bold text-lg mb-1">Kling 2.6</h4>
                  <p className="text-xs text-gray-400 mb-3">High quality output</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">1080p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">30 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">10s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Standard plan+</div>
              </div>

              {/* RunwayML Gen-3 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    ⚡
                  </div>
                  <h4 className="font-bold text-lg mb-1">Runway Gen-3</h4>
                  <p className="text-xs text-gray-400 mb-3">Creative control</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">720p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">24 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">10s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Ultimate plan+</div>
              </div>

              {/* Pika 1.5 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-pink-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    💫
                  </div>
                  <h4 className="font-bold text-lg mb-1">Pika 1.5</h4>
                  <p className="text-xs text-gray-400 mb-3">Fast generation</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">1080p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">24 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">3s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">All plans</div>
              </div>

              {/* Google Veo 3.1 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🎨
                  </div>
                  <h4 className="font-bold text-lg mb-1">Google Veo 3.1</h4>
                  <p className="text-xs text-gray-400 mb-3">Realistic results</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">1080p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">24 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">8s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Ultimate plan+</div>
              </div>

              {/* PixVerse V5 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-veedco-cyan/50 transition group">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🎭
                  </div>
                  <h4 className="font-bold text-lg mb-1">PixVerse V5</h4>
                  <p className="text-xs text-gray-400 mb-3">Artistic style</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-800 px-2 py-1 rounded">1080p</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">24 FPS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">7s</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Standard plan+</div>
              </div>

              {/* More Models */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center justify-center group hover:border-veedco-cyan transition cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-2">➕</div>
                  <div className="font-semibold text-sm">More Models</div>
                  <div className="text-xs text-gray-500 mt-1">Coming soon</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-veedco-cyan to-veedco-cyan-light rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Generate videos in seconds, not hours</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-veedco-cyan to-veedco-cyan-light rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-2">Precise Control</h3>
              <p className="text-gray-400">Fine-tune every aspect of your creation</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-veedco-cyan to-veedco-cyan-light rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                💎
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-400">Industry-leading AI models</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p className="text-sm">&copy; 2026 Veedco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
