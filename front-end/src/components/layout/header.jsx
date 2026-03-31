import { useRef } from "react";
import "./css/header.css";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import OverHead from "./overhead"
const Header = () => {
    const headerRef = useRef(null);
    useHideOnScroll(headerRef)

    return (
        <>
            <div ref={headerRef} className="fixed w-full top-0 z-999 header">
                <div>
                    <OverHead />
                </div>
            </div>
        </>
    );

}

export default Header;