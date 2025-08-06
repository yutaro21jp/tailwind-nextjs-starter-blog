interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BTCインサイト',
    description: `基礎から最前線まで ──ビットコインに関する本質的な情報と技術的背景を、毎週わかりやすく解説しています。ノイズに惑わされず、確かな理解を手に入れたいあなたへ。`,
    imgSrc: '/static/images/btc-insight.png',
    href: 'https://btc-insight.vercel.app',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
