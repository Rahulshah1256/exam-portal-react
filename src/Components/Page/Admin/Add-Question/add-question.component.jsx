// AddQuestionComponent.jsx

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const AddQuestionComponent = () => {
  const [question, setQuestion] = useState({
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  });

  const { qid, title, numberOfQuestions } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submit logic here
    console.log('Submitted:', question);
    // Redirect to the desired page after submitting the form
    history.push('/admin/view-questions');
  };

  return (
    <div className="bootstrap-wrapper">
      <div className="row mt20">
        <div className="col-md-12 text-center">
          <div className="text-center">
            <h1>
              Add Question to <span style={{ fontWeight: 'bold' }}>{title}</span>
            </h1>
          </div>
          <div className="col-md-10 offset-md-1">
            <form className="mt20" onSubmit={handleSubmit}>
              <textarea
                name="content"
                required
                value={question.content}
                onChange={handleChange}
                placeholder="Enter the question content"
                rows="5"
              ></textarea>

              <div className="row">
                <div className="col-md-6">
                  <input
                    name="option1"
                    type="text"
                    value={question.option1}
                    onChange={handleChange}
                    required
                    placeholder="Enter Option 1"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="option2"
                    type="text"
                    value={question.option2}
                    onChange={handleChange}
                    required
                    placeholder="Enter Option 2"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    name="option3"
                    type="text"
                    value={question.option3}
                    onChange={handleChange}
                    required
                    placeholder="Enter Option 3"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="option4"
                    type="text"
                    value={question.option4}
                    onChange={handleChange}
                    required
                    placeholder="Enter Option 4"
                  />
                </div>
              </div>

              <select
                name="answer"
                value={question.answer}
                onChange={handleChange}
                required
              >
                <option value="">Select Answer</option>
                <option value={question.option1}>{question.option1}</option>
                <option value={question.option2}>{question.option2}</option>
                <option value={question.option3}>{question.option3}</option>
                <option value={question.option4}>{question.option4}</option>
              </select>

              <div className="container text-center">
                <button className="mat-raised-button" color="accent" type="submit">
                  <span className="mr-2">add</span>Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionComponent;
