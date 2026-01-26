import { useRoutes } from "react-router-dom"
import { routes } from "../../Routes"
function ALlRoutes () {
    const element = useRoutes(routes)
    return (
        <>
            {element}
        </>
    )
}
export default ALlRoutes