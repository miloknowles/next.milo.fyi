import { Separator } from '@radix-ui/themes'
import ExternalLink from 'src/components/external-link'
import BlogPostsIndex from 'src/components/posts-index'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Blog</h1>
      <BlogPostsIndex/>

      <Separator className="w-full mt-6 mb-6"/>

      <h1 className="font-semibold text-3xl mb-4 tracking-tighter">Other</h1>
      <div className="flex flex-col gap-4">
        <ExternalLink href="https://medium.com/singularity-energy/what-is-consumed-carbon-intensity-and-why-is-it-important-3e272ee3e08c">
          [Article] What is consumed carbon intensity and why is it important?
        </ExternalLink>
        <ExternalLink href="/knowles_icra_2021.pdf">
          [Paper] Toward Robust and Efficient Online Adaptation for Deep Stereo Depth Estimation (ICRA 2021)
        </ExternalLink>
        <ExternalLink href="https://dspace.mit.edu/handle/1721.1/129167">
          [Thesis] Toward robust deep stereo networks: uncertainty learning, novelty detection, and online adaptation
        </ExternalLink>
      </div>
    </section>
  )
}
