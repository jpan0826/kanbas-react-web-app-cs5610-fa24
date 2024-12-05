import { Navigate, Route , Routes, useParams } from "react-router";
import EditorNavigation from "./EditorNavigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { useEffect, useState } from "react";
export default function Editor() {
    const { cid, qid } = useParams();
    const addNewQuiz = qid === 'new';
    const defaultQuiz = {
        "title": "",
        "description": "",
        "assignee": "",
        "type": "Graded Quiz",
        "points": "",
        "group": "",
        "shuffle": true,
        "time": "20min",
        "multiple_attempts": false,
        "show_correct_answers": "",
        "access_code": "",
        "one_question": "yes",
        "webcam": "no",
        "lock": "no",
        "due_date": "",
        "available_date": "",
        "until_date": "",
        "questions" : []
    }
    const [quiz, setQuiz] = useState(defaultQuiz);

    const fetchQuiz = async () => {
        console.log("fetch quiz")
        if (qid !== 'new') {
            //const fetchedQuiz = client.getQuiz(qid)
            //setQuiz(fetchedQuiz)
        } else {
            setQuiz(defaultQuiz);
        }
    }

    const saveToMongo = async (quiz: any) => {
        //client api calls
    }
    useEffect(() => {
        fetchQuiz();
    }, [cid, qid]);

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