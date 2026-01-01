import { useAuth } from "../auth/useAuth"
import type { Role } from "../types/role";
import type { User } from "../types/user";



export const Login = () => {
    const { login } = useAuth();

    const loginAs = (role: Role) => {
        const user: User = {
            id: crypto.randomUUID(),
            name: role.toUpperCase(),
            role,
        };

        login(user);
    }

    return (
        <div>
            <h1>Login</h1>

            <button onClick={() => loginAs("admin")}>
                Login as Admin
            </button>

            <button onClick={() => loginAs("manager")}>
                Login as Manager
            </button>

            <button onClick={() => loginAs("viewer")}>
                Login as Viewer
            </button>
        </div>
    );
};
