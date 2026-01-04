import Dashboard from "@/pages/dashboard/Dashboard";
import AdminLayout from "@/components/layouts/AdminLayout";
import HostListPage from "@/pages/host-list/HostListPage";
import AnalyticsPage from "@/pages/analytics/AnalyticsPage";

export const adminRoutes = {
    path: "/",
    element: <AdminLayout />,
    children: [
        { index: "/", element: <Dashboard /> },
        { path: "/host-applications", element: <HostListPage/> },
        { path: "/host-request-details", element: <AnalyticsPage /> },
        { path: "/analytics", element: <AnalyticsPage /> },
    ]
};