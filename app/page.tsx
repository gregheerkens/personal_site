import Link from 'next/link';
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
              <p className="text-xl leading-relaxed">
                As a <strong>Founding Developer</strong> with a <strong>Master’s in Communications</strong>, I am uniquely experienced in translating complex systems into real value, where answering the "why" is as important as the "what".
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Systems Strategy</h3>
                  <p className="text-base text-gray-600">8+ years of 0&rarr;1 engineering, specializing in clean architecture and scalable product foundations.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Narrative Design</h3>
                  <p className="text-base text-gray-600">Turning raw technical data into compelling stories for stakeholders, developers, and customers.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Deterministic AI</h3>
                  <p className="text-base text-gray-600">Architecting governance layers like DOCTIO to rein in AI stochasticity and ensure engineering excellence.</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                Whether it's leading a legacy migration, designing a recommendation engine, or authoring a knowledge base, I focus on the <strong>semantics</strong> of technology—what it means, why it matters, and how it shifts behavior.
              </p>
            </div>
          </div>
          
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
      </Hero>
    </div>
  );
}
