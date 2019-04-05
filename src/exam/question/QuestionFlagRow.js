import React from 'react';

import './QuestionFlag.css';
import Flag from '../../icons/flag.svg';
import RedFlag from '../../icons/red-flag.svg';
import { ExamingConsumer } from '../../context/ExamingContext';

export default function QuestionFlagRow(props) {
    const { questionNumber, flag } = props;

    return (
        <div className="QuestionFlagRow">
            <p>Question {questionNumber}</p>
            <ExamingConsumer>
                {
                    ({ changeFlagQuestion }) =>
                        <div onClick={() => changeFlagQuestion(questionNumber)} className="flag">
                        {    
                            flag
                            ? <img draggable={false} src={RedFlag} alt="red-flag"/>
                            : <img draggable={false} src={Flag} alt="flag"/>
                        }
                        </div>
                }
            </ExamingConsumer>
        </div>
    );
}