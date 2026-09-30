# AI Prompt Engineering Strategy

## Project
Sprint 12 — Real-Time Systems & UI Isolation

## Objective

The objective was to build an isolated and reusable frontend component
library using React and Storybook.

The component library includes reusable UI components that can be
developed, tested, and reviewed independently from the main application.

## AI-Assisted Development Approach

AI assistance was used as a development support tool for:

- Project setup guidance
- Storybook configuration
- Reusable component structure
- Storybook stories and Args/Controls
- Light and Dark theme implementation
- CSS improvements
- Debugging configuration issues
- Git and GitHub workflow guidance

All generated code was reviewed and tested locally before being included
in the project.

## Prompt Strategy

The prompts were structured with the following approach:

### 1. Define the Goal

Each prompt first described the exact development objective.

Example:

> Create a reusable Button component for a React design system with
> primary, secondary, danger, disabled, and size variants.

### 2. Define Technical Constraints

The prompts specified the required technologies and project structure.

Example:

> Use React components with separate CSS files and create corresponding
> Storybook stories.

### 3. Request Reusable Design

The components were designed to support configurable properties through
Storybook Args and Controls.

Examples of configurable properties:

- Button label
- Button variant
- Button size
- Disabled state
- Input type
- Input error state
- Card title
- Card description
- Card featured state

### 4. Request Isolated Testing

Storybook stories were used to display components independently from the
main application runtime.

This allowed each component state to be reviewed and tested separately.

### 5. Iterative Debugging

When an issue appeared, the problem was described using the actual
terminal output or observed behavior.

The AI was then used to identify the likely cause and provide a focused
fix instead of rewriting the entire project unnecessarily.

## Example Prompts

### Button

> Create a reusable React Button component with primary, secondary,
> danger, small, medium, large, and disabled states. Create Storybook
> stories using Args and Controls.

### Input

> Create a reusable Input component with label, placeholder, type,
> disabled, error, and error message properties. Create isolated
> Storybook stories for default, error, and disabled states.

### Card

> Create a reusable Card component with title, description, category,
> action text, and featured state. Add Storybook stories for default and
> featured variants.

### Theme

> Add a Storybook toolbar that allows switching between light and dark
> themes. Make the reusable components respond to the selected theme
> using CSS variables.

## Validation

After implementation, the project was validated by:

- Running the Next.js application locally
- Running Storybook locally
- Opening component stories in Storybook
- Testing component variants through Controls
- Testing disabled and error states
- Testing Light and Dark theme switching
- Creating a production Git commit
- Pushing the project to GitHub

## AI Usage Principle

AI was used as an engineering assistant rather than as a replacement for
testing or verification.

The generated suggestions were reviewed, adapted to the project
requirements, and tested in the local development environment.