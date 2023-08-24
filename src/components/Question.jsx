import { useState } from 'react'
import './question.css';
const Question = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleAnswer = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='question' onClick={toggleAnswer}>
            <div className='question-info'>
                <span className='question-title' >Lorem ipsum dolor sit.</span>
                <span>
                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8Z">
                    </path>
                </svg>
                </span>
            </div>
            {isExpanded && (
                <div className='question-answer'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!</p>
                </div>
            )}
        </div>
    )
}

export default Question