// AddQuizComponent.jsx

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { quizService } from '../../services/quiz.service';
import { categoryService } from '../../services/category.service';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

const AddQuizComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch categories when component mounts
    categoryService.getCategories()
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add quiz logic
    quizService.addQuiz(quizData)
      .then((data) => {
        // Navigate to quizzes page after successful addition
        history.push('/admin/quizzes');
      })
      .catch((error) => {
        console.error('Error adding quiz:', error);
        setError('Error adding quiz');
      });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Add New Quiz</h1>
        <FormControl className={classes.formControl}>
          <TextField
            name="title"
            label="Enter Title"
            value={quizData.title}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            name="description"
            label="Enter Description"
            value={quizData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
        </FormControl>
        <div className="row">
          <div className="col-md-6">
            <FormControl className={classes.formControl}>
              <TextField
                name="maxMarks"
                label="Maximum Marks"
                value={quizData.maxMarks}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl className={classes.formControl}>
              <TextField
                name="numberOfQuestions"
                label="Number of Questions"
                value={quizData.numberOfQuestions}
                onChange={handleChange}
              />
            </FormControl>
          </div>
        </div>
        <FormControlLabel
          control={
            <Switch
              checked={quizData.active}
              onChange={(e) => setQuizData({ ...quizData, active: e.target.checked })}
              name="active"
              color="primary"
            />
          }
          label="Publish Status"
          className={classes.formControl}
        />
        <FormControl className={classes.formControl}>
          <InputLabel>Categories</InputLabel>
          <Select
            name="category"
            value={quizData.category}
            onChange={handleChange}
            required
          >
            {categories.map(category => (
              <MenuItem key={category.cid} value={category.cid}>{category.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {error && <Alert severity="error">{error}</Alert>}
        <div className="container text-center">
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddQuizComponent;
