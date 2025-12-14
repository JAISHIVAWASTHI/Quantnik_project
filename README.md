# Calculator Application

A modern, responsive calculator web application built with React and TypeScript. This application allows users to perform basic arithmetic operations with a clean and intuitive user interface.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Responsive design that works on mobile and desktop
- Clean and modern UI with smooth animations
- Error handling for invalid operations
- Keyboard support for better accessibility
- CI/CD pipeline with GitHub Actions for automated deployment

## Live Demo

[View Live Demo](https://yourusername.github.io/calculator-app/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   cd calculator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## Development

### Tech Stack

- React 18
- TypeScript
- CSS3 (with CSS Variables for theming)
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)

### Project Structure

```
src/
  ├── components/    # Reusable UI components
  ├── App.tsx        # Main application component
  ├── App.css        # Global styles
  └── index.tsx      # Application entry point
```

## Testing

Run the test suite with:

```bash
npm test
```

## Deployment

The application is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub Actions](https://github.com/features/actions)
