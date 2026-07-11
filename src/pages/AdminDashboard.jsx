export default function AdminDashboard() {
  return (
    <div className="dashboard-page bg-ivory min-h-screen pt-lg pb-xl">
      <div className="container mt-lg">
        <div className="flex-between mb-lg">
          <h1>Admin Dashboard Preview</h1>
          <div className="badge bg-charcoal color-white px-md py-sm">Internal View</div>
        </div>
        
        <div className="grid-3 mb-lg">
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Active Projects</h4>
            <h2>12</h2>
          </div>
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Pending Quotes</h4>
            <h2 className="color-bronze">5 New</h2>
          </div>
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Pending Approvals</h4>
            <h2>8 Items</h2>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-md">Recent Activity</h3>
          <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
            <thead>
              <tr className="border-bottom">
                <th className="pb-sm color-concrete-gray">Project</th>
                <th className="pb-sm color-concrete-gray">Client</th>
                <th className="pb-sm color-concrete-gray">Action</th>
                <th className="pb-sm color-concrete-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-bottom">
                <td className="py-sm font-bold">Cairo Loft</td>
                <td className="py-sm">Ahmed S.</td>
                <td className="py-sm">Floor Material Selection</td>
                <td className="py-sm"><span className="badge bg-warm-beige">Pending</span></td>
              </tr>
              <tr className="border-bottom">
                <td className="py-sm font-bold">North Coast Villa</td>
                <td className="py-sm">Maha E.</td>
                <td className="py-sm">Quote Review</td>
                <td className="py-sm"><span className="badge bg-bronze color-white">New</span></td>
              </tr>
              <tr>
                <td className="py-sm font-bold">Minimal Kitchen</td>
                <td className="py-sm">Omar R.</td>
                <td className="py-sm">Phase 2 Sign-off</td>
                <td className="py-sm"><span className="badge" style={{background: '#e0f2e9', color: '#2e7d32'}}>Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
