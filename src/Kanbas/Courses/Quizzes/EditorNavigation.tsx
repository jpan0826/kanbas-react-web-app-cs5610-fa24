import { Link, useLocation, useParams } from "react-router-dom";
export default function EditorNavigation() {
    const { pathname } = useLocation();
    const { cid, qid } = useParams();
    const links = [
        { label: "Details", path: `/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailsEdit` },
        { label: "Questions", path: `/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEdit` },

    ]
    return (

        <div id="wd-quiz-editor-navigation" className="wd list-group list-group-horizontal fs-5 rounded-0">
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item d-md-block border-0
              ${pathname.includes(link.label) ? "text-black" : "text-danger"}`}>
                    <br />
                    {link.label}
                </Link>
            ))}
        </div>

    );
}