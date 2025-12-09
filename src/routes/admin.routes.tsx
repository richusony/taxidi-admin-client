import Dashboard from "@/pages/dashboard/Dashboard";
import AdminLayout from "@/components/layouts/AdminLayout";

export const adminRoutes = {
    path: "/",
    element: <AdminLayout />,
    children: [
        { index: true, element: <Dashboard />}
    ]
}