# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/765a7b3d-c675-4d1a-adca-65804cb5574c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/765a7b3d-c675-4d1a-adca-65804cb5574c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Using Lovable

Simply open [Lovable](https://lovable.dev/projects/765a7b3d-c675-4d1a-adca-65804cb5574c) and click on Share -> Publish.

### Option 2: Using GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. When you push changes to the `main` branch, the following happens:

1. The GitHub Action workflow runs automatically
2. It builds the project using `npm run build`
3. The built files are deployed to the `gh-pages` branch
4. The site is published at `https://[your-username].github.io/pullbar-app/`

To manually trigger a deployment:

```sh
# Push your changes to the main branch
git push origin main
```

You can check the status of your deployment in the Actions tab of your GitHub repository.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
