import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero 
        title={
          <>
            Bridging the gap between<br />
            AI, systems architecture and<br />
            human-centric narrative.
          </>
        }
      >
        <div className="prose prose-lg max-w-none mt-8">
            <div className="text-gray-700 leading-relaxed space-y-8">
              {/* Image and Text Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                <div className="space-y-4">
                  <p className="text-xl leading-relaxed">
                    Hello! I&apos;m <strong>Greg Heerkens</strong>.
                  </p>
                  <p className="text-xl leading-relaxed">
                    As a <strong>Founding Developer</strong> with a <strong>Master&apos;s in Communications</strong>, I am uniquely experienced working with complex systems, where answering the &quot;why&quot; is as important as the &quot;what&quot;.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Whether it&apos;s legacy migrations, designing a recommendation engine, social research, or authoring a knowledge base, I focus on the <strong>context</strong> of technology: what it means, why it matters, and how to keep it running smoothly.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/img/portfolioC.png"
                    alt="Portfolio"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full max-w-sm"
                    priority
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Systems Strategy</h3>
                  <p className="text-base text-gray-600">8 years of 0&rarr;1 engineering, 15 years in software development, experience in designing clean architecture & scalable product foundations.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Narrative Design</h3>
                  <p className="text-base text-gray-600">Turning technical language and information into compelling stories for stakeholders, developers, management and customers.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Deterministic AI</h3>
                  <p className="text-base text-gray-600">Architecting governance layers and engineering agents to rein in AI stochasticity, ensuring high quality, reliable output.</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                I love to experiment with new technologies and ideas. From 3D printing and CNC manufacture, to AI and video game development, to creative writing, world building and more, I am always looking for new challenges and opportunities to grow and create.
              </p>
              
              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-medium hover:-translate-y-0.5"
                >
                  Explore my Work
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      </Hero>
    </div>
  );
}
