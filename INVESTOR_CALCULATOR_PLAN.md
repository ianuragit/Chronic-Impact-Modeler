# VC Investor Calculator Suite — Implementation Plan

## Objective
Rebuild the chronic disease burden calculators from a **VC investor perspective**, transforming health burden data into investment intelligence: market sizing, revenue potential, opportunity scoring, and exit modeling.

---

## Current State
- 4 disease burden calculators (Diabetes, CKD, Hypertension, Thyroid) + 1 Hub page
- Self-contained HTML files with embedded CSS/JS + Chart.js (CDN)
- Dark/light theme, 7-tab structure, 20 countries, responsive design
- Focus: epidemiology, economic burden, DALYs, workforce impact, projections

## Target State
- 4 new investor-focused calculators + 1 Investor Hub
- Same architecture (standalone HTML + Chart.js) but **emerald green (#10b981) + amber (#f59e0b) color scheme**
- Focus: TAM/SAM/SOM, revenue modeling, deal comps, exit returns, opportunity scoring

---

## Files to Create

### 1. `Investor_Hub.html` — Landing Page
**Purpose:** Central navigation to all investor calculators with executive summary stats.

**Key Elements:**
- 4 calculator cards (Market Sizing, Revenue Model, Opportunity Scorer, Exit & Returns)
- Global headline stats: $1T+ diabetes spend, 589M patients, $86B drug market, 42.8% undiagnosed
- Quick "Investment Thesis" summary for each disease
- Same iframe-based calculator loading as existing `Disease_Burden_Hub.html`

---

### 2. `Market_Sizing_Engine.html` — TAM/SAM/SOM Calculator
**Purpose:** Calculate Total Addressable Market across countries, diseases, and product verticals.

**7 Tabs:**

| Tab | Content |
|-----|---------|
| Guide | How to use, metric definitions |
| Market Overview | Country + disease + product selector → TAM/SAM/SOM stat cards + charts |
| TAM Deep Dive | Country × disease matrix, product vertical breakdown |
| Geographic Opportunities | Top countries by TAM, scatter plot (size vs growth), hot market highlights |
| Growth Projections | 10-year TAM/SAM/SOM projections with bull/base/bear scenarios |
| Competitive Landscape | Disease × product heatmap (white space vs crowded), top opportunities ranked |
| Methodology | Formulas, sources, assumptions |

**Data Reframing (Health → Investor):**
| Health Metric | Investor Metric |
|--------------|----------------|
| Patient population (589M diabetes) | Addressable users |
| Treatment cost per patient ($94–$12,022) | Revenue per user potential |
| Undiagnosed rate (42.8%) | Market penetration gap / growth runway |
| Disease CAGR (2.0%) | Market growth rate |
| Healthcare spend/capita ($50–$12,500) | Willingness to pay proxy |
| Complication cascade (27% diabetes→CKD) | Upsell/expansion opportunity |
| Digital health penetration (2–8%) | Digital TAM multiplier |

**10 Product Verticals to Size:**
1. Digital Therapeutics — $3.2B (diabetes), 22% CAGR
2. Remote Patient Monitoring — $2.8B, 25% CAGR
3. Diagnostics & Screening — $8.5B, 12% CAGR
4. Pharmaceuticals — $86B, 6% CAGR (GLP-1 alone → $150B by 2035)
5. Medical Devices (CGM, pumps) — $28B, 8% CAGR
6. Telehealth & Virtual Care — $4.5B, 24% CAGR
7. AI Clinical Decision Support — $1.2B, 35% CAGR
8. Insurance & Risk Analytics — $2.8B, 18% CAGR
9. Care Coordination Platforms — $2.1B, 28% CAGR
10. Wellness & Prevention — $4.5B, 15% CAGR

**TAM Calculation Formula:**
```
TAM = Patient_Population × TAM_Per_Patient[income_tier]
SAM = TAM × Adoption_Rate × Digital_Penetration
SOM = SAM × Market_Capture_Rate (default 2% for startup)
Projected_TAM(year) = TAM × (1 + disease_CAGR)^years × (1 + pop_growth)^years × (1 + adoption_growth)^years
```

**Per-Patient Spend by Income Tier (USD/year):**
| Vertical | High Income | Upper-Middle | Lower-Middle |
|----------|-----------|-------------|-------------|
| Digital Therapeutics | $1,200 | $400 | $80 |
| RPM | $800 | $250 | $50 |
| Diagnostics | $500 | $150 | $30 |
| Pharmaceuticals | $3,500 | $800 | $150 |
| Devices | $1,500 | $400 | $80 |
| Telehealth | $600 | $180 | $40 |
| AI Clinical | $400 | $120 | $25 |
| Insurance/Risk | $900 | $200 | $40 |
| Care Coordination | $700 | $200 | $45 |
| Wellness | $500 | $150 | $35 |

---

### 3. `Revenue_Model.html` — Startup Revenue & Unit Economics
**Purpose:** Model a healthtech startup's 5-year revenue trajectory, unit economics, and funding needs.

**7 Tabs:**

| Tab | Content |
|-----|---------|
| Guide | SaaS metrics primer (ARR, MRR, LTV, CAC, NRR, burn rate) |
| Company Setup | Business model, target disease, target customer, pricing tiers |
| Revenue Projections | 5-year MRR/ARR with growth + churn + expansion, time-to-$XM ARR |
| Unit Economics | LTV, CAC, LTV:CAC ratio, payback period, gross margin waterfall |
| Burn Rate & Funding | Monthly burn, runway, cash curve, cap table evolution across rounds |
| Scenario Comparison | Conservative/Base/Aggressive side-by-side with overlay chart |
| Methodology | Formulas, benchmark sources |

**Key Inputs:**
- Company type: SaaS, B2B Enterprise, B2C App, Marketplace, Device, Hybrid
- Disease focus: Diabetes, CKD, Hypertension, Thyroid, Multi-condition
- Target customer: Patients (B2C), Providers (B2B), Payers (B2B), Pharma (B2B), Employers (B2B)
- ARPU/month: $5–$5,000
- MoM growth rate: 5–30% (with deceleration)
- Monthly churn: 1–15%
- Expansion revenue: 0–30%
- CAC: $10–$5,000
- Gross margin: 60–95%
- Monthly burn: $50K–$5M

**Disease-Specific Benchmarks (embed):**
| Disease | B2C ARPU | B2B ARPU | CAC (B2C) | CAC (B2B) | Monthly Churn | Gross Margin |
|---------|---------|---------|----------|----------|-------------|-------------|
| Diabetes | $45 | $350 | $150 | $1,200 | 4.0% | 82% |
| CKD | $80 | $500 | $300 | $2,000 | 3.0% | 70% |
| Hypertension | $30 | $200 | $100 | $800 | 5.0% | 80% |
| Thyroid | $50 | $250 | $200 | $1,000 | 4.0% | 78% |
| Multi-condition | $60 | $400 | $200 | $1,500 | 3.5% | 85% |

**Revenue Projection Formula:**
```
Users(month) = Users(prev) × (1 + growth_rate - churn_rate) + new_users
MRR(month) = Users(month) × ARPU × (1 + expansion_rate/12)
Growth_Rate(quarter) = Initial_Growth × (1 - deceleration)^quarter
ARR = MRR × 12
Net_Revenue_Retention = (MRR_start + expansion - churn) / MRR_start
LTV = ARPU × Gross_Margin / Monthly_Churn
CAC_Payback = CAC / (ARPU × Gross_Margin)
```

---

### 4. `Opportunity_Scorer.html` — Investment Thesis Analyzer
**Purpose:** Score and compare chronic disease investment opportunities across multiple dimensions.

**7 Tabs:**

| Tab | Content |
|-----|---------|
| Guide | Scoring methodology, dimension definitions |
| Opportunity Dashboard | Select disease × product × geography → composite score (0-100) with radar chart |
| White Space Mapper | Disease × product heatmap showing saturation (green=open, red=crowded) |
| Deal Comparables | Filterable table of 20+ recent healthtech deals with valuations |
| Thesis Builder | Interactive tool generating structured investment thesis from selections |
| Geographic Arbitrage | Same opportunity compared across 5 countries side-by-side |
| Methodology | Scoring weights, data sources |

**7 Scoring Dimensions (weighted):**
1. **Market Size (20%)** — TAM for disease × product × geography
2. **Growth Rate (15%)** — Market CAGR
3. **Unmet Need (20%)** — Undiagnosed rate, treatment gap, awareness gap
4. **Competitive Intensity (15%)** — Inverse (less competition = higher score)
5. **Unit Economics Potential (10%)** — Expected LTV:CAC, margins
6. **Regulatory Tailwind (10%)** — FDA DTx pathway, reimbursement trends
7. **Impact Score (10%)** — DALYs addressable, cost savings potential

**Market Saturation Matrix (pre-populated, 1-5 scale):**
| | DTx | RPM | Dx | Pharma | Devices | Telehealth | AI | Insurance | Care Coord | Wellness |
|---|---|---|---|---|---|---|---|---|---|---|
| Diabetes | 4 | 4 | 3 | 5 | 4 | 3 | 2 | 2 | 3 | 3 |
| CKD | 2 | 2 | 2 | 3 | 3 | 1 | 1 | 1 | 2 | 1 |
| Hypertension | 3 | 3 | 2 | 5 | 4 | 2 | 2 | 2 | 2 | 2 |
| Thyroid | 1 | 1 | 2 | 4 | 2 | 1 | 1 | 1 | 1 | 1 |

*(1 = white space, 5 = crowded)*

**Deal Comps Database (20+ deals to embed):**
- Virta Health: $133M Series E, $1.5B valuation (2024, diabetes DTx)
- Livongo → Teladoc: $18.5B M&A (2020, multi RPM)
- Dexcom: $45B public (2024, diabetes devices)
- Strive Health: $166M Series C, $800M val (2023, CKD care coord)
- Hello Heart: $70M Series D (2023, HTN DTx)
- Paloma Health: $10M Series A (2022, thyroid telehealth)
- Tempus AI: $6.1B IPO (2024, AI clinical)
- Hinge Health: $400M Series E, $6.2B val (2022, multi DTx)
- Noom: $540M Series F, $3.7B val (2021, wellness)
- BioFourmis: $320M Series D, $1.3B val (2022, RPM)
- ...and 10+ more

---

### 5. `Exit_Returns_Calculator.html` — Exit & Portfolio Returns
**Purpose:** Model VC investment returns, portfolio construction, and exit scenarios.

**7 Tabs:**

| Tab | Content |
|-----|---------|
| Guide | VC return concepts (MOIC, IRR, DPI, TVPI, carry) |
| Single Investment | Entry/exit valuation, MOIC, IRR, ownership at exit |
| Portfolio Simulator | Fund-level modeling with power-law distribution |
| Valuation Benchmarks | Median valuations by stage × disease × product |
| Sensitivity Analysis | Monte Carlo simulation: probability of 3x/5x/10x, tornado chart |
| Megatrends | 8 macro trends driving chronic disease investment returns |
| Methodology | Formulas, sources |

**Exit Multiple Benchmarks (Revenue multiples by category):**
| Category | Low Growth | Med Growth | High Growth | Median |
|----------|-----------|-----------|------------|--------|
| Digital Therapeutics | 8x | 15x | 25x | 12x |
| RPM | 6x | 12x | 20x | 10x |
| Diagnostics | 4x | 8x | 15x | 7x |
| Pharma | 3x | 6x | 12x | 5x |
| Devices | 3x | 7x | 15x | 6x |
| Telehealth | 5x | 10x | 18x | 8x |
| AI Clinical | 10x | 20x | 40x | 18x |
| Care Coordination | 6x | 12x | 22x | 10x |

**Valuation Benchmarks by Stage:**
| Stage | Median Pre-Money | Range | Revenue Multiple |
|-------|-----------------|-------|-----------------|
| Pre-Seed | $5M | $2–10M | N/A |
| Seed | $12M | $5–25M | 50–100x |
| Series A | $40M | $20–80M | 20–50x |
| Series B | $150M | $80–400M | 15–30x |
| Series C | $500M | $250–1.5B | 10–20x |
| Growth | $1.5B | $500M–5B | 8–15x |

**Disease Valuation Premiums:**
- Diabetes: 1.2x (largest market, most exits)
- CKD: 1.1x (high spend per patient)
- Hypertension: 0.9x (commodity risk)
- Thyroid: 0.8x (smaller market)
- Multi-condition: 1.3x (platform premium)

**Portfolio Simulator Logic (power-law):**
```
Fund of 20 investments:
- 1-2 return 10-50x (home runs)
- 3-5 return 3-10x (strong)
- 5-8 return 1-3x (moderate)
- 5-10 return 0-1x (write-offs)
Target: 3x+ net fund TVPI
```

**8 Megatrends to Display:**
1. Aging demographics (65+ doubling by 2050)
2. Obesity epidemic (57-60% overweight by 2050)
3. GLP-1 revolution ($150B by 2035)
4. Digital health regulation (FDA DTx pathway)
5. Value-based care shift
6. AI in healthcare
7. Emerging market growth (India, Indonesia, Nigeria)
8. Mental health comorbidity (35% depression in diabetes)

---

## Shared Design System

### Color Palette
- **Primary accent:** Emerald green `#10b981` (money/growth)
- **Secondary accent:** Amber `#f59e0b` (gold/premium)
- **Background (dark):** `#0B1120`, `#111827`, `#162032`
- **Background (light):** `#f8fafc`, `#ffffff`, `#f1f5f9`
- **Text:** `#e2e8f0` (dark), `#1e293b` (light)

### Typography
- Display: Instrument Serif
- Body: DM Sans (300, 500, 700)

### Dependencies (CDN only)
- Chart.js 4.4.1
- Google Fonts

### UI Components
- Stat cards with colored left borders
- Tab navigation (7 tabs per calculator)
- Range sliders with live value display
- Country/disease/product dropdowns with `onchange="recalc()"`
- Scenario pills (Bull/Base/Bear)
- Responsive grid (3-col → 2-col → 1-col)

---

## Country Data (20 Countries — All Calculators)

Each country object includes:
```
{
  name, pop (M), gdppc ($), income_tier,
  healthSpendPC ($), digitalPenetration (%),
  diabetes: { prev%, pop(M), undiag%, cagr% },
  ckd: { prev%, pop(M), undiag%, cagr% },
  htn: { prev%, pop(M), undiag%, cagr% },
  thyroid: { prev%, pop(M), undiag%, cagr% },
  popGrowth%, costInflation%
}
```

Countries: India, USA, China, UK, Germany, Japan, Brazil, Nigeria, South Africa, Australia, Canada, Mexico, Indonesia, Bangladesh, Egypt, Saudi Arabia, France, South Korea, Russia, Thailand

---

## Implementation Order

1. **`Diabetes_Investor_Calculator.html`** — Sample/proof-of-concept (diabetes only, all investor tabs)
2. **`Market_Sizing_Engine.html`** — All diseases, all countries, all verticals
3. **`Revenue_Model.html`** — Disease-agnostic startup modeling
4. **`Opportunity_Scorer.html`** — Cross-disease comparison engine
5. **`Exit_Returns_Calculator.html`** — Portfolio & exit modeling
6. **`Investor_Hub.html`** — Landing page linking everything

---

## Key Differentiators vs Existing Burden Calculators

| Existing (Health Focus) | New (Investor Focus) |
|------------------------|---------------------|
| How many people are sick? | How big is the market? |
| What does treatment cost the system? | What can a startup charge? |
| What are the health outcomes? | What are the financial returns? |
| Which countries have highest burden? | Which countries have best opportunity? |
| How will disease grow? | How will revenue grow? |
| What interventions work? | What products can be built? |
| DALYs and QALYs | MOIC, IRR, LTV:CAC |
| Comorbidity cascades | Upsell/expansion pathways |
| Undiagnosed rates | Market penetration runway |
| Healthcare cost inflation | Pricing power & willingness to pay |
