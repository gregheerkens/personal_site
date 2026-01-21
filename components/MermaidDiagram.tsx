'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export default function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize Mermaid once
    if (!isInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
        },
        themeVariables: {
          primaryColor: '#e5e7eb',
          primaryTextColor: '#1a1a1a',
          primaryBorderColor: '#9ca3af',
          lineColor: '#6b7280',
          secondaryColor: '#f3f4f6',
          tertiaryColor: '#ffffff',
        },
      });
      setIsInitialized(true);
    }

    // Render diagram
    if (diagramRef.current && isInitialized && chart) {
      const renderDiagram = async () => {
        try {
          const id = `mermaid-${Math.random().toString(36).substring(7)}`;
          const element = diagramRef.current;
          
          if (element) {
            element.innerHTML = '';
            const pre = document.createElement('pre');
            pre.className = 'mermaid';
            pre.id = id;
            pre.textContent = chart;
            element.appendChild(pre);
            
            await mermaid.run({
              nodes: [pre],
            });
            
            setError(null);
          }
        } catch (err) {
          console.error('Error rendering Mermaid diagram:', err);
          setError('Diagram could not be rendered.');
          if (diagramRef.current) {
            diagramRef.current.innerHTML = '';
          }
        }
      };

      renderDiagram();
    }
  }, [chart, isInitialized]);

  return (
    <div className="my-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div
        ref={diagramRef}
        className="bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto min-h-[200px] flex items-center justify-center"
      >
        {error && (
          <p className="text-gray-500 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
}
