import type { Role } from "../types/role";
import { useAuth } from "./useAuth";



interface RequireRoleProps {
    role: Role;
    children: React.ReactNode;
}

export const RequireRole: React.FC<RequireRoleProps> = ({ role, children }) => {
    const { state } = useAuth();

    if (state.status !== 'authenticated')
        return null;
    if (state.user?.role !== role)
        return null;

    return <>
        {children}
    </>;
}