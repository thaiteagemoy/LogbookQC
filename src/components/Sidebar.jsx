export default function Sidebar({ page, setPage }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-icon">A</div>
                <span>Avian QC</span>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-item" onClick={() => setPage('logbook')}>
                    <span className="icon">📊</span>
                    <span>Dashboard</span>
                </div>
                <div className="sidebar-item">
                    <span className="icon">🌿</span>
                    <span>Plant Hygiene Dashboard</span>
                </div>
            </div>

            <div className="sidebar-label">Main Menu</div>

            <div className="sidebar-section">
                <div
                    className={`sidebar-item ${page === 'approval' ? 'active' : ''}`}
                    onClick={() => setPage('approval')}
                >
                    <span className="icon">✅</span>
                    <span>Approval SPK Bypass</span>
                </div>

                <div className="sidebar-parent">
                    <div className="sidebar-item">
                        <span className="icon">🔬</span>
                        <span>QC AAP</span>
                        <span className="sidebar-chevron">‹</span>
                    </div>
                </div>
                <div className="sidebar-parent">
                    <div className="sidebar-item">
                        <span className="icon">🧪</span>
                        <span>QC AAS</span>
                        <span className="sidebar-chevron">‹</span>
                    </div>
                </div>
                <div className="sidebar-parent">
                    <div className="sidebar-item">
                        <span className="icon">🧫</span>
                        <span>QC AAC</span>
                        <span className="sidebar-chevron">‹</span>
                    </div>
                </div>
                <div className="sidebar-parent">
                    <div className="sidebar-item">
                        <span className="icon">🔍</span>
                        <span>Inspection</span>
                        <span className="sidebar-chevron">‹</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}
