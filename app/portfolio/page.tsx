import CaseStudyCard from '@/components/CaseStudyCard';
import Hero from '@/components/Hero';

// DOCTIO Protocol Mermaid Chart
const doctioChart = `graph TD
    %% -- STYLING --
    classDef prep fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef action fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef review fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    %% -- THE DOCTIO STEPS --
    subgraph Phase1 ["Phase 1: Alignment"]
        D["D: Documentation\n(Load Context)"]:::prep
        O["O: Objectives\n(Define Intent)"]:::prep
        C["C: Code Ethos\n(Set Boundaries)"]:::prep
    end

    subgraph Phase2 ["Phase 2: The ABA Loop"]
        direction TB
        T["T: Tests\n(Define Anchors A/B/A')"]:::action
        I["I: Implementation\n(Generate Code)"]:::action
        
        %% The Feedback Loop
        I -->|Fails Bounds?| T
        T -->|Vector Feedback| I
    end

    subgraph Phase3 ["Phase 3: Finalization"]
        Opt["O: Optimization\n(Refactor & Review)"]:::review
    end

    %% -- CONNECTIONS --
    D --> O
    O --> C
    C --> T
    I -->|Success| Opt
    
    %% -- RETURN LOOPS --
    Opt -.->|Scope Creep?| O
    Opt -.->|New Context?| D`;

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Proof of Skill"
        subtitle="Three artifacts that demonstrate expertise across DevRel, Narrative Strategy, and Technical Product Management."
        compact={true}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Case Studies Grid */}
        <div className="space-y-12 lg:space-y-16">
          {/* Blog Post: DOCTIO */}
          <CaseStudyCard
            title="DOCTIO"
            tag="Systems Thinking"
            description="Who Steers the Steering Docs?"
            keyTakeaway="I design governance systems for AI-assisted development, thinking realistically about how teams will use them."
            /*mermaidChart={doctioChart}*/
          >
            <div className="space-y-4">
              <p className="text-gray-700">
                Cursor and Kiro have dominated the conversational landscape of development in the past few months, the coding world even got a new and special term for their potential misapplication: &quot;vibe-coding.&quot; But these platforms are &quot;quality-in-quality-out&quot; systems. Development with them requires a different approach from traditional development, especially in greenfield environments.
              </p>
              <p className="text-gray-700">
                We can use `.cursorrules` and `project md` files to steer this process somewhat, reining in AI stochasticity and thereby hallucination, but this only abstracts the problem by a single degree. I realized in the course of development that what was needed was a meta layer: hierarchical, ordinal contexts for the agent to follow, giving it a better sense of space, scale, and arrangement.
              </p>
              <p className="text-gray-700">
                So I built a vertical slice of a long-held concept, &quot;Reko,&quot; in a single day, by resolving that question with a protocol I call DOCTIO. DOCTIO is a governance layer for steering documentation. It is a platform-agnostic workflow that gives the agent not only the &quot;Five Ws&quot; it needs to do its best work, but also dictates priority.
              </p>
              <p className="text-gray-700">
                DOCTIO enforces a strict hierarchy of needs that the AI must respect:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Domain (What is this app, what does it do? Why should it be made?)</li>
                <li>Objects (Who are the players? What are their contracts?)</li>
                <li>Code Ethos (How should this be built?)</li>
                <li>Tests (What is success? More on this in a moment.)</li>
              </ol>
              <p className="text-gray-700">
                These four layers are fleshed out completely before finally moving to the fifth step: Implementation. You read that right: this is pure TDD, especially from the agent&apos;s perspective. We define what is acceptable and what acceptable looks like before EVER beginning implementation.
              </p>
              <p className="text-gray-700">
                All of this information is passed in through markdown documents at a fraction of the models&apos; context windows, and yet during implementation it now has the context necessary for deterministic, standardized, internally-consistent output. Obviously, MCP use only enhances the effect and ease.
              </p>
              <p className="text-gray-700">
                Optimization, the final, ever-evolving step, is handled through two specific types of documents:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>The Change Order: A formal, discrete, single-responsibility feature request</li>
                <li>The Instructional Order: A change to the foundational documents themselves (leaving MVP, new ethical considerations, etc.)</li>
              </ol>
              <p className="text-gray-700">
                With these, the realities of development - that no plans survive first contact with the enemy - are accepted and integrated into the process itself. Where traditional steering docs capture basic rules, DOCTIO provides the process for evolution. If the implementation conflicts with the Domain, the agent knows exactly which one wins. It steers &quot;vibe-coding&quot; into deterministic engineering.
              </p>
              <p className="text-gray-700">
                One more word about testing in DOCTIO: Beyond just a step in the process, there is more to how the protocol applies tests than meets the eye. In traditional TDD, we write binary pass/fail tests. This brings attention to the failing test (Good!), but it still needs a human, with context, to resolve it (Bad - at least for autonomous agents). Binary failures can only tell the AI &quot;No.&quot; They don&apos;t tell it &quot;Which way?&quot;
              </p>
              <p className="text-gray-700">
                To solve this, DOCTIO establishes a &quot;behavioral corridor&quot; using a method I call &apos;ABA Triangulation.&apos; This approach applies the principles of Control Theory and Boundary Value Analysis to AI generation.
              </p>
              <p className="text-gray-700">
                By defining three different input/output sets for each test, we give the AI a complete picture of the playing field. Every test requires three anchors:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Anchor A (The Ceiling): The clear upper-limit boundary.</li>
                <li>Anchor B (The Target): The original, binary test (The Expectation).</li>
                <li>Anchor A&apos; (The Floor): The clear lower-limit boundary.</li>
              </ul>
              <p className="text-gray-700">
                With these points set, we aren&apos;t just checking for bugs; we are creating a feedback loop for autonomous testing. We give the agent vector-based feedback: the directionality and magnitude necessary to self-correct without human intervention. In essence, it’s like calibrating a thermostat with an upper limit, the desired temperature, and a lower limit.                 If the temperature is off, you know immediately whether to heat or cool with a single point of data.
              </p>
              
              <p className="text-gray-700">
                This logic rolls right into the Code Ethos step of DOCTIO, preparing the ground for the actual Tests step that immediately follows. There, describing how you want these tests (and any failures) handled gives you fine-grained control over how autonomously you want your testing - and fixing - to be handled.
              </p>
            </div>
          </CaseStudyCard>

          {/* Case Study: Reko */}
          <CaseStudyCard
            title="Reko Case Study"
            tag="Apps"
            description="The State of Media Recommendation"
            keyTakeaway="I don't just build features; I design systems that alight technical and business goals."
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
              <p className="text-gray-700">
              While online shopping grows by leaps and bounds year over year, a majority of users rely on word-of-mouth recommendation for their media consumption. Social exchange has always been a core of media consumption; those who are close to us have always had similar backgrounds, similar upbringings, and in the case of friends, similar likes and dislikes. Social media has not changed the message, merely the medium by which the information is distributed. Hobbies and media continue to diversify and specify. Islands of passionate, insular communities look to their opinion leaders as their replacement for familiar recommendation. After all, a group that needs to be actively sought versus one of happenstances is far more likely to produce good suggestions on which story to invest in next.<br/><br/>
              Taste is rarely as simple as “person likes X, I like X; person also likes Y, so I also must like Y.” Enjoyment in something as personal as a story is comprised of dozens of small plot points and  devices, any one of which can be so personally unpalatable as to ruin the entire experience. Classically, online retailers have sought to improve upon word-of-mouth by using an algorithm called collaborative filtering. Users are not only recommended books based on what they have previously searched and purchased, but also what people with similar browsing and buying habits, searches for - hence, “collaborative.<br/><br/>
              Such engines are simple and effective in the realm of physical goods, but swiftly begin to stumble as the complexity of the product increases. By the time we are dealing with something as complex as musical tastes, this method of recommendations is scarcely more than pointing in a general direction: unabashedly judging a book by its cover. In a convenience sample of 20 individuals, fewer than 5 claimed to do anything more than “glance at” the recommendations offered by Amazon.com for books. In matters of taste, there are simply too many factors to make such an accurate personalized recommendation based on your neighbors’ likes alone.<br/><br/>
              The first service to recognize this problem, albeit in the area of music, was Pandora in 1999. In the quarter century since the patenting of the Music Genome Project, Pandora’s recommendations still produce more accurate taste results than services with music libraries several times larger. They do this by eschewing the collaborative model for their own method: breaking music into its constituent parts, relying on recurring, defineable patterns and borderline-subconscious repetition in the user’s listening history to drive recommendations. Where collaborative algorithms infer taste from behavior, Pandora inferred this taste from shared structure.<br/><br/>
              To date, several attempts have been made to apply books to different recommendation engines; small startups such as GoodReads and LibraryThing are the most well-known, with the former now owned by, and integrated with, Amazon. These sites and their engines share little in common with Pandora, and instead use user generated tags along with collaboration, groups, and common activity to make their recommendations. While tagging is a good step in letting the userbase collectively qualify why they liked something, it still falls short of what makes Pandora so accurate: the media in question being broken into piece parts to scan for patterns. This objective deconstruction helps bring miniscule elements that neither the end user nor those recommending to them realize may be important - either from subjective biases or simple lack of knowledge.<br/>
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">The Problems</h3>
              <p className="text-gray-700">
              As a reader, finding the next good read is an exercise in frustration and can produce a lukewarm reading experience. Beyond simple X-Y comparisons and tagging, there is really no way to know if a new favorite book is one read away - or ten. By then, the user may grow frustrated with the activity altogether and stop.<br/><br/>
              In the current process, the reader has several choices depending on their level of tech-savvy. If they rely upon Amazon or GoodReads’ collaborative filtering, it is an algorithmic crapshoot. Even the tech-savvy face another challenge, as casting a broad request for recommendations often ends just as poorly, with recommendations consisting of ‘zeitgeist’ titles, based on personal biases, or from people who may not have even read the book being compared.<br/><br/>
              As a writer, finding an impassioned audience can be equally frustrating. With over one million new titles published by new and emerging authors every year, it can be impossible to get your work in front of the right readers, as they become more bombarded by advertisements, cultural pressures, or neighbors in the genre. Small, impassioned communities have been responsible for many “long shot” book sales successes in recent years, and being the next big thing is sometimes a matter of finding the right community to carry you up to mainstream consciousness.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">The Solution</h3>
              <p className="text-gray-700">
              Algorithms are indeed a powerful tool in tracking of user tastes, especially ones that may be subconscious or subtle in nature. However, current competitors in the space show that relying on tag-based and collaborative filtering algorithms alone cannot reliably produce accurate reader taste profiles. Instead, combining strong community interaction with a piece-part breakdown of the elements of story - tone, pacing, conflict style, themes - can provide a much deeper dive into a reader, their likes and dislikes, and recurring patterns and themes that even they might not be aware of.<br/><br/>
              AI is uniquely suited to providing large-scale initial classifications. A simple workflow can be created to create the assessment, and integrate that assessment into the database. Afterwards, by leveraging ground level knowledge of passionate fans and the error correction inherent in community-curated big data, DNA profiles for any books in the system can be tweaked by recommendation and consensus. Similar to human genetics, the parity between these DNA sets can be analyzed across dozens of attributes, and recommendations made based on this match percentage.<br/><br/>
              As the community continues to develop, and the detail in tags, narrative elements and small communities deepens, self-published authors and publishing houses in general can find not only a general target market, but a smaller, potentially fanatical market. Users with a certain match percentage can be specifically targeted, with assurance that this new offering has themes exactly within their unique taste profile.<br/><br/>
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">Expected Result</h3>
              <p className="text-gray-700">
              Reko aims to shift media recommendations from broad, algorithmic strokes toward high-fidelity taste matching. Rather than rely on co-consumption, it recommends - in concrete terms - works that are truly similar, with facets that truly match the user intent.<br/><br/>
              For readers, this means less searching through “close-enough” recommendations, and dialing in suggestions for their tastes, be it moral ambiguity, a light beach read, or any variety of conflict. Discovery becomes less about chasing and more about refining personal taste. For authors and publishers, this creates an ability to foster and cater to niche micro-communities, long-tail consumers and curious new readers, allowing for more focus in advertisement, feedback, and organic fandom formation.<br/><br/>
              As the system scales, AI continues to provide baseline classification and population, while community curation corrects inaccuracies through consensus. Recommendations continue to improve, not just through user activity or library size, but through increased descriptive specificity on the works themselves, allowing all follow-on works to more quickly and deeply benefit. Reko thus becomes a place where the books and their facets speak for themselves, rather than as artifacts of unrelated consumption, letting readers choose for themselves where their next great adventure will be.<br/><br/>
              </p>
            </div>
          </CaseStudyCard>

          {/* Portfolio Piece */}
          <CaseStudyCard
            title="Inside the Box: Financial Transparency in an Early-Stage Subscription Business"
            tag="Business Savvy"
            description="A founder's retrospective on operational costs and lessons during a startup's first quarter."
            keyTakeaway="I understand systems, but I also understand customers, money, and accountability."
            
          >
            <div className="space-y-4">
              <p className="text-gray-700">
                A quarterly newsletter for my startup, serving disc golf enthusiasts, detailing the financials and lessons learned during our first quarter of operation.
              </p>
              <p className="text-gray-700">
                <a href="/docs/InsideTheBox.pdf" target="_blank" className="text-gray-600 hover:text-gray-900 underline">Read the full newsletter here.</a>
              </p>
            </div>
          </CaseStudyCard>
          {/* Master's Thesis */}
          <CaseStudyCard
            title="Justice by any Means: The Relationship Between Societal Stress and the Rise of Vigilantism in Comic Books"
            tag="Social Research"
            description="A deep dive into the relationship between societal stress and the popularity of vigilante behavior in comic books."
            keyTakeaway="I can apply social science and research, and can write about them in a way that is both engaging and informative."
            
          >
            <div className="space-y-4">
              <p className="text-gray-700">
                My master&apos;s thesis, completed in 2018, exploring the relationship between societal stress and the popularity of vigilante behavior in comic books.
              </p>
              <p className="text-gray-700">
                <a href="/docs/MastersThesis_Abridged.pdf" target="_blank" className="text-gray-600 hover:text-gray-900 underline">Read the abridged thesis here.</a>
              </p>
            </div>
          </CaseStudyCard>
        </div>
      </div>
    </div>
  );
}
