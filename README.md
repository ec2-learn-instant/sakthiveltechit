# Sakthivel Govinthan — Portfolio Website

> Personal portfolio site built to showcase skills, education, work-experience, projects, and social links.

## 🧑‍💻 About

This is my personal portfolio website where I share my background as a full-stack engineer, professional experience, education, open-source contributions, and projects.  
It acts both as a résumé and a live portfolio to help potential employers or collaborators get a holistic view of my technical journey.

## 🌐 Live Demo

[Visit Live Site →](https://sakthiveltechit.vercel.app)

## 📂 Features

- Responsive design — works across desktop and mobile  
- Light / dark mode support  
- Sections: Hero / Profile, Education, Work Experience, Projects, Open-Source Libraries, YouTube playlists / content, Contact / social links  
- Clean component-based React + Tailwind UI with animations (via Framer Motion) for scroll-in effects  
- Easy to extend — add more projects, experiences, or content with minimal code duplication  

## 🛠️ Tech Stack

- **Frontend Framework:** React (Next.js or Create React App — as used)  
- **Styling:** Tailwind CSS, custom gradients and themes  
- **Animations:** Framer Motion  
- **Icons:** React Icons (Ai*, Fi*, etc.)  
- **Deployments:** Vercel (or any static site host)  

## 📁 Project Structure (approximate)
/public ── Static assets, images, icons
/src / components ── React components for Banner, Education, Experience, Projects, etc.
/pages or App ── Main layout, routing (if Next.js), or SPA entry point
/styles / tailwind.config.js ── Tailwind / global styles and theme setup


## ✅ Getting Started (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo.git

# 2. Go into project folder
cd your-repo

# 3. Install dependencies
npm install   # or yarn install

# 4. Start dev server
npm run dev   # or yarn dev

# 5. Build for production
npm run build # or yarn build

# 6. Preview locally (if using Next.js)
npm start     # or yarn start

Then open http://localhost:3000 in your browser to view the portfolio locally.

✨ Customization Guide

Add a project / work-experience / education entry: Duplicate the relevant component (e.g. ProjectsSection / WorkExperienceCard / Education) and add a new object to its data array.

Change theme or colors: Tailwind config + CSS classes — gradients, dark/light modes — easy to tweak.

Add new sections: You can add more React components to introduce blogs, testimonials, certifications, etc.

📬 Contact & Socials

Email: sakthiveltechit@gmail.com

Phone: +91-8667695017

LinkedIn, GitHub, YouTube, personal site — all linked from the banner/social section of the website

📄 License & Usage

This project is open for personal or professional use. Feel free to fork, modify or distribute (MIT/ISC or as per your preference).
If you find bugs or want to suggest improvements — feel free to open an issue or PR.

Made with ❤️ by Sakthivel Govinthan — Backend / Full-Stack Engineer.