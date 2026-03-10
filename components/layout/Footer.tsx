import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1E3D35] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 院情報 */}
          <div>
            <p className="text-[#D47A5A] font-serif italic text-sm tracking-widest mb-1">Karada Remake</p>
            <h3 className="text-white text-xl font-bold mb-4">健やか整体院</h3>
            <p className="text-sm leading-loose">
              〒150-0043<br />
              東京都渋谷区道玄坂1丁目〇〇<br />
              渋谷駅 徒歩3分
            </p>
            <p className="text-sm mt-3">
              TEL: 03-XXXX-XXXX<br />
              受付: 10:00〜20:00（月曜定休）
            </p>
          </div>

          {/* ナビ */}
          <div>
            <h4 className="text-white font-bold mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'トップページ' },
                { href: '/about', label: '当院について' },
                { href: '/faq', label: 'よくある質問' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#D47A5A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-4">ご予約・お問い合わせ</h4>
            <p className="text-sm mb-4">
              初回カウンセリングは<br />
              <span className="text-[#D47A5A] font-bold">無料</span>で承っております。
            </p>
            <a
              href="#cta"
              className="inline-block bg-[#D47A5A] text-white font-bold px-6 py-3 rounded-full hover:bg-[#B5603F] transition-colors text-sm"
            >
              Web予約はこちら
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} からだリメイク整体院 健やか. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
