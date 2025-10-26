import React from "react";
import NavigationButton from "../../components/NavigationButton";

import "./Home.css";

const Home: React.FC = () => {



  return (
    <div className="home-body">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="container">
          <a href="/">aoBudgetAI</a>
          <NavigationButton 
            path="/trackerdashboard"
            style={{fontSize: '1.2rem', padding: '1rem 2rem'}}
          >
            Start Budgeting
          </NavigationButton>
          
          <NavigationButton 
            path="/trackerdashboard"
            variant="premium"
            style={{fontSize: '1.2rem', padding: '1rem 2rem', marginLeft: '1rem'}}
          >
            ✨ Go to App
          </NavigationButton>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <div className="container">
          <h1 className="hero-title">aoBudgetAI</h1>
          <h2 className="hero-subtitle">
            The Web3 Budget Tracker That Invests For You
          </h2>
          <p className="hero-description">
            Track your income and expenses, then let your personal AI agent invest the surplus based on your financial health. 
            Your agent is completely sovereign and owned by you - deposit or withdraw anytime.
          </p>

          <NavigationButton 
            path="/trackerdashboard"
            variant="premium"
            style={{fontSize: '1.2rem', padding: '1rem 2rem', marginLeft: '1rem'}}
          >
            ✨ Go to App
          </NavigationButton>
          
        </div>
      </div>

      {/* Premium Features Highlight */}
      <div className="container" style={{padding: '4rem 0'}}>
        <div className="premium-card">
          <div style={{textAlign: 'center', padding: '2rem'}}>
            <h2 style={{marginBottom: '1rem'}}>✨ Unlock Premium Features</h2>
            <p style={{fontSize: '1.2em', marginBottom: '2em'}}>Get AI-powered financial insights and ad-free experience</p>
            
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container" style={{padding: '6rem 0'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '2em'}}>How aoBudgetAI Works</h2>
        
        <div className="architecture-diagram">
          <h3 style={{textAlign: 'center', color: 'var(--text-dark)'}}>Web3 Architecture Flow</h3>
          <div className="process-flow">
            <div className="process-step">
              <div style={{fontSize: '3rem'}}>📝</div>
              <h4>1. Budget App</h4>
              <p>Track transactions in the Budget App</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div style={{fontSize: '3rem'}}>🔒</div>
              <h4>2. Secure Data</h4>
              <p>Data stays within your control</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div style={{fontSize: '3rem'}}>🤖</div>
              <h4>3. AI Analysis</h4>
              <p>AI processes your budget data</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div style={{fontSize: '3rem'}}>💡</div>
              <h4>4. Insights</h4>
              <p>Get recommendations in Budget App</p>
            </div>
          </div>
        </div>

        <div className="home-grid">
          <div className="home-card">
            <h3>📊 Budget Tracking First</h3>
            <p>All AI features are accessed through the Budget App. You need transaction data for the AI to analyze.</p>
            <ul className="feature-list">
              <li>Start by tracking income and expenses</li>
              <li>AI needs data to provide insights</li>
              <li>All analysis happens within your secure environment</li>
              <li>No direct access to AI process - it's a background service</li>
            </ul>
          </div>
          
          <div className="home-card">
            <h3>🔒 Secure Data Flow</h3>
            <p>Your financial data never leaves your control. The AI process only receives what it needs to analyze.</p>
            <ul className="feature-list">
              <li>Budget data stays in Budget Process</li>
              <li>AI only receives anonymized analysis data</li>
              <li>You control what data gets analyzed</li>
              <li>Complete privacy and security</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Budget Tracking Section */}
      <div className="section-light" style={{padding: '6rem 0'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '2em'}}>Start With Budget Tracking</h2>
          
          <div className="home-grid">
            <div className="highlight-card">
              <h3>💰 Income Tracking</h3>
              <p>Easily track all your income sources with automatic categorization.</p>
              <ul className="feature-list">
                <li>Multiple income streams support</li>
                <li>Automatic categorization</li>
                <li>Recurring income detection</li>
                <li>Income forecasting</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <h3>🛒 Expense Tracking</h3>
              <p>Monitor your spending with detailed categorization.</p>
              <ul className="feature-list">
                <li>Smart expense categorization</li>
                <li>Spending limit alerts</li>
                <li>Recurring bill tracking</li>
                <li>Custom budget categories</li>
              </ul>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{fontSize: '1.2em', maxWidth: '600px', margin: '0 auto'}}>
              <strong>Important:</strong> AI insights are only available after you've tracked some transactions. 
              The more data you provide, the better the AI can help you.
            </p>
            <a href="#budget-app" className="home-btn" style={{marginTop: '1.5rem'}}>Start Tracking Now</a>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="container" style={{padding: '6rem 0'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '2em'}}>AI Insights (Available in Budget App)</h2>
        
        <div className="premium-feature">
          <h3>⭐ Premium Feature</h3>
          <p>AI Financial Analysis is available exclusively for Premium users. Upgrade to unlock powerful insights.</p>
        </div>
        
        <div className="home-grid">
          <div className="home-card">
            <h3>📈 Financial Health Score</h3>
            <p>Based on your transaction data, the AI calculates your financial health:</p>
            <ul className="feature-list">
              <li><strong>Income/Expense Ratio</strong> - How much you save</li>
              <li><strong>Spending Patterns</strong> - Where your money goes</li>
              <li><strong>Budget Adherence</strong> - How well you stick to budgets</li>
              <li><strong>Financial Stability</strong> - Your overall financial health</li>
            </ul>
            <p><em>Access this in the Budget App after tracking transactions</em></p>
          </div>
          
          <div className="home-card">
            <h3>💡 Smart Recommendations</h3>
            <p>The AI provides personalized recommendations based on your data:</p>
            <ul className="feature-list">
              <li>Savings opportunities</li>
              <li>Budget optimization tips</li>
              <li>Spending pattern insights</li>
              <li>Financial goal planning</li>
            </ul>
            <p><em>These appear in your Budget App dashboard</em></p>
          </div>
        </div>
        
        {/* Future Pro Features */}
        <div className="pro-feature-note">
          <h3>🚀 Coming Soon: Pro Tier</h3>
          <p>In the future, we plan to introduce a <strong>Pro Tier</strong> that will include:</p>
          <ul className="feature-list">
            <li>Advanced trading features based on your financial status</li>
            <li>Automated investment strategies tailored to your risk profile</li>
            <li>DeFi integration for yield generation</li>
            <li>Portfolio management and rebalancing</li>
          </ul>
          <p><em>Stay tuned for our Web3 investment features that will help grow your wealth automatically!</em></p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-light" style={{padding: '6rem 0', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5em', marginBottom: '1em'}}>Ready to Get Started?</h2>
          <p style={{fontSize: '1.33em', maxWidth: '800px', margin: '0 auto 2em'}}>
            Start with the Budget App to track your transactions. AI insights will automatically become available 
            as you build your financial data. Your privacy and data security are our top priority.
          </p>
          <NavigationButton 
            path="/trackerdashboard"
            variant="premium"
            style={{fontSize: '1.2rem', padding: '1rem 2rem', marginLeft: '1rem'}}
          >
            ✨ Go to App
          </NavigationButton>
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>aoBudgetAI</h4>
              <ul>
                <li><a href="#home">About Us</a></li>
                <li><a href="#home">Contact</a></li>
                <li><a href="#home">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                <li><a href="#budget-app">Budget Tracking</a></li>
                <li><a href="#features">AI Insights</a></li>
                <li><a href="#features">Investment Management</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#home">Tutorials</a></li>
                <li><a href="#home">Support</a></li>
              </ul>
            </div>
            <div>
              <h4>The Budget Tracker That Invests For You</h4>
              <p>aoBudgetAI combines comprehensive budget tracking with AI-powered investment management.</p>
              <a href="#budget-app" className="home-btn">Go to Budget App</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 aoBudgetAI. Decentralized Budgeting Intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;