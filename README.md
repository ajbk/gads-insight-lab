# GADS Insight Lab

Interactive static web app for learning GADS, AFoEE, event codes, case studies, and performance index calculations.

## Run Locally

Open the static app through the launcher:

```bat
start-localhost-background.cmd
```

Then visit:

```text
http://127.0.0.1:8765/
```

If localhost is not available, open:

```text
GADS-Insight-Lab-Standalone.html
```

## Deploy

This repo is ready for GitHub Pages when the GitHub account or organization supports Pages for private repositories.

Current workflow is manual-only (`workflow_dispatch`) so private repositories on unsupported plans do not fail on every push. After Pages is enabled and configured to build with GitHub Actions, run the workflow in `.github/workflows/pages.yml`.

## Notes

The current content was built from internal workshop/training material. Review visibility before deploying publicly.
