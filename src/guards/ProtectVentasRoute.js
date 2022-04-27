import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../store/stateSlice";


export default function ProtectVentasRoute(props) {

    const user = useSelector(selectUser);

    if(user.role !== 'ventas') {
        return <Navigate to="/" replace/>
    }
    return props.children;
}