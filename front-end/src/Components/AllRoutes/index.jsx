import { useRoutes } from "react-router-dom"
import { routes } from "../../Router";
function ALlRoutes () {
    const element = useRoutes(routes)
    return (
        <>
            {element}
        </>
    )
}
export default ALlRoutes;