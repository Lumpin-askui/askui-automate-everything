import { Navigation, Wifi, Signal, Battery, Activity, Cloud, Play, Volume2, Settings, Home, Menu, ChevronRight, Search, User, ShoppingCart, CreditCard, Barcode, Receipt, Monitor, Folder, Mail, Calendar, MoreHorizontal, Maximize2, Minus, X, Music, Film, Tv, Radio } from "lucide-react";
import "@/styles/design-system.css";

const TelevisionUI = () => (
  <div className="ui-layer tv-layer">
    <div className="tv-frame">
      <div className="tv-screen">
        <div className="tv-content">
          {/* TV Header Bar */}
          <div className="tv-header">
            <div className="tv-nav">
              <span className="tv-nav-item active">Home</span>
              <span className="tv-nav-item">Movies</span>
              <span className="tv-nav-item">Series</span>
              <span className="tv-nav-item">Live</span>
            </div>
            <div className="tv-actions">
              <Search size={14} />
              <User size={14} />
            </div>
          </div>
          {/* Featured Content */}
          <div className="tv-featured">
            <div className="tv-featured-badge">
              <Play size={8} fill="white" /> NOW PLAYING
            </div>
            <div className="tv-featured-title">Smart Home Dashboard</div>
            <div className="tv-featured-meta">4K • HDR • Dolby Atmos</div>
          </div>
          {/* Content Row */}
          <div className="tv-category">
            <span className="tv-category-title">Continue Watching</span>
            <div className="tv-row">
              <div className="tv-card selected">
                <div className="tv-card-progress"></div>
              </div>
              <div className="tv-card">
                <Film size={16} className="tv-card-icon" />
              </div>
              <div className="tv-card">
                <Tv size={16} className="tv-card-icon" />
              </div>
              <div className="tv-card">
                <Music size={16} className="tv-card-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tv-bezel"></div>
      <div className="tv-stand"></div>
    </div>
  </div>
);

const AutomotiveUI = () => (
  <div className="ui-layer automotive-layer">
    <div className="automotive-dashboard">
      {/* Top Status Bar */}
      <div className="auto-status-bar">
        <span className="auto-time">14:32</span>
        <div className="auto-indicators">
          <Signal size={10} />
          <Wifi size={10} />
          <Battery size={10} />
        </div>
      </div>
      
      {/* Main Infotainment Display */}
      <div className="infotainment-main">
        <div className="infotainment-nav">
          <div className="nav-map">
            <div className="map-route"></div>
            <div className="map-marker current"></div>
            <div className="map-marker destination"></div>
            <Navigation size={14} className="nav-direction" />
          </div>
          <div className="nav-info">
            <span className="nav-distance">2.4 km</span>
            <span className="nav-eta">3 min</span>
          </div>
        </div>
        
        <div className="infotainment-media">
          <div className="media-art"></div>
          <div className="media-info">
            <span className="media-title">Highway Radio</span>
            <span className="media-artist">FM 98.5</span>
          </div>
          <div className="media-controls">
            <Radio size={12} />
            <Play size={14} fill="white" />
            <Volume2 size={12} />
          </div>
        </div>
      </div>
      
      {/* Bottom Quick Actions */}
      <div className="auto-quick-actions">
        <div className="quick-action active">
          <Home size={12} />
        </div>
        <div className="quick-action">
          <Music size={12} />
        </div>
        <div className="quick-action">
          <Navigation size={12} />
        </div>
        <div className="quick-action">
          <Settings size={12} />
        </div>
      </div>
      
      {/* ADAS Status */}
      <div className="adas-status">
        <div className="adas-indicator active">
          <span className="adas-dot"></span>
          Lane Assist
        </div>
        <div className="adas-indicator">
          <span className="adas-dot"></span>
          ACC
        </div>
      </div>
    </div>
  </div>
);

const DesktopUI = () => (
  <div className="ui-layer desktop-layer">
    <div className="desktop-window">
      {/* Windows-style Title Bar */}
      <div className="window-header windows-style">
        <div className="window-icon">
          <Monitor size={12} className="text-blue-500" />
        </div>
        <span className="window-title">Enterprise Resource Planning - SAP</span>
        <div className="window-controls">
          <span className="control-box minimize"><Minus size={10} /></span>
          <span className="control-box maximize"><Maximize2 size={10} /></span>
          <span className="control-box close"><X size={10} /></span>
        </div>
      </div>
      
      {/* Ribbon Menu */}
      <div className="ribbon-menu">
        <div className="ribbon-tabs">
          <span className="ribbon-tab active">Home</span>
          <span className="ribbon-tab">Insert</span>
          <span className="ribbon-tab">Data</span>
          <span className="ribbon-tab">View</span>
        </div>
        <div className="ribbon-actions">
          <div className="ribbon-group">
            <div className="ribbon-btn"><Folder size={14} /></div>
            <div className="ribbon-btn"><Mail size={14} /></div>
            <div className="ribbon-btn"><Calendar size={14} /></div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="window-body">
        <div className="sidebar erp-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header">Modules</div>
            <div className="sidebar-item active">
              <span className="sidebar-dot"></span>
              Finance
            </div>
            <div className="sidebar-item">
              <span className="sidebar-dot"></span>
              HR
            </div>
            <div className="sidebar-item">
              <span className="sidebar-dot"></span>
              Supply Chain
            </div>
            <div className="sidebar-item">
              <span className="sidebar-dot"></span>
              Sales
            </div>
          </div>
        </div>
        <div className="main-content erp-content">
          {/* Data Table */}
          <div className="data-table">
            <div className="table-header">
              <span>ID</span>
              <span>Description</span>
              <span>Status</span>
              <span>Amount</span>
            </div>
            <div className="table-row">
              <span className="cell-id">INV-001</span>
              <span className="cell-desc">Q4 Report</span>
              <span className="cell-status approved">✓</span>
              <span className="cell-amount">$12,450</span>
            </div>
            <div className="table-row">
              <span className="cell-id">INV-002</span>
              <span className="cell-desc">Supplies</span>
              <span className="cell-status pending">○</span>
              <span className="cell-amount">$3,200</span>
            </div>
            <div className="table-row">
              <span className="cell-id">INV-003</span>
              <span className="cell-desc">Services</span>
              <span className="cell-status approved">✓</span>
              <span className="cell-amount">$8,900</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="window-statusbar">
        <span>Connected to: PROD-SERVER-01</span>
        <span className="status-indicator online"></span>
      </div>
    </div>
  </div>
);

const PointOfSaleUI = () => (
  <div className="ui-layer pos-layer">
    <div className="pos-device">
      {/* POS Header */}
      <div className="pos-header">
        <span className="pos-store">STORE #247</span>
        <span className="pos-time">14:32:05</span>
      </div>
      
      <div className="pos-screen">
        {/* Product Grid */}
        <div className="pos-products">
          <div className="pos-category-tabs">
            <span className="pos-cat active">Food</span>
            <span className="pos-cat">Drinks</span>
            <span className="pos-cat">Other</span>
          </div>
          <div className="pos-grid">
            <div className="pos-btn food">
              <span className="pos-btn-icon">🍔</span>
              <span className="pos-btn-label">Burger</span>
              <span className="pos-btn-price">$8.99</span>
            </div>
            <div className="pos-btn food selected">
              <span className="pos-btn-icon">🍟</span>
              <span className="pos-btn-label">Fries</span>
              <span className="pos-btn-price">$3.49</span>
            </div>
            <div className="pos-btn drink">
              <span className="pos-btn-icon">🥤</span>
              <span className="pos-btn-label">Soda</span>
              <span className="pos-btn-price">$2.99</span>
            </div>
            <div className="pos-btn food">
              <span className="pos-btn-icon">🌮</span>
              <span className="pos-btn-label">Taco</span>
              <span className="pos-btn-price">$4.99</span>
            </div>
            <div className="pos-btn drink">
              <span className="pos-btn-icon">☕</span>
              <span className="pos-btn-label">Coffee</span>
              <span className="pos-btn-price">$3.99</span>
            </div>
            <div className="pos-btn other">
              <MoreHorizontal size={16} />
              <span className="pos-btn-label">More</span>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="pos-order">
          <div className="order-header">
            <Receipt size={12} />
            <span>Current Order</span>
          </div>
          <div className="order-items">
            <div className="order-line">
              <span>1x Burger</span>
              <span>$8.99</span>
            </div>
            <div className="order-line">
              <span>2x Fries</span>
              <span>$6.98</span>
            </div>
            <div className="order-line">
              <span>1x Soda</span>
              <span>$2.99</span>
            </div>
          </div>
          <div className="order-total">
            <span>TOTAL</span>
            <span className="total-amount">$18.96</span>
          </div>
          <div className="pos-payment-btns">
            <div className="pay-btn cash">
              <CreditCard size={12} />
              Card
            </div>
            <div className="pay-btn card active">
              <Barcode size={12} />
              Scan
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileUI = () => (
  <div className="ui-layer mobile-layer">
    <div className="mobile-frame">
      <div className="mobile-notch"></div>
      <div className="mobile-screen">
        <div className="mobile-header">
          <span className="time">12:47</span>
          <div className="status-icons">
            <Signal size={10} />
            <Wifi size={10} />
            <Battery size={10} />
          </div>
        </div>
        <div className="mobile-content">
          <div className="widget-weather">
            <span className="weather-temp">72°</span>
            <span className="weather-city">Berlin</span>
          </div>
          <div className="app-grid">
            <div className="app-icon mail"><Mail size={14} /></div>
            <div className="app-icon calendar"><Calendar size={14} /></div>
            <div className="app-icon settings"><Settings size={14} /></div>
            <div className="app-icon music"><Music size={14} /></div>
          </div>
        </div>
        <div className="mobile-dock">
          <div className="dock-icon"><Home size={14} /></div>
          <div className="dock-icon"><Search size={14} /></div>
          <div className="dock-icon"><Menu size={14} /></div>
        </div>
      </div>
    </div>
  </div>
);

const SmartwatchUI = () => (
  <div className="ui-layer watch-layer">
    <div className="watch-body">
      <div className="watch-screen">
        <div className="watch-face">
          <div className="watch-time-display">
            <span className="watch-hour">10</span>
            <span className="watch-colon">:</span>
            <span className="watch-minute">09</span>
          </div>
          <div className="watch-date">TUE 25</div>
          <div className="watch-metrics">
            <div className="metric-ring">
              <Activity size={12} className="text-rose-500" />
              <span>86</span>
            </div>
            <div className="metric-ring steps">
              <span>8.2k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="watch-crown"></div>
      <div className="watch-button"></div>
    </div>
  </div>
);

const HeroVisual = () => {
  return (
    <div className="hero-visual-container">
      <div className="visual-composition-wrapper">
        <TelevisionUI />
        <AutomotiveUI />
        <DesktopUI />
        <PointOfSaleUI />
        <MobileUI />
        <SmartwatchUI />
      </div>
    </div>
  );
};

export default HeroVisual;
