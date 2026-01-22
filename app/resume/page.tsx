import ReadingList from '@/components/ReadingList';
import Hero from '@/components/Hero';

const readingItems = [
  {
    title: 'Vibe Coding: The Rise of Intuitive Development',
    category: 'Industry Trends',
    date: 'Recent',
  },
  {
    title: 'Agentic Workflows: From Prompt Engineering to System Design',
    category: 'Technical Strategy',
    date: 'Recent',
  },
  {
    title: 'The Narrative Economics of Developer Tools',
    category: 'DevRel',
    date: 'Ongoing',
  },
  {
    title: 'Post-AI Economy: Where Value Actually Lives',
    category: 'Strategic Thinking',
    date: 'Ongoing',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Gregory Heerkens"
        compact={true}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg text-gray-600 leading-relaxed mb-0">
          <span>Rochester, NY</span>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:greg.heerkens@gmail.com" className="text-blue-600 hover:text-blue-700 underline">greg.heerkens@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="http://linkedin.com/in/gregheerkens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">linkedin.com/in/gregheerkens</a>
          <span className="hidden sm:inline">|</span>
          <a href="http://github.com/gregheerkens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">github.com/gregheerkens</a>
        </div>
      </Hero>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        {/* Resume Content */}
        <div className="space-y-12">
          {/* Summary Section */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              With 8+ years of experience as a <strong>Founding Developer</strong>, I bridge the gap between deep-tech architecture and success narrative. Expert in translating complex systems into plainspoken strategy. Uniquely qualified to shape editorial voice by combining a <strong>Master&apos;s in Communications</strong> with a <strong>proven career in full-stack engineering</strong>. Proven ability to architect systems that scale from 0→1, and turning raw data into compelling customer stories.
            </p>
          </section>

          {/* Core Competencies Section */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>Narrative Strategy and Writing:</strong> Technical case studies, crisis communication, product documentation, creative and persuasive copy
              </div>
              <div>
                <strong>Applied AI/LLM:</strong> LLM APIs, AI-assisted product design, Prompt Engineering, Model Orchestration, <strong>DOCTIO Protocol</strong>, Semantic Clustering, MCP
              </div>
              <div>
                <strong>Research and Analysis:</strong> Quantitative and qualitative research, data analysis, sentiment analytics, hypothesis testing, A/B testing, experimental design, survey design.
              </div>
              <div>
                <strong>Product & Leadership:</strong> Cross-functional team dynamics, Product delivery & stakeholder alignment, Agile process, System design & modernization, Creative problem-solving & adaptive thinking, Documentation/onboarding
              </div>
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  GetTattle, Inc. | Founding Developer
                </h3>
                <p className="text-sm text-gray-500 mb-4">Nov 2017 – Oct 2025</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Technical Content Architecture:</strong> Architected <strong>Snapshots,</strong> an experience-driven reporting engine that generated executive summaries from raw SQL/NoSQL data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Strategic Narrative & Product Positioning:</strong> Defined the &quot;Actionable Intelligence&quot; narrative for the flagship <strong>AI Coach</strong> product. Translated complex points of sentiment analysis and causal inference into clear, human-readable recommendations for non-technical stakeholders, directly driving adoption across 250+ global brands.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Change Management Communication:</strong> Played an instrumental role in high-stakes migration from Legacy PHP to a .NET monorepo. Authored the knowledge base and technical documentation that served as the single source of truth, reducing developer friction and maintaining operational continuity during team restructuring.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>LLM Workflow Design (Agentic AI):</strong> Pioneered the integration of LLMs for <strong>&quot;AI Automatch,&quot;</strong> creating the prompt engineering frameworks that has allowed the AI to process ~1B points of Merchant menu items in processing backlogs.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Harris RF Communications | Multimedia Simulation Engineer
                </h3>
                <p className="text-sm text-gray-500 mb-4">Aug 2010 – Nov 2017</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Technical Translation:</strong> Served as the primary liaison between military subject matter experts (SMEs) and engineering teams. Translated military specifications (MilSpec) into user-centric training narratives and high-fidelity simulation scenarios.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Instructional Design:</strong> Worked independently and embedded within the technical writing team to develop dozens of learning modules according to rigorous instructional design standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Leadership:</strong> Led the team as project manager and ad-hoc program manager during leadership transition, delivering in-depth project and product management reporting in addition to core duties</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Strategic Research and Thought Leadership Section */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Research and Thought Leadership</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  MASTER OF SCIENCE THESIS: Narrative Theory in Crisis Contexts
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Thesis:</strong> &quot;Justice by Any Means: Societal Stress and the Rise of Vigilantism&quot;
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Focus:</strong> Conducted a quantitative analysis of 360+ data points correlating &quot;Societal Stressors&quot; (Doomsday Clock, Crime Statistics) with the popularity of &quot;Anti-Hero/Vigilante&quot; archetypes in media.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Method:</strong> This research formed a predictive framework for how public trust erodes in &quot;ineffective systems,&quot; leading to a demand for &quot;direct action&quot; solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Outcome:</strong> Methodology utilized rigorous coding reliability (96.8%) to map sentiment trends, demonstrating the ability to turn abstract cultural anxiety into measurable data, forming a cohesive and predictive thesis.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  DOCTIO: A Protocol for AI-Assisted Software Development
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Concept:</strong> Architected a novel six-stage, task-level micro-workflow protocol defining deterministic development with AI agents (Domain, Objects, Ethos, Tests, Implementation, Optimization).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Theory:</strong> LLMs require deterministic narrative boundaries to prevent hallucination. In the creation of these documents, not only is the end product fully documented, but the inherent stochasticity of the agent is minimized</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Outcome:</strong> Used to generate new MVPs rapidly, enforcing clean architecture (SOLID constraints, dependency boundaries) across all projects.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  LINEWRIGHT: An LLM Writing Assistant
                </h3>
                <p className="text-gray-700">
                  <strong>An AI-powered writing assistant</strong> with voice retention and uncanny prediction, providing inline AI writing assistance through &apos;ghost text&apos;.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  REKO: The Book Genome Engine
                </h3>
                <p className="text-gray-700">
                  A high-quality book recommendation site based on a <strong>50-point &quot;DNA profile,&quot;</strong> conceptualized as &quot;the Pandora of books&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>Rochester Institute of Technology | M.S.</strong> Communications & Media Technology <em>(GPA 3.9)</em>
              </div>
              <div>
                <strong>Rochester Institute of Technology | B.S.</strong> Information Technology & New Media <em>(GPA 3.4)</em>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
