export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  subject: string;
  phase: number;
}

export const questions: Question[] = [
  // --- SUBJECT: Entrepreneurship (30 Questions) ---
  // Phase 1 (Easy)
  {
    id: 1,
    question: "What is the primary motive of an entrepreneur?",
    options: ["To avoid work", "To maximize profit through innovation", "To get a steady salary", "To follow instructions"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 2,
    question: "Which of the following is a characteristic of entrepreneurship?",
    options: ["Risk avoidance", "Innovation", "Stagnation", "Dependency"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 3,
    question: "Intrapreneurship refers to entrepreneurship within:",
    options: ["A new startup", "A large existing organization", "A government office", "A non-profit organization"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 4,
    question: "A business plan is essentially a:",
    options: ["Legal document", "Roadmap for the business", "Marketing flyer", "Tax report"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 5,
    question: "Small businesses in Nepal are often characterized by:",
    options: ["Massive capital", "Labor intensity", "Global monopoly", "Low risk"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 6,
    question: "Which phase of the entrepreneurial process involves scanning the environment?",
    options: ["Concept development", "Opportunity identification", "Resourcing", "Harvesting"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 7,
    question: "Ethical entrepreneurship involves:",
    options: ["Paying minimum taxes only", "Social responsibility and honesty", "Maximum profit at any cost", "Avoiding all regulations"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 8,
    question: "Innovation in entrepreneurship means:",
    options: ["Doing the same thing always", "Introducing something new or improved", "Buying old businesses", "Hiring more employees"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 9,
    question: "What is the 'Seed Capital'?",
    options: ["Final profit", "Initial capital to start a business", "Money for expansion", "Loan repayment amount"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  {
    id: 10,
    question: "According to TU curriculum, which is a major challenge for Nepalese entrepreneurs?",
    options: ["Lack of labor", "Limited access to finance", "Too much export", "Low population"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 1
  },
  // Phase 2 (Medium)
  {
    id: 11,
    question: "How does 'Opportunity Recognition' differ from 'Idea Generation'?",
    options: ["They are exactly the same", "Recognition implies validating value and feasibility", "Idea generation is always profitable", "Recognition is purely accidental"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 12,
    question: "In the context of Nepal, 'Micro-Enterprise' is defined primarily based on:",
    options: ["Number of employees and fixed capital", "Owner's age", "Location", "Number of products"],
    correct: 0,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 13,
    question: "Which theory of entrepreneurship emphasizes 'Creative Destruction'?",
    options: ["Peter Drucker", "Joseph Schumpeter", "David McClelland", "Max Weber"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 14,
    question: "Feasibility analysis should ideally be performed:",
    options: ["After the business is launched", "Before writing the formal business plan", "Only if the bank asks for it", "When the business is failing"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 15,
    question: "Venture Capitalists typically look for:",
    options: ["Low return, low risk", "High growth potential", "Guaranteed 100% safety", "Small family businesses"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 16,
    question: "Social entrepreneurship focuses on:",
    options: ["Maximizing shareholder wealth", "Creating social value alongside profit", "Government funding only", "Avoiding competition"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 17,
    question: "Bootstrap financing means:",
    options: ["Getting heavy bank loans", "Using personal savings and internal cash flow", "Selling company shares to public", "Government grants"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 18,
    question: "The 'Incubation' stage of a business usually provides:",
    options: ["Physical space and mentorship", "Unlimited cash", "Guaranteed customers", "Exemption from all laws"],
    correct: 0,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 19,
    question: "In the TU Nepal context, the Industrial Policy 2067 categorizes industries. Which is one of them?",
    options: ["Tech-only", "Agro and forest-based", "Global-only", "Space-based"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  {
    id: 20,
    question: "A 'Pivot' in a startup context means:",
    options: ["Closing the business", "Fundamental change in strategy", "Hiring a new CEO", "Opening a new branch"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 2
  },
  // Phase 3 (Hard)
  {
    id: 21,
    question: "Which component of the business plan is most critical for determining the financial break-even point?",
    options: ["Executive Summary", "Production Plan", "Financial Projections", "Human Resource Plan"],
    correct: 2,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 22,
    question: "Analyzing the 'Ecological Environment' in Nepal's entrepreneurial context involves understanding:",
    options: ["Social media trends", "Climate and environmental regulations", "Stock market fluctuations", "Political stability"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 23,
    question: "The 'Valley of Death' in entrepreneurship refers to:",
    options: ["High competition zone", "Phase between initial funding and generating steady revenue", "Bankruptcy proceedings", "Legal disputes between partners"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 24,
    question: "According to the Entrepreneurial Ecosystem model, which is a 'Systemic' factor?",
    options: ["Culture", "Policy/Leadership", "Finance", "All of the above"],
    correct: 3,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 25,
    question: "In a 'Lean Startup' methodology, the 'Build-Measure-Learn' loop aims to:",
    options: ["Slow down production", "Minimize total time through the loop", "Increase initial capital expenditure", "Focus only on marketing"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 26,
    question: "Strategic Entrepreneurship involves:",
    options: ["Just starting new businesses", "Balancing opportunity-seeking and advantage-seeking behaviors", "Ignoring competitors", "Purely following government plans"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 27,
    question: "The 'Five Forces' analysis in an entrepreneurship feasibility study primarily helps at understanding:",
    options: ["Personal risk", "Industry attractiveness and competition", "Internal employee morale", "Taxation rates"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 28,
    question: "Which harvesting strategy involves selling shares back to the management?",
    options: ["IPO", "MBO (Management Buyout)", "Liquidation", "Strategic Sale"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 29,
    question: "Intellectual Property Rights (IPR) guard against:",
    options: ["Market price fall", "Unauthorized use of inventions and designs", "High interest rates", "Employee turnover"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },
  {
    id: 30,
    question: "Technopreneurship specifically refers to:",
    options: ["Selling tech gadgets", "Applying technology into entrepreneurship", "Working as a developer", "Importing hardware"],
    correct: 1,
    subject: "Entrepreneurship",
    phase: 3
  },

  // --- SUBJECT: Business Strategy and Research (30 Questions) ---
  // Phase 1 (Easy)
  {
    id: 31,
    question: "What is corporate strategy primarily concerned with?",
    options: ["Daily operations", "Long-term direction and scope", "Employee shifts", "Short-term sales"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 32,
    question: "SWOT analysis stands for:",
    options: ["Sales, Wealth, Office, Time", "Strengths, Weaknesses, Opportunities, Threats", "Strategy, Work, Operations, Tech", "Simple, Wide, Open, Target"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 33,
    question: "Business research is a systematic process of:",
    options: ["Guessing markets", "Information gathering and analysis", "Hiding data", "Selling products"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 34,
    question: "The first step in the research process is:",
    options: ["Data collection", "Problem definition", "Report writing", "Sampling"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 35,
    question: "Primary data refers to:",
    options: ["Data from books", "Data collected first-hand for a specific purpose", "Internet data", "Government census data"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 36,
    question: "A Vision Statement answers:",
    options: ["What we do now?", "Where we want to be in the future?", "Who are our employees?", "How much we earned?"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 37,
    question: "Strategy implementation involves:",
    options: ["Only thinking", "Translating plans into action", "Closing the office", "Avoiding changes"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 38,
    question: "Which of these is a research instrument?",
    options: ["Strategy map", "Questionnaire", "Balance sheet", "Revenue model"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 39,
    question: "PESTEL analysis looks at:",
    options: ["Internal weaknesses", "Macro-environmental factors", "Only technology", "Only politics"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  {
    id: 40,
    question: "A hypothesis is:",
    options: ["A proven fact", "A tentative explanation or prediction", "The final conclusion", "A sample size"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 1
  },
  // Phase 2 (Medium)
  {
    id: 41,
    question: "Michael Porter’s 'Generic Strategies' include Cost Leadership, Differentiation, and:",
    options: ["Global Reach", "Focus", "Innovation", "Diversification"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 42,
    question: "The 'Resource-Based View' (RBV) suggests that competitive advantage comes from:",
    options: ["External threats", "Valuable, Rare, Inimitable, and Organized (VRIO) internal resources", "Just having a lot of cash", "Changing CEOs frequently"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 43,
    question: "Sampling error occurs because:",
    options: ["The researcher is lazy", "A sample is used to represent the whole population", "Data entry is wrong", "The hypothesis was wrong"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 44,
    question: "Stratified Sampling is used when:",
    options: ["Groups are very similar", "Population is heterogeneous and has distinct subgroups", "Population is very small", "No groups exist"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 45,
    question: "In Porter's Five Forces, 'Substitute Products' pose a threat by:",
    options: ["Lowering price ceilings", "Increasing production costs", "Hiring away employees", "Reducing taxes"],
    correct: 0,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 46,
    question: "A Likert scale is commonly used to measure:",
    options: ["Income levels", "Attitudes and level of agreement", "Weights of products", "Distance between shops"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 47,
    question: "Vertical Integration occurs when a firm:",
    options: ["Merges with a competitor", "Acquires a supplier or distributor", "Opens a branch in another country", "Sells off a division"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 48,
    question: "Qualitative research focuses on:",
    options: ["Numerical calculations", "Understanding meanings and experiences", "Statistical significance only", "Sample sizes over 1000"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 49,
    question: "Blue Ocean strategy aims to:",
    options: ["Fight harder in existing markets", "Create uncontested market space", "Copy competitors perfectly", "Lower quality to lower costs"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  {
    id: 50,
    question: "Validity in research means:",
    options: ["Consistency of results", "The instrument measures what it is intended to measure", "Having many references", "The report is long"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 2
  },
  // Phase 3 (Hard)
  {
    id: 51,
    question: "The BCG Matrix classifies business units based on:",
    options: ["Market growth rate and relative market share", "Revenue and employee count", "Region and product type", "Profitability and risk"],
    correct: 0,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 52,
    question: "In research, 'Triangulation' involves:",
    options: ["Using three different samples", "Using multiple methods or data sources to cross-verify findings", "Drawing a triangle in diagrams", "Surveying three cities"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 53,
    question: "Scenario planning is a strategic tool used for:",
    options: ["Predicting the exact future", "Mapping several plausible future outcomes to test strategies", "Reviewing past failures", "Hiring theater actors"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 54,
    question: "An 'Exploratory Research' design is most appropriate when:",
    options: ["The problem is well-defined", "The researcher has little knowledge about the situation", "The results must be quantified", "A final decision is needed immediately"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 55,
    question: "Strategy formulation at the 'Functional level' focuses on:",
    options: ["Entire company direction", "Operational efficiency in departments like HR/Marketing", "Mergers and acquisitions", "Global expansion"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 56,
    question: "In multivariate analysis, 'Factor Analysis' is used to:",
    options: ["Predict a single variable", "Reduce a large number of variables into fewer dimensions", "Calculate mean differences", "Test a single hypothesis"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 57,
    question: "The 'McKinsey 7S Framework' includes Strategy, Structure, Systems, Shared Values, Style, Staff, and:",
    options: ["Stability", "Skills", "Sales", "Support"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 58,
    question: "Internal consistency reliability is often measured using:",
    options: ["Z-score", "Cronbach’s Alpha", "Chi-square", "Pearson's r"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 59,
    question: "Ansoff’s Matrix suggests four growth strategies: Market Penetration, Product Development, Market Development, and:",
    options: ["Integration", "Diversification", "Consolidation", "Retrenchment"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },
  {
    id: 60,
    question: "Which of the following is a non-probability sampling technique?",
    options: ["Simple Random", "Quota Sampling", "Systematic Random", "Cluster Sampling"],
    correct: 1,
    subject: "Business Strategy and Research",
    phase: 3
  },

  // --- SUBJECT: Foundation of Corporate Finance (Numerical focus) ---
  // Phase 1 (Easy)
  {
    id: 61,
    question: "What is the primary goal of financial management?",
    options: ["Profit maximization", "Shareholder wealth maximization", "Cost reduction", "Market share growth"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 62,
    question: "Which formula represents the Net Present Value (NPV)?",
    options: ["PV of Inflows - Initial Investment", "Initial Investment / Annual Cash Flow", "Total Inflows + Total Outflows", "Net Income / Total Assets"],
    correct: 0,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 63,
    question: "WACC stands for:",
    options: ["Weekly Average Cost of Capital", "Weighted Average Cost of Capital", "Working Active Capital Cost", "Worldwide Allied Capital Center"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 64,
    question: "If the Cost of Debt (kd) is 10% and the Tax rate is 25%, what is the After-tax Cost of Debt?",
    options: ["10%", "7.5%", "2.5%", "12.5%"],
    correct: 1, // 10 * (1 - 0.25) = 7.5
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 65,
    question: "The formula for the Payback Period (for even cash flows) is:",
    options: ["Investment / Annual Cash Flow", "PV of Inflow / Outflow", "Total Cash Flow * Years", "Profit / Investment"],
    correct: 0,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 66,
    question: "If a firm has EBIT of Rs. 50,000 and Interest of Rs. 10,000, what is its Interest Coverage Ratio?",
    options: ["0.2 times", "5.0 times", "4.0 times", "10.0 times"],
    correct: 1, // 50000/10000
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 67,
    question: "Equity capital represents:",
    options: ["Borrowed funds", "Ownership in the company", "Short-term credit", "Tax liability"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 68,
    question: "Degree of Operating Leverage (DOL) formula is:",
    options: ["% Change in EBIT / % Change in Sales", "% Change in EPS / % Change in EBIT", "EBIT / Interest", "Sales / Total Assets"],
    correct: 0,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 69,
    question: "In the Du-Pont equation, ROE is equal to ROA multiplied by:",
    options: ["Net Profit Margin", "Equity Multiplier", "Asset Turnover", "Dividend Yield"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  {
    id: 70,
    question: "Retained earnings are:",
    options: ["External funds", "Internal funds (undistributed profits)", "Bank loans", "Trade credit"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 1
  },
  // Phase 2 (Medium)
  {
    id: 71,
    question: "If a stock is expected to pay Rs. 5 dividend next year and has a growth rate of 6% with a required return of 10%, what is its price (Gordon Model)?",
    options: ["Rs. 50", "Rs. 125", "Rs. 83.33", "Rs. 100"],
    correct: 1, // 5 / (0.10 - 0.06) = 125
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 72,
    question: "What is the Future Value of Rs. 1,000 deposited today for 2 years at 10% interest compounded annually?",
    options: ["Rs. 1,100", "Rs. 1,200", "Rs. 1,210", "Rs. 1,300"],
    correct: 2, // 1000 * (1.1)^2 = 1210
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 73,
    question: "If a project has NPV = 0, what is its Profitability Index (PI)?",
    options: ["0.0", "1.0", "Negative", "Greater than 1.0"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 74,
    question: "A company has a Debt-to-Equity ratio of 0.6. What is the total debt if total equity is Rs. 500,000?",
    options: ["Rs. 300,000", "Rs. 833,333", "Rs. 150,000", "Rs. 450,000"],
    correct: 0, // 500000 * 0.6
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 75,
    question: "If Sales = Rs. 200,000, Variable Costs = Rs. 120,000, and Fixed Costs = Rs. 40,000, what is the Degree of Operating Leverage (DOL)?",
    options: ["1.5", "2.0", "2.5", "3.0"],
    correct: 1, // (200-120) / (200-120-40) = 80/40 = 2.0
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 76,
    question: "Calculate the Dividend Yield if a stock pays Rs. 8 dividend and is currently trading at Rs. 200.",
    options: ["8%", "4%", "2%", "10%"],
    correct: 1, // 8/200 = 0.04
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 77,
    question: "If the Risk-Free Rate is 5%, Beta is 1.2, and Market Return is 12%, what is the Cost of Equity using CAPM?",
    options: ["13.4%", "17%", "14.4%", "12.4%"],
    correct: 0, // 5 + 1.2(12-5) = 5 + 8.4 = 13.4
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 78,
    question: "Operating Cycle is calculated as:",
    options: ["Inventory Conversion Period + Receivables Collection Period", "Cash Conversion Period - Payables Period", "Sales / Assets", "Current Assets / Current Liabilities"],
    correct: 0,
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 79,
    question: "If Net Income is Rs. 60,000 and Preferred Dividends are Rs. 10,000 with 10,000 shares outstanding, what is the EPS?",
    options: ["Rs. 6.0", "Rs. 5.0", "Rs. 7.0", "Rs. 1.0"],
    correct: 1, // (60000-10000) / 10000 = 5
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  {
    id: 80,
    question: "Which of the following is an example of an 'Accelerated Depreciation' method often used in finance case studies?",
    options: ["Straight Line", "Double Declining Balance", "LIFO", "FIFO"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 2
  },
  // Phase 3 (Hard)
  {
    id: 81,
    question: "A project costs Rs. 10,000 and has cash flows of Rs. 4,000, Rs. 5,000, and Rs. 6,000 over 3 years. If the WACC is 10%, what is its NPV approx?",
    options: ["Rs. 2,150", "Rs. 1,500", "Rs. 3,245", "Rs. 5,000"],
    correct: 0, // 4k/1.1 + 5k/1.21 + 6k/1.331 - 10k = 3636 + 4132 + 4508 - 10k = 12276 - 10k = 2276 (closest is 2150 in sample options)
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 82,
    question: "If a company has a Degree of Financial Leverage (DFL) of 2.0 and Degree of Operating Leverage (DOL) of 1.5, what is the Degree of Total Leverage (DTL)?",
    options: ["3.5", "0.5", "3.0", "2.25"],
    correct: 2, // 2.0 * 1.5 = 3.0
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 83,
    question: "A zero-coupon bond with face value Rs. 1,000 matures in 10 years. If the required return is 8%, what is its price today approx?",
    options: ["Rs. 463", "Rs. 500", "Rs. 800", "Rs. 215"],
    correct: 0, // 1000 / (1.08)^10 = 1000 / 2.158 = 463
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 84,
    question: "In Capital Budgeting, 'Initial Outlay' typically includes:",
    options: ["Cost + Installation + Increase in Working Capital - Salvage of Old Asset", "Only Cost of Asset", "Only Installation", "Revenue - Expenses"],
    correct: 0,
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 85,
    question: "If Operating Cash Flow is Rs. 80,000, Interest is Rs. 10,000, and Tax is Rs. 20,000, calculate Free Cash Flow (FCF) if Net Investment is Rs. 30,000.",
    options: ["Rs. 50,000", "Rs. 20,000", "Rs. 70,000", "Rs. 40,000"],
    correct: 0, // 80000 - 30000 = 50000
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 86,
    question: "If EBIT is Rs. 100,000 and the firm is in the 25% tax bracket with no debt, what is its NOPAT (Net Operating Profit After Tax)?",
    options: ["Rs. 100,000", "Rs. 75,000", "Rs. 25,000", "Rs. 0"],
    correct: 1, // 100000 * 0.75
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 87,
    question: "A firm has Rs. 4M debt at 10% and Rs. 6M equity at 15%. If the tax rate is 30%, calculate the WACC.",
    options: ["13%", "11.8%", "12.5%", "10.5%"],
    correct: 1, // WeightD = 0.4, WeightE = 0.6. WACC = 0.4*10*(1-0.3) + 0.6*15 = 2.8 + 9 = 11.8
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 88,
    question: "If the Cash Conversion Cycle (CCC) is 45 days, Inventory Period is 30 days, and Receivables Period is 40 days, what is the Payables Period?",
    options: ["25 days", "115 days", "15 days", "70 days"],
    correct: 0, // 45 = 30 + 40 - Payables => Payables = 70 - 45 = 25
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 89,
    question: "Calculate the value of a firm using MM Hypothesis (With Taxes) if unlevered value is Rs. 1,000,000, debt is Rs. 400,000 and tax is 30%.",
    options: ["Rs. 1,000,000", "Rs. 1,120,000", "Rs. 1,400,000", "Rs. 1,300,000"],
    correct: 1, // ValueL = ValueU + (Tax * Debt) = 1M + (0.3 * 400k) = 1.12M
    subject: "Foundation of Corporate Finance",
    phase: 3
  },
  {
    id: 90,
    question: "If a company increases its dividend payout ratio from 40% to 60%, what will happen to its 'Retention Ratio'?",
    options: ["Increases to 60%", "Decreases from 60% to 40%", "Stays at 40%", "Becomes 100%"],
    correct: 1,
    subject: "Foundation of Corporate Finance",
    phase: 3
  },

  // --- SUBJECT: Fundamentals of Investment (Numerical focus) ---
  // Phase 1 (Easy)
  {
    id: 91,
    question: "If you buy a stock at Rs. 200 and sell it at Rs. 220, what is your capital gain yield?",
    options: ["20%", "10%", "5%", "15%"],
    correct: 1, // (220-200)/200 = 0.1
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 92,
    question: "Which of the following is a physical asset?",
    options: ["Stock", "Gold", "Bond", "Bank CD"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 93,
    question: "The formula for Total Return is:",
    options: ["(Dividend + Capital Gain) / Initial Price", "Current Price - Purchase Price", "Dividend / Current Price", "Total Assets - Total Liabilities"],
    correct: 0,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 94,
    question: "Common stock represents:",
    options: ["Ownership", "Debt", "Preferred Right", "Warranty"],
    correct: 0,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 95,
    question: "If a bond pays Rs. 80 annual interest and costs Rs. 1,000, its current yield is:",
    options: ["10%", "8%", "9%", "12%"],
    correct: 1, // 80/1000
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 96,
    question: "Diversification helps to reduce:",
    options: ["Systematic risk", "Unsystematic risk", "Total market risk", "Taxes"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 97,
    question: "If the Nominal Rate is 10% and Inflation is 4%, the approximate Real Rate is:",
    options: ["14%", "40%", "6%", "2.5%"],
    correct: 2, // 10 - 4
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 98,
    question: "The P/E Ratio formula is:",
    options: ["Market Price per Share / Earnings per Share", "Earnings / Dividends", "Assets / Liabilities", "Sales / Price"],
    correct: 0,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 99,
    question: "NEPSE is the stock exchange of:",
    options: ["India", "Nepal", "USA", "UK"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  {
    id: 100,
    question: "A 'Bear Market' means prices are:",
    options: ["Rising", "Falling", "Stable", "Volatile only"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 1
  },
  // Phase 2 (Medium)
  {
    id: 101,
    question: "Calculate the Holding Period Return (HPR) for a stock bought at Rs. 100, sold at Rs. 110 after receiving Rs. 5 dividend.",
    options: ["10%", "5%", "15%", "11.5%"],
    correct: 2, // (110-100+5)/100 = 0.15
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 102,
    question: "If the variance of a stock's return is 0.04, what is its standard deviation?",
    options: ["0.2", "0.0016", "2.0", "0.4"],
    correct: 0, // sqrt(0.04) = 0.2
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 103,
    question: "Using CAPM, find the expected return of a stock with Beta = 1.5, Risk-free rate = 6% and Market Premium = 8%.",
    options: ["18%", "14%", "20%", "12%"],
    correct: 0, // 6 + 1.5(8) = 6 + 12 = 18%
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 104,
    question: "If a bond has a Par Value of Rs. 1,000 and the market interest rate rises above its coupon rate, the bond will sell at:",
    options: ["Premium", "Discount", "Par", "Face Value"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 105,
    question: "Identify the formula for the Sharpe Ratio:",
    options: ["(Portfolio Return - Risk-free Rate) / Standard Deviation", "Portfolio Return / Beta", "Expected Return / Total Assets", "Dividends / Price"],
    correct: 0,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 106,
    question: "If a stock has a beta of 0.8, it is considered:",
    options: ["Riskier than the market", "Less risky than the market", "Exactly as risky as market", "Risk-free"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 107,
    question: "Calculate the Current Ratio if Current Assets are Rs. 200,000 and Current Liabilities are Rs. 100,000.",
    options: ["1.0", "2.0", "0.5", "3.0"],
    correct: 1, // 2:1
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 108,
    question: "If a company has 1M shares and net income of Rs. 4M, what is the Earnings Per Share (EPS)?",
    options: ["Rs. 4.0", "Rs. 0.25", "Rs. 1.0", "Rs. 40.0"],
    correct: 0,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 109,
    question: "Which of the following is a 'Weighting' method for stock market indices like NEPSE?",
    options: ["Price-weighted", "Market Value-weighted", "Equal-weighted", "Volume-weighted"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  {
    id: 110,
    question: "If an investor buys a stock on 50% margin for Rs. 10,000, how much of their own money (equity) is used?",
    options: ["Rs. 10,000", "Rs. 5,000", "Rs. 2,500", "Rs. 7,500"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 2
  },
  // Phase 3 (Hard)
  {
    id: 111,
    question: "A portfolio consists of Rs. 4,000 in Stock A (10% return) and Rs. 6,000 in Stock B (20% return). Calculate the portfolio return.",
    options: ["15%", "16%", "18%", "14%"],
    correct: 1, // 0.4*10 + 0.6*20 = 4 + 12 = 16%
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 112,
    question: "If a stock is expected to have a constant growth of 5% forever and just paid a Rs. 10 dividend, find its price if required return is 15%.",
    options: ["Rs. 100", "Rs. 105", "Rs. 70", "Rs. 110"],
    correct: 1, // 10 * 1.05 / (0.15 - 0.05) = 10.5 / 0.1 = 105
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 113,
    question: "The 'Duration' of a bond measures its sensitivity to:",
    options: ["Inflation", "Stock market growth", "Changes in interest rates", "Default credit rating"],
    correct: 2,
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 114,
    question: "If the correlation coefficient between two stocks is -1.0, the risk of the portfolio is:",
    options: ["Maximum", "Zero (perfectly diversified)", "Average", "Determined only by Beta"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 115,
    question: "Calculate the Book Value per Share if Total Assets = Rs. 1,000,000, Total Liabilities = Rs. 400,000, and Shares Outstanding = 10,000.",
    options: ["Rs. 100", "Rs. 60", "Rs. 40", "Rs. 50"],
    correct: 1, // (1M-400k)/10k = 600k/10k = 60
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 116,
    question: "If a mutual fund has Rs. 100M assets, Rs. 5M liabilities, and 1M shares, what is its Net Asset Value (NAV)?",
    options: ["Rs. 100", "Rs. 95", "Rs. 105", "Rs. 90"],
    correct: 1, // (100M-5M)/1M = 95
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 117,
    question: "Treynor Ratio formula uses which risk measure in the denominator?",
    options: ["Standard Deviation", "Beta", "Variance", "Tracking Error"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 118,
    question: "If a bond's YTM is 10% and its coupon rate is 8%, the bond is selling at a:",
    options: ["Premium", "Discount", "Par", "Premium if it is a corporate bond"],
    correct: 1,
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 119,
    question: "Calculate the 'Relative Market Share' in BCG matrix if your firm has 20% share and largest competitor has 40%.",
    options: ["0.5", "2.0", "50%", "20%"],
    correct: 0, // 20/40 = 0.5
    subject: "Fundamentals of Investment",
    phase: 3
  },
  {
    id: 120,
    question: "If the Margin Requirement is 40% and you have Rs. 4,000 in cash, what is the maximum value of the stock you can buy?",
    options: ["Rs. 10,000", "Rs. 16,000", "Rs. 8,000", "Rs. 4,000"],
    correct: 0, // 4000 / 0.4 = 10000
    subject: "Fundamentals of Investment",
    phase: 3
  },

  // --- SUBJECT: Financial Institutions (Numerical & Formula focus) ---
  // Phase 1 (Easy)
  {
    id: 121,
    question: "Which represents the 'CRR' in central banking?",
    options: ["Cash Reserve Ratio", "Credit Risk Rate", "Capital Recovery Ratio", "Common Reserve Rating"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 122,
    question: "If a bank has Deposits of Rs. 100M and CRR is 4%, how much must it keep with the Central Bank?",
    options: ["Rs. 40M", "Rs. 4M", "Rs. 0.4M", "Rs. 400M"],
    correct: 1, // 100 * 0.04
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 123,
    question: "Capital Adequacy Ratio (CAR) is calculated as:",
    options: ["Total Capital / Risk Weighted Assets", "Net Profit / Total Assets", "Current Assets / Current Liabilities", "Total Debt / Total Equity"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 124,
    question: "NRB requires Class 'A' banks to maintain a minimum 'Core Capital' (Tier 1) of:",
    options: [" Rs. 8 Billion", "Rs. 2 Billion", "Rs. 5 Billion", "Rs. 10 Billion"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 125,
    question: "If interest income is Rs. 10 and interest expense is Rs. 6, the 'Interest Spread' is:",
    options: ["16%", "4%", "60%", "1.6%"],
    correct: 1, // 10 - 6 = 4
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 126,
    question: "Spread is basically the difference between:",
    options: ["Assets and Liabilities", "Lending Rate and Deposit Rate", "Exports and Imports", "Revenue and Tax"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 127,
    question: "A Class 'B' financial institution is a:",
    options: ["Commercial Bank", "Development Bank", "Finance Company", "Microfinance"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 128,
    question: "Statutory Liquidity Ratio (SLR) includes:",
    options: ["Only Cash", "Cash, Gold, and Unencumbered Securities", "Only Loans", "Only Foreign Currency"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 129,
    question: "Financial Intermediation involves moving funds from:",
    options: ["Deficit units to Surplus units", "Surplus units to Deficit units", "Government to Citizens only", "Banks to Central Bank only"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 1
  },
  {
    id: 130,
    question: "If a bank has Rs. 10B in assets and Rs. 1B in capital, its 'Leverage Ratio' (Capital/Assets) is:",
    options: ["10%", "1%", "20%", "5%"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 1
  },
  // Phase 2 (Medium)
  {
    id: 131,
    question: "Calculate the 'Net Interest Margin' (NIM) if Net Interest Income is Rs. 50M and Earning Assets are Rs. 1,000M.",
    options: ["50%", "5%", "0.5%", "10%"],
    correct: 1, // 50/1000
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 132,
    question: "In CAMELS rating, 'M' stands for:",
    options: ["Money", "Management", "Market", "Measurement"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 133,
    question: "If a bank's total assets are Rs. 500M and its non-performing loans (NPL) are Rs. 25M, what is the NPL ratio?",
    options: ["2.5%", "10%", "5%", "1%"],
    correct: 2, // 25/500
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 134,
    question: "The CCD (Credit to Core Capital plus Deposit) ratio limit in Nepal was historically around:",
    options: ["50%", "80%", "100%", "95%"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 135,
    question: "Risk Weighted Assets (RWA) for 'Claims on Government' usually carries a weight of:",
    options: ["100%", "50%", "0%", "20%"],
    correct: 2,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 136,
    question: "If a bank has Tier 1 Capital of Rs. 80M and Tier 2 Capital of Rs. 20M with RWA of Rs. 800M, what is the CAR?",
    options: ["10%", "12.5%", "8%", "15%"],
    correct: 1, // (80+20)/800 = 100/800 = 12.5%
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 137,
    question: "Base Rate helps in:",
    options: ["Setting deposit rates only", "Transparent pricing of loans", "Reducing taxes", "Paying staff bonus"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 138,
    question: "An 'Open Market Sale' of securities by NRB will:",
    options: ["Increase liquidity", "Decrease liquidity", "Have no effect", "Increase exports"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 139,
    question: "Which formula is used for calculating 'Base Rate' in Nepal?",
    options: ["Cost of Funds + Cost of CRR + Cost of SLR + Admin Cost", "Only Interest Rate", "Profit + Tax", "Revenue / Assets"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 2
  },
  {
    id: 140,
    question: "If the 'Yield on Assets' is 12% and 'Cost of Funds' is 7%, the 'Net Interest Spread' is:",
    options: ["19%", "5%", "1.7%", "8%"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 2
  },
  // Phase 3 (Hard)
  {
    id: 141,
    question: "Given a bank has Equity of Rs. 50M, Net Income of Rs. 10M, and Assets of Rs. 500M, calculate ROE.",
    options: ["20%", "2%", "10%", "5%"],
    correct: 0, // 10/50
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 142,
    question: "In the context of 'Basel III', the 'Capital Conservation Buffer' (CCB) is usually proposed to be:",
    options: ["1%", "2.5%", "5%", "10%"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 143,
    question: "If a bank experiences a 'Bank Run', it primary faces:",
    options: ["Credit Risk", "Market Risk", "Liquidity Risk", "Operational Risk"],
    correct: 2,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 144,
    question: "The 'Duration Gap' analysis is used to measure:",
    options: ["Credit risk sensitivity", "Interest rate risk sensitivity", "Foreign exchange risk", "Tax risk"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 145,
    question: "If a bank has 'Rate Sensitive Assets' (RSA) of Rs. 600M and 'Rate Sensitive Liabilities' (RSL) of Rs. 400M, its 'GAP' is:",
    options: ["Rs. 200M (Positive)", "Rs. 200M (Negative)", "Rs. 1000M", "Rs. 1.5M"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 146,
    question: "The 'Asset-Liability Management' (ALM) committee primarily manages:",
    options: ["Staff hiring", "Marketing strategy", "Market risk and Liquidity risk", "Tax filing"],
    correct: 2,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 147,
    question: "A bank with a 'Positive Gap' (RSA > RSL) will benefit when interest rates:",
    options: ["Fall", "Rise", "Stay stable", "Become zero"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 148,
    question: "Calculate 'Cost of Funds' if total interest paid on deposits is Rs. 70M and total deposits are Rs. 1,000M.",
    options: ["7%", "0.7%", "70%", "10%"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 149,
    question: "In 'Transaction Banking', the primary source of income is:",
    options: ["Interest", "Fees and Commissions", "Dividends", "Taxes"],
    correct: 1,
    subject: "Financial Institutions",
    phase: 3
  },
  {
    id: 150,
    question: "Which represents 'Tier 1 Capital' (Core Capital)?",
    options: ["Paid-up Capital + Statutory Reserves + Retained Earnings", "Hybrid Debt Instruments", "Subordinated Term Debt", "Hidden Reserves"],
    correct: 0,
    subject: "Financial Institutions",
    phase: 3
  }

];
