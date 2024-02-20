import AdminDevice from "../components/AdminDevice";
import AdminType from "../components/AdminType";
import "./Admin.css"
const Admin = () => {
    return (
        <div className="poi">
            <AdminDevice />
            <AdminType />
        </div>
    );
};
export default Admin;