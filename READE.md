# TechLaunch Mini Project

**Live Demo:** `https://YOUR-USERNAME.github.io/techlaunch-miniproject/`

## Purpose

TechLaunch is a responsive educational landing page designed to demonstrate the HTML5, CSS3, JavaScript, responsive design, form validation, accessibility, and Git skills covered during the four-week module.

## Features

- Responsive navigation with mobile menu
- Hero section with clear call-to-action
- About section with supporting image
- Technology category cards
- Services and project guidance cards
- Contact form with client-side validation
- Newsletter subscription form
- Responsive design for mobile, tablet, and desktop
- Back-to-top navigation
- Accessible labels, focus states, and meaningful image alt text

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Flexbox
- CSS Grid
- Git and GitHub
- Chrome DevTools
- VS Code

## How to run locally

1. Download or clone the project repository.
2. Open the `techlaunch-miniproject` folder in VS Code.
3. Open `index.html` in a web browser.
4. No backend, database, or build process is required.

## Structure

```text
techlaunch-miniproject/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── about.jpg
│   ├── categories.jpg
│   └── services.jpg
├── docs/
│   ├── BRIEF.md
│   └── TEST-LOG.md
├── README.md
├── PROMPTS.md
└── .gitignore


## Responsive behaviour

The page follows a mobile-first approach.

- **320px, 375px, 414px:** single-column layout and mobile navigation
- **768px, 834px:** two-column layouts where appropriate
- **1024px, 1280px, 1440px:** three-column card grids and full navigation
- Content is centered with a maximum width on larger screens.
- The layout is designed to avoid horizontal scrolling.

## Accessibility

- Correct `lang` attribute is used.
- Only one main `<h1>` is used.
- Form fields have labels.
- Images use meaningful alternative text.
- Keyboard focus states are provided.
- Interactive controls use suitable touch target sizes.
- Form validation uses `aria-invalid` and live error messages.

## Limitations

The contact and newsletter forms are demonstration forms only. They do not send real emails or store submitted data.

Form validation is performed on the client side using JavaScript. Client-side validation is provided for usability and does not provide server-side security.

The project does not use a backend, database, or real email service.

## Credits

The project images are used for educational purposes. Image sources and licensing information should be recorded here before final submission.

## What I would do next

- Connect the forms to a secure backend service.
- Add server-side validation.
- Add secure data storage if required.
- Improve analytics and user feedback.
- Continue testing with additional browsers and accessibility tools.