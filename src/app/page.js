/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function Home() {

  return (
    <body className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-indigo-900/80 backdrop-blur-sm z-50">
        {/* <div className="text-2xl font-bold tracking-tight">🐐  
        SHIROMO 
        <Image src="/sonic.png" alt="sonic-logo" width={30} height={30} /> </div> */}
        <div className="flex items-center text-2xl font-bold tracking-tight">
          <span> SHIROMO </span>
          <Image src="/sonic.png" alt="sonic-logo" width={30} height={30} className="ml-2" />
        </div>

        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-indigo-300 transition-colors">About</a>
          <a href="#roadmap" className="hover:text-indigo-300 transition-colors">Roadmap</a>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-7xl font-bold leading-tight">
              Meet
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> SHIROMO </span>
            </h1>
            <p className="text-xl text-indigo-200 leading-relaxed">
              The New spirited mascot of Sonic Labs, bringing style and innovation to
              the blockchain frontier! Just like Holy White Cat with Necklaces, but with extra
              tigerpower!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
                <a target="_blank" href="">Buy SHIROMO and join the eternity</a>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </button>

              {/* <button className="border border-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-800/30 transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                <a target="_blank" href="">DEX Screener</a>
              </button> */}
            </div>
            <div className="flex flex-wrap gap 4">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Available In
              </h2>
              <div className="grid grid-flow-col auto-cols-max items-center gap-4">
                <a target="_blank" href="" >
                  <Image src="/logo-degen.png" alt="dagen-logo" width={200} height={100} />
                </a>
                <a target="_blank" href="">
                  <Image src="/dex-screener.png" alt="dexscren-logo" width={200} height={100} />
                </a>
                <a target="_blank" href="">
                  <Image src="/equalizer.png" alt="equalizer-logo" width={200} height={100} />
                </a>
              </div>

            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 absolute blur-3xl"></div>
            <Image src="/shiromo.png" alt="Kocheng" className="rounded-3xl relative z-10 w-full max-w-lg mx-auto" width={500} height={500} /> <br></br>

            {/* <label className="text-red-500 font-bold text-2xl"> Contract: 0x1ce0422D5e0bF09465E13275Bfbc477BD7FF3074</label> */}
            <label className="text-2xl font-bold bg-gradient-to-r from-violet-700 via-red-500 to-pink-700 text-transparent bg-clip-text animate-pulse">
              Contract: 0x1ce0422D5e0bF09465E13275Bfbc477BD7FF3074
            </label>
          </div>
        </div>
      </section>


      {/* <!-- About Section --> */}
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> SHIROMO </span>
          </h2>
          <div className="bg-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm space-y-6">
            <p className="text-lg text-indigo-200 leading-relaxed">
              {/* &quot;Welcome to the world of SHIROMO, where blockchain meets
              boldness and a touch of quirky charm! 🐐✨ Born from the fast-paced
              labs of Sonic, this goat isn`t just stylish with its iconic hat—it`s
              a beacon for fun, community, and decentralized adventures. Whether
              you&apos;re here for the memes, the vibes, or just to admire that fancy
              hat, you&apos;re part of something truly unique. We&apos;re not just
              redefining speed on the blockchain; we&apos;re redefining how to have fun
              doing it. So grab your hat, join the herd, and let&apos;s headbutt into
              the future together!&quot; */}
              // eslint-disable-next-line react/no-unescaped-entities
              Welcome to the world of SHIROMO, where blockchain meets boldness and a touch of quirky charm! ✨ Born from the fast-paced Sonic lab, this white cat is a sacred animal in Japan, here for decentralized fun, community, and adventure. Whether you&rsquo;re here for the memes, the atmosphere, or just to worship this sacred cat, you&rsquo;re part of something truly unique. We&rsquo;re not just redefining speed on the blockchain; we&rsquo;re redefining how to have fun doing it. So, join the herd, and let&rsquo;s head into the future together!”

              What sets SHIROMO apart from the rest is not just its impeccable style - but also the technology underlying the entire ecosystem. Built on Sonic&rsquo;s cutting-edge blockchain infrastructure, the project combines the best of both worlds: the virality of meme culture and the toughness of serious technology.

            </p>
            <p className="text-lg text-indigo-200 leading-relaxed">
              What sets Goat with Hat apart isn&rsquo;t just its impeccable style &ndash; it&rsquo;s
              the underlying technology that powers the entire ecosystem. Built on
              Sonic cutting-edge blockchain infrastructure, this project combines
              the best of both worlds: the virality of meme culture and the
              robustness of serious tech.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Roadmap Section --> */}
      <section id="roadmap" className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> Roadmap</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600/30"></div>
            <div className="space-y-12">
              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 1:
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>
                      • Increase awareness and strengthen the community on the platform.
                    </li>
                    <li>
                      • Partnerships with influencers specialized in memecoins.X
                    </li>
                    <li>• Social Media Presence.</li>
                    {/* <li>• Build a website that makes other goats jealous.</li> */}
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 2: Reaching $75,000 and Expansion to Exchanges
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    {/* <li>
                      • Host the first-ever &quot;Hat Enthusiast Goat Convention.&quot;
                    </li> */}
                    <li>
                      • Prepare for exchange launches and consolidate liquidity.
                    </li>
                    <li>
                      • Degen Express AMM: Upon reaching a $75,000 market cap, $12,000 will
                      automatically be deposited into liquidity on the Degen Express AMM, enabling
                      direct trading.
                    </li>
                    <li>
                      • Listings on Fantom DEX.
                    </li>
                    {/* <li>
                      • Convince more goats (and humans) to join the herd via
                      funny tweets.
                    </li> */}
                    {/* <li>• Partner with brands that love goats in hats.</li> */}
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 3: Expansion and Strategic Alliances
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>
                      • Strengthen the token&rsquo;s position and expand the ecosystem..
                    </li>
                    <li>
                      • Strategic Alliances: Forge partnerships with crypto projects within the Fantom and Sonic ecosystems to enhance collaboration and mutual growth.

                    </li>
                    {/* <li>
                      • Host &quot;Goat Fashion Week&quot; – spoiler: the hats are 🔥.
                    </li>
                    <li>• Replace all mascots with goats in hats. Aim big.</li> */}
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 4: Reach a market cap of $1 million
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>• Establish SHIROMO as an iconic memecoin in SONIC Labs.</li>
                    <li>• Expansion to Centralized Exchanges:
                      Explore listings on platforms such as Binance, KuCoin, and others.</li>
                    <li>
                      • Implementation of DAO:
                      The community decides the future of the project.
                    </li>
                    <li>
                      • Market Cap Goal: $1M
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer id="social" className="container mx-auto px-4 py-8 border-t border-indigo-800/30">
        <div className="flex justify-between items-center">
          <div className="text-sm text-indigo-300">
            © 2024 SHIROMO. All rights reserved.
          </div>
          <div className="flex gap-4">
            {/* <!-- Telegram Icon --> */}
            <a href="https://web.telegram.org/" className="text-indigo-300 hover:text-indigo-100 transition-colors" target="_blank">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.321 4.843c.47 0 .677-.216.94-.477l2.26-2.196l4.696 3.466c.866.48 1.488.233 1.704-.803l3.082-14.503c.315-1.265-.462-1.84-1.538-1.297z"></path>
              </svg>
            </a>
            {/* <!-- Twitter Icon --> */}
            <a href="https://x.com/SHIRO_MONIC_" className="text-indigo-300 hover:text-indigo-100 transition-colors" target="_blank">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0017 2a4.48 4.48 0 00-4.44 5.37A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div id="3E022DF6-DA63-0441-762E-4247E007840C"></div>
      <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
        <section id="shadow-host-companion"></section>
      </div>
    </body>
  );
}
