
# Summarist — Book Summary Application

**A full-stack book summary application featuring authentication, audio playback, personal libraries, and subscription checkout.**

Summarist is a responsive web application developed as part of the Simplified Virtual Internship. It brings together user authentication, book discovery, audio content, subscription selection, and payment integration in a single interface.

## Live Demo

**[Explore Summarist](https://summarist-brown.vercel.app/)**

## Key Features

- **User Authentication:** Firebase authentication with guest, Google, and email login options.
- **Book Discovery:** Dynamic book pages displaying individual book content.
- **Audio Player:** Interactive playback controls with audio seeking.
- **Personal Library:** Dedicated library interface for organizing and accessing books.
- **Subscription Plans:** User interface for selecting subscription options.
- **Stripe Integration:** Stripe Checkout integration for subscription purchases.
- **Responsive Design:** Layouts adapted for desktop and mobile devices.

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Authentication | Firebase |
| Payments | Stripe Checkout |
| Deployment | Vercel |

## Technical Highlights

This project provided hands-on experience with:

- Building reusable components using Next.js and TypeScript.
- Managing application-wide state with Redux Toolkit.
- Implementing multiple authentication methods through Firebase.
- Integrating payment functionality with Stripe Checkout.
- Managing interactive audio playback and seeking.
- Developing responsive layouts and dynamic content pages.

## Project Background

Summarist was developed as part of a structured frontend development internship project.

It demonstrates practical experience connecting multiple application features and third-party services into a cohesive user experience.

## Developer

**Sarah Rivera Balcazar**

[GitHub](https://github.com/SarahAnnRivera) | [Portfolio](https://portfolio-resume-one-psi.vercel.app/)


## Prerequisites & Installation

### Prerequisites

- Node.js 20.9 or later (Next.js 16 minimum)
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SarahAnnRivera/summarist.git
   ```

2. Navigate into the project directory:

   ```bash
   cd summarist
   ```

3. Install dependencies:

   ```bash
   npm install
   ```


4. Create a `.env.local` file in the project root
   using `.env.example` as a template.

   Add your own Firebase and API configuration values.

   Some features, including authentication and
   payments, require configuration in the
   corresponding service dashboards.


5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the application in your browser:

   http://localhost:3000

### Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm start` — Run the production server after building
- `npm run lint` — Run ESLint

### Configuration Notes

Firebase Authentication and Stripe functionality
may require project-specific configuration.

Never commit private API keys or secret credentials
to source control.

