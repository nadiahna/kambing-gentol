import Image from "next/image";

export default function Home() {

  return (
    <body className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-indigo-900/80 backdrop-blur-sm z-50">
        <div className="text-2xl font-bold tracking-tight">🐐 KOCHENG 🎩</div>
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-indigo-300 transition-colors">About</a>
          <a href="#roadmap" className="hover:text-indigo-300 transition-colors">Roadmap</a>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-7xl font-bold leading-tight">
              Meet 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> Kocheng Gentol</span>
            </h1>
            <p className="text-xl text-indigo-200 leading-relaxed">
              The spirited mascot of Nadian Tech, bringing style and innovation to
              the blockchain frontier! Just like Cat wif Necklece, but with extra
              tigerpower! 🐐🎩🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
                <a target="_blank" href="https://equalizer.exchange/swap?fromToken=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amp;toToken=0x394e54b12A368497A224B6EFA5C28d6eEAf917A3">Buy KOCHENG and join the herd</a>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </button>

              <button className="border border-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-800/30 transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                <a target="_blank" href="https://dexscreener.com/fantom/0x36c945de13bf195b84fb5ccb5742fcdf3d1cb1a6">DEX Screener</a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 absolute blur-3xl"></div>
            <Image src="/icon-logo.svg" alt="Kocheng" className="rounded-3xl relative z-10 w-full max-w-lg mx-auto" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> KOCHENG</span>
          </h2>
          <div className="bg-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm space-y-6">
            <p className="text-lg text-indigo-200 leading-relaxed">
              &quot;Welcome to the world of Goat with Hat, where blockchain meets
              boldness and a touch of quirky charm! 🐐✨ Born from the fast-paced
              labs of Sonic, this goat isn`t just stylish with its iconic hat—it`s
              a beacon for fun, community, and decentralized adventures. Whether
              you&apos;re here for the memes, the vibes, or just to admire that fancy
              hat, you&apos;re part of something truly unique. We&apos;re not just
              redefining speed on the blockchain; we&apos;re redefining how to have fun
              doing it. So grab your hat, join the herd, and let&apos;s headbutt into
              the future together!&quot;
            </p>
            <p className="text-lg text-indigo-200 leading-relaxed">
              What sets Goat with Hat apart isn&apos;t just its impeccable style – it&apos;s
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
                  Phase 1: Get the Hat 🎩
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>
                      • Find the fanciest hat in town (it must scream &quot;blockchain
                      chic&quot;).
                    </li>
                    <li>
                      • Convince the goat to wear it (trust us, this wasn`t easy).
                    </li>
                    <li>• Launch memes so good they break the internet.</li>
                    <li>• Build a website that makes other goats jealous.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 2: Herd Expansion 🐐🐐🐐
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>
                      • Host the first-ever &quot;Hat Enthusiast Goat Convention.&quot;
                    </li>
                    <li>
                      • Release Goat NFTs because the world needs them. Should we?
                    </li>
                    <li>
                      • Convince more goats (and humans) to join the herd via
                      funny tweets.
                    </li>
                    <li>• Partner with brands that love goats in hats.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 3: Goat Domination 🌍
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>
                      • Launch the Goat Metaverse (more bleating, less lag).
                    </li>
                    <li>
                      • Cross-chain integration because one blockchain isn`t
                      enough.
                    </li>
                    <li>
                      • Host &quot;Goat Fashion Week&quot; – spoiler: the hats are 🔥.
                    </li>
                    <li>• Replace all mascots with goats in hats. Aim big.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 w-3 h-3 -translate-x-1 mt-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  Phase 4: The Goatstronaut Era 🚀🐐
                </h3>
                <div className="bg-indigo-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-3 text-indigo-200">
                    <li>• Partner with space agencies for zero-gravity goats.</li>
                    <li>• Create interstellar memes that aliens can`t resist.</li>
                    <li>
                      • Expand Goat with Hat to Mars (Elon, we`re calling you).
                    </li>
                    <li>
                      • Retire the goat with a golden hat and write blockchain
                      history.
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
            © 2024 Goat with Hat. All rights reserved.
          </div>
          <div className="flex gap-4">
            {/* <!-- Telegram Icon --> */}
            <a href="https://t.me/KOCHENGons" className="text-indigo-300 hover:text-indigo-100 transition-colors" target="_blank">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.321 4.843c.47 0 .677-.216.94-.477l2.26-2.196l4.696 3.466c.866.48 1.488.233 1.704-.803l3.082-14.503c.315-1.265-.462-1.84-1.538-1.297z"></path>
              </svg>
            </a>
            {/* <!-- Twitter Icon --> */}
            <a href="https://x.com/KOCHENGOnS" className="text-indigo-300 hover:text-indigo-100 transition-colors" target="_blank">
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
