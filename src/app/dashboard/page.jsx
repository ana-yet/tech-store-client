import DashboardLayout from "./layout";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Example Cards */}
      <div className="p-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Total Users</h2>
        <p className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary">
          120
        </p>
      </div>
      <div className="p-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Products</h2>
        <p className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary">
          85
        </p>
      </div>
      <div className="p-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Sales</h2>
        <p className="text-2xl font-bold text-success">₹45,000</p>
      </div>
    </div>
  );
}
