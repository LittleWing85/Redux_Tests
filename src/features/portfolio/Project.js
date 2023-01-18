import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Project() {
    const projectId = useSelector((state) => state.selectedProjectId);

    useEffect(() => {
        console.log(projectId);
    }, [projectId]);

    return (
        <div className="content">
            <h1>Project</h1>
        </div>
    );
}
