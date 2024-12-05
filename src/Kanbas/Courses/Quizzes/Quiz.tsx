import { Navigate, Route, Routes } from "react-router";
import EditorNavigation from "./EditorNavigation";
import { FaPlus } from "react-icons/fa6";

import DetailsEditor from "./DetailsEditor";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { stringify } from "querystring";
import TrueFalseEditor from "./TrueFalseEditor";
import FillBlankEditor from "./FillBlankEditor";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import QuestionEditor from "./QuestionEditor";


export default function Quiz() {
    const { cid, qid } = useParams();
    //find questions from Redux given the quiz id
    const dispatch = useDispatch();
    const [score, setScore] = useState<any>();

    return (
        <div>
            Hello
        </div>
    );
}