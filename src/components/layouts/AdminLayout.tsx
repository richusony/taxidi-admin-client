import { Outlet } from "react-router-dom";
import AdminSidePanel from "./AdminSidePanel";
import DashboardHeader from "./DashboardHeader";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            <AdminSidePanel />

            <div className="w-full md:w-[80%] p-3 max-h-screen overflow-y-auto">
                <DashboardHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;