import mermaid from 'mermaid';

export const initializeMermaid = () => {
  mermaid.initialize({
    startOnLoad: true,
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
};

export default initializeMermaid;
