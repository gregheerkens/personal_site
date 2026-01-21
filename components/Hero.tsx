import { ReactNode } from 'react';

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}

export default function Hero({ title, subtitle, children, compact = false }: HeroProps) {
  return (
    <section className={`relative ${compact ? 'py-12 sm:py-16 lg:py-20' : 'py-20 sm:py-28 lg:py-32'} border-b border-gray-100 bg-white`}>
      <div className={`${compact ? 'max-w-7xl' : 'max-w-4xl'} mx-auto px-4 sm:px-6 lg:px-8`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
