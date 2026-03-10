'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'トップ' },
  { href: '/about', label: '当院について' },
  { href: '/faq', label: 'よくある質問' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={`text-xs font-medium tracking-widest font-serif italic transition-colors ${
              scrolled ? 'text-[#D47A5A]' : 'text-[#D47A5A]'
            }`}
          >
            Karada Remake
          </span>
          <span
            className={`text-lg font-bold transition-colors ${
              scrolled ? 'text-[#2E5C50]' : 'text-white'
            }`}
          >
            健やか整体院
          </span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#D47A5A] ${
                scrolled ? 'text-[#333333]' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#cta"
            className="bg-[#D47A5A] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#B5603F] transition-colors shadow-md"
          >
            Web予約
          </a>
        </nav>

        {/* ハンバーガー */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-[#333]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-[#333]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-[#333]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#333] font-medium py-1 border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="bg-[#D47A5A] text-white text-center font-bold px-5 py-3 rounded-full"
          >
            Web予約はこちら
          </a>
        </div>
      )}
    </header>
  )
}
