import React from 'react';
import MermaidDiagram from './MermaidDiagram';

interface CaseStudyCardProps {
  title: string;
  tag?: string;
  description: string;
  keyTakeaway: string;
  mermaidChart?: string;
  children?: React.ReactNode;
}

export default function CaseStudyCard({
  title,
  tag,
  description,
  keyTakeaway,
  mermaidChart,
  children,
}: CaseStudyCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-4">
          {tag && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3 tracking-wide">
              {tag}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Custom Content (for case study specific content) */}
        {children && (
          <div className="mb-6 prose prose-lg max-w-none">
            {children}
          </div>
        )}

        {/* Mermaid Diagram */}
        {mermaidChart && (
          <div className="my-6">
            <MermaidDiagram chart={mermaidChart} />
          </div>
        )}

        {/* Key Takeaway */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-gray-900 mb-1">Key Takeaway</p>
            <p className="text-gray-800 italic">{keyTakeaway}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
