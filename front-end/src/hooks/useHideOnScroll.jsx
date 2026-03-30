import { useEffect } from "react";

const useHideOnScroll = (ref) => {
    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (!ref.current) return;

            if (currentScroll > lastScroll && currentScroll > 50) {
                ref.current.classList.add("hide");
            } else {
                ref.current.classList.remove("hide");
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ref]);
};

export default useHideOnScroll;