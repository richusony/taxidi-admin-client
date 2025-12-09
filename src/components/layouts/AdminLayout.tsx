import { Outlet } from "react-router-dom";
import AdminSidePanel from "./AdminSidePanel";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            <AdminSidePanel />

            <div className="w-[80%] p-3 max-h-screen overflow-y-auto">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;