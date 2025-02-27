# r

## Deployment to GitHub Pages

To deploy the project to GitHub Pages, follow these steps:

1. Build the project:

    ```sh
    npm run build
    ```

2. Deploy the project:
    ```sh
    npm run deploy
    ```

This will build the project and push the contents of the `dist` folder to the `gh-pages` branch of your repository.

## Additional Information

Make sure you have the `gh-pages` package installed. If not, you can install it using:

```sh
npm install gh-pages --save-dev
```

Ensure that your `vite.config.ts` file has the correct `base` configuration:

```typescript
// vite.config.ts
export default defineConfig({
    // ...existing code...
    base: "/r/", // Set the base URL for GitHub Pages
});
```

In your GitHub repository settings, go to the "Pages" section and set the source to the `gh-pages` branch.
