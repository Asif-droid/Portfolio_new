# Portfolio Website - Architecture Guide

## Overview

This is a full-stack portfolio website built for K. M. Asifur Rahman, an AI/ML Engineer and Researcher. The application showcases professional experience, research publications, projects, and provides a contact form for visitors. The system is built with modern web technologies including React, Node.js, and PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API endpoints for contact form and CV downloads
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Fallback**: MemStorage class for development/testing without database
- **File Storage**: Static file serving for CV downloads from attached_assets directory

## Key Components

### Portfolio Data Management
- **Static Data**: Portfolio content stored in TypeScript files under `client/src/data/`
- **Dynamic Data**: Contact messages stored in PostgreSQL database
- **Schema Validation**: Zod schemas for runtime type validation

### Contact System
- **Form Handling**: React Hook Form with Zod validation
- **API Integration**: TanStack Query for form submissions
- **Toast Notifications**: Custom toast system for user feedback
- **Data Persistence**: PostgreSQL storage with Drizzle ORM

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme provider with localStorage persistence
- **Navigation**: Smooth scrolling navigation with scroll-triggered styling
- **Animations**: CSS-based animations for enhanced user experience
- **Accessibility**: ARIA labels and semantic HTML structure

### File Download System
- **CV Downloads**: Separate endpoints for professional and research CVs
- **Static File Serving**: Express static file serving for document downloads
- **File Security**: Controlled access through API endpoints

## Data Flow

### Contact Form Submission
1. User fills out contact form in React frontend
2. Form data validated with Zod schema on client-side
3. TanStack Query sends POST request to `/api/contact`
4. Express server validates data with shared Zod schema
5. Drizzle ORM inserts contact message into PostgreSQL
6. Success/error response sent back to frontend
7. Toast notification displayed to user

### Content Display
1. Static portfolio data loaded from TypeScript files
2. Component props passed through React component tree
3. Conditional rendering based on data availability
4. Responsive layouts applied with Tailwind CSS classes

### Theme Management
1. Theme preference stored in localStorage
2. Theme context provider manages global state
3. CSS variables updated based on theme selection
4. Tailwind classes applied conditionally for dark/light modes

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Form Management**: React Hook Form, Hookform Resolvers
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Utilities**: date-fns for date formatting, nanoid for unique IDs

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database driver
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Build and Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict configuration
- **Development**: Hot module replacement, runtime error overlay
- **Code Quality**: ESLint configuration, PostCSS for CSS processing

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express proxy
- **Hot Reloading**: Vite HMR for frontend, tsx for backend
- **Database**: Environment variable for DATABASE_URL connection
- **Assets**: Local file serving for development

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: esbuild bundle to `dist/index.js`
- **Static Assets**: Served from `attached_assets` directory
- **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- **Database**: PostgreSQL connection string via `DATABASE_URL`
- **Node Environment**: `NODE_ENV` for development/production switching
- **Build Process**: Separate scripts for development and production
- **Static Files**: Express static file serving for production assets

The architecture prioritizes type safety, developer experience, and maintainability while providing a responsive and accessible user interface for showcasing professional portfolio content.