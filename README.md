# TechCorp - Modern Technology Solutions Website

A professional, modern technology services website built with Next.js, TypeScript, and Tailwind CSS. Features a stunning glassmorphism design with dark/light mode support and comprehensive service offerings.

![TechCorp Website](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Design & UX
- **Modern Glassmorphism Design** - Beautiful frosted glass effects and gradients
- **Dark/Light Mode Toggle** - Persistent theme switching with system preference detection
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Professional Typography** - Clean, readable fonts with proper hierarchy

### Functionality
- **Dynamic Service Pages** - Individual pages for each service with detailed information
- **Interactive Contact Forms** - Quote requests and contact forms with validation
- **Team Profiles** - Showcase team members with professional layouts
- **FAQ Section** - Comprehensive frequently asked questions
- **Newsletter Subscription** - Email subscription functionality
- **SEO Optimized** - Meta tags, structured data, and performance optimized

### Technical Features
- **Next.js 15 with App Router** - Latest Next.js features and routing
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React Icons** - Beautiful, customizable icons
- **Performance Optimized** - Fast loading times and optimized assets

## 🚀 Live Demo

Visit the live website: [TechCorp Website](https://techcorp.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.0
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/devmajor995/TechCorp.git
   cd TechCorp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
TechCorp/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services pages
│   │   │   └── [slug]/        # Dynamic service pages
│   │   ├── team/              # Team page
│   │   ├── faq/               # FAQ page
│   │   ├── quote/             # Quote request page
│   │   ├── privacy-policy/    # Legal pages
│   │   ├── terms-of-service/  # Legal pages
│   │   ├── cookie-policy/     # Legal pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx     # Main navigation
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ThemeProvider.tsx  # Theme context
│   │   └── ThemeToggle.tsx    # Theme toggle button
│   └── data/                  # Static data
│       └── services.ts        # Services data
├── public/                    # Static assets
│   ├── favicon.ico
│   └── [other assets]
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Services
Edit `src/data/services.ts` to modify:
- Service offerings and descriptions
- Features and benefits
- Pricing information
- Service categories

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Update font imports in `layout.tsx`
- **Components**: Customize component styles in individual files
- **Global Styles**: Add custom CSS in `src/app/globals.css`

### Content
- **Pages**: Update content in respective page files
- **Team**: Modify team member information in team page
- **FAQ**: Update questions and answers in FAQ page
- **Legal**: Customize privacy policy, terms, and cookie policy

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- **Netlify** - Static site hosting
- **Railway** - Full-stack platform
- **DigitalOcean App Platform** - Cloud hosting
- **AWS Amplify** - AWS hosting solution

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: support@techcorp.com
- **GitHub Issues**: [Create an issue](https://github.com/devmajor995/TechCorp/issues)
- **Documentation**: [Project Wiki](https://github.com/devmajor995/TechCorp/wiki)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Built with ❤️ by the TechCorp Team**

*Empowering businesses through innovative technology solutions*
