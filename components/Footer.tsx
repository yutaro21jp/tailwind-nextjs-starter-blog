import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="nostr" href={siteMetadata.nostr} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()}`} yutaro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
