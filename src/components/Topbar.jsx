export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <button className="topbar-hamburger">☰</button>
            </div>
            <div className="topbar-right">
                <span>YURICO SISWAHYUDA PUTRA</span>
                <div className="topbar-avatar">👤</div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>▼</span>
            </div>
        </div>
    )
}
