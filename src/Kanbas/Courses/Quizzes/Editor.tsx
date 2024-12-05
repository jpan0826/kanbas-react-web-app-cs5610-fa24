import { Navigate, Route , Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
export default function Editor() {
    
    return (
        <div>
            <EditorNavigation />

            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="DetailsEdit" />} />
                    <Route path="/DetailsEdit" element={<DetailsEditor />} />
                    <Route path="/QuestionsEdit" element={<QuestionsEditor />} />
                </Routes>
            </div>
        </div>

    );
}