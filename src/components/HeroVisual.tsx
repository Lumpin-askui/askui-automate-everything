import { Navigation, Wifi, Signal, Battery, Activity, Cloud, CreditCard, LayoutGrid, Server } from "lucide-react";
import "@/styles/design-system.css";

const TelevisionUI = () => (
  <div className="ui-layer tv-layer">
    <div className="tv-frame">
      <div className="tv-screen">
        <div className="tv-content">
          <div className="tv-hero-banner">
            <span className="tv-badge">NEW</span>
            <span className="tv-title">Automation Series</span>
          </div>
          <div className="tv-row">
            <div className="tv-card selected"></div>
            <div className="tv-card"></div>
            <div className="tv-card"></div>
          </div>
        </div>
      </div>
      <div className="tv-stand"></div>
    </div>
  </div>
);

const AutomotiveUI = () => (
  <div className="ui-layer automotive-layer">
    <div className="automotive-dashboard">
      <div className="dashboard-header">
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Lane Assist Active</span>
        </div>
      </div>
      <div className="dashboard-cluster">
        <div className="gauge speed-gauge">
          <div className="gauge-track"></div>
          <div className="gauge-value">
            <span className="number">38</span>
            <span className="unit">mph</span>
          </div>
        </div>
        <div className="cluster-center">
          <div className="nav-visual">
            <Navigation size={20} className="nav-arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DesktopUI = () => (
  <div className="ui-layer desktop-layer">
    <div className="desktop-window">
      <div className="window-header">
        <Cloud size={14} className="text-blue-400" />
        <span className="window-title">Citrix Workspace - Finance App</span>
        <div className="window-controls">
          <span className="control-box">_</span>
          <span className="control-box">□</span>
          <span className="control-box x">×</span>
        </div>
      </div>
      <div className="window-body">
        <div className="sidebar">
          <div className="sidebar-item active"></div>
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
        </div>
        <div className="main-content">
          <div className="data-grid">
            <div className="grid-header"></div>
            <div className="grid-row"></div>
            <div className="grid-row"></div>
            <div className="grid-row"></div>
            <div className="grid-row"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PointOfSaleUI = () => (
  <div className="ui-layer pos-layer">
    <div className="pos-device">
      <div className="pos-screen">
        <div className="pos-grid">
          <div className="pos-btn red"></div>
          <div className="pos-btn blue"></div>
          <div className="pos-btn green"></div>
          <div className="pos-btn orange"></div>
          <div className="pos-btn"></div>
          <div className="pos-btn"></div>
        </div>
        <div className="pos-sidebar">
          <div className="order-list">
            <div className="order-item"></div>
            <div className="order-item"></div>
          </div>
          <div className="total-btn">
            <span>PAY</span>
            <span>$42.50</span>
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
            <div className="app-icon"></div>
            <div className="app-icon"></div>
            <div className="app-icon"></div>
            <div className="app-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SmartwatchUI = () => (
  <div className="ui-layer watch-layer">
    <div className="watch-body">
      <div className="watch-screen">
        <Activity size={24} className="text-rose-500 mb-1" />
        <span className="watch-time">10:09</span>
        <span className="watch-metric">86 BPM</span>
      </div>
      <div className="watch-crown"></div>
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
