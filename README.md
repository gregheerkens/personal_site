# Personal Portfolio Site

A Next.js portfolio site showcasing expertise in DevRel, Narrative Strategy, and Technical Product Management.

## Features

- **Manifesto Page**: Letter to the industry on the post-AI economy
- **Case Studies**: Three detailed artifacts demonstrating expertise
- **Resume/Contact**: Reframed professional profile with reading list

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Mermaid.js (for flowcharts)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main

## Content

The site includes placeholders for:
- Resume experience entries
- Contact information
- Additional case study details

Update these in:
- `app/contact/page.tsx` - Resume and contact info
- `app/case-studies/page.tsx` - Case study content
- `components/ReadingList.tsx` - Current thoughts/reading list

## Future Extensibility

The architecture supports easy addition of:
- Blog (`app/blog/` directory)
- Storefront (`app/store/` directory)
