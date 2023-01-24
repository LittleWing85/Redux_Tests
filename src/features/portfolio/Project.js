import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Project() {
    const projectId = useSelector((state) => state.portfolio.projectId);

    useEffect(() => {
        /* console.log("log from Project.js", projectId);  */
    }, [projectId]);

    return (
        <div className="content">
            <h1>Component for Project</h1>
            <p>
                Current ProjectID
                <br />
                {projectId}
            </p>
        </div>
    );
}
