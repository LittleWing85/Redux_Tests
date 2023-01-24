import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProjectIdChanged } from "./portfolioSlice.js";

export default function Portfolio() {
    const projectId = useSelector((state) => state.portfolio.projectId);
    const dispatch = useDispatch();

    useEffect(() => {
        /* console.log("log from Portfolio.js", projectId); */
    }, [projectId]);

    function updateSelectedProjectId(event) {
        event.preventDefault();
        const selectedProjectId = event.target.selectedProjectId.value;
        dispatch(selectedProjectIdChanged({ selectedProjectId }));
        console.log(projectId);
    }

    return (
        <div>
            <h1>Component Portfolio</h1>
            <p>
                Current ProjectID
                <br />
                {projectId}
            </p>
            <form onSubmit={updateSelectedProjectId}>
                <label htmlFor="selectedProjectId">Insert ProjectID</label>
                <br />
                <input
                    type="number"
                    id="selectedProjectId"
                    name="selectedProjectId"
                    defaultValue={projectId}
                />
                <button>Submit ProjectID</button>
            </form>
        </div>
    );
}
