import { useEffect } from "react";
import { /* useDispatch,  */ useSelector } from "react-redux";
/* import { selectedProjectIdChanged } from "./portfolioSlice.js"; */
import {} from "react-redux";

export default function Portfolio() {
    const projectId = useSelector((state) => state.selectedProjectId);

    useEffect(() => {
        console.log(projectId);
    }, [projectId]);

    return (
        <div>
            <h1>Portfolio</h1>
        </div>
    );
}
