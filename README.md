# Chronic Impact Modeler

Interactive web-based calculators for estimating the global burden of major chronic diseases — covering prevalence, economic costs, workforce impact, and future projections across 20+ countries.

## Diseases Covered

| Disease | Key Stats | Calculator |
|---------|-----------|------------|
| **Diabetes Mellitus** | 537M adults affected, $966B annual cost | Type 1 & 2 burden, complications, prediabetes projections |
| **Chronic Kidney Disease** | 850M affected, 90% undiagnosed | CKD stages 1–5, dialysis vs transplant costs, comorbidity attribution |
| **Hypertension** | 1.4B adults affected, 10.8M deaths/year | Awareness-treatment-control cascade, cardiovascular event modeling |
| **Thyroid Disorders** | 200M+ affected, 5–8x female predominance | Hypothyroidism, hyperthyroidism, thyroid cancer, iodine deficiency |

## Features

- **Dashboard** — Key metrics and visual summaries at a glance
- **Projections & Scenarios** — Optimistic, baseline, and pessimistic forecasts with adjustable parameters
- **Economic Burden** — Direct healthcare costs, cost breakdowns, and per-patient estimates
- **Workforce & Societal Impact** — Absenteeism, presenteeism, labor force participation losses, and DALY calculations
- **Country Comparison** — Side-by-side data across 20+ countries
- **Methodology** — Transparent documentation of data sources and model assumptions
- **Dark/Light Theme** — Toggle between themes (light by default)

## Data Sources

- IDF Diabetes Atlas (11th Edition)
- Global Burden of Disease Study 2021
- WHO Global Health Observatory
- Published epidemiological literature

## Deployment

The app is deployed on [Railway](https://railway.app) using a minimal Express server.

### Run locally

```bash
npm install
npm start
```

The server starts on `http://localhost:3000`. The Disease Burden Hub is served as the home page.

### Deploy to Railway

1. Connect this repository in your Railway dashboard
2. Railway auto-detects Node.js and runs `npm install` then `npm start`
3. No additional configuration needed — the server listens on the `PORT` environment variable provided by Railway

## Project Structure

```
Disease_Burden_Hub.html              # Landing page / disease selector
Diabetes_Burden_Calculator_v2.html   # Diabetes calculator
CKD_Burden_Calculator.html           # Chronic Kidney Disease calculator
Hypertension_Burden_Calculator.html  # Hypertension calculator
Thyroid_Burden_Calculator.html       # Thyroid Disorders calculator
server.js                            # Express static server
package.json                         # Node.js dependencies
```

## License

All rights reserved.
