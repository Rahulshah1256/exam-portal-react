// add-category.component.jsx

import React, { useState } from 'react';

const AddCategoryComponent = ({ addCategory }) => {
  const [category, setCategory] = useState({
    title: '',
    description: '',
  });

  const handleChange = (field, value) => {
    setCategory({ ...category, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category);
  };

  return (
    <mat-card className="col-md-10 offset-md-1">
      <div className="container text-center mt20">
        <h1><strong> Add New Category</strong></h1>
      </div>

      <mat-card-content>
        <div className="bootstrap-wrapper">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={handleSubmit}>
                <mat-form-field className="w100" appearance="outline">
                  <mat-label>Title</mat-label>
                  <input
                    required
                    autoFocus
                    type="text"
                    name="title"
                    matInput
                    placeholder="Enter here"
                    value={category.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                  />
                </mat-form-field>

                <mat-form-field className="w100" appearance="outline">
                  <mat-label>Description</mat-label>
                  <textarea
                    name="description"
                    matInput
                    placeholder="Enter Category Description"
                    value={category.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows="15"
                  ></textarea>
                </mat-form-field>

                <div className="container text-center mt15">
                  <button className="mat-raised-button" color="accent" type="submit">
                    <mat-icon className="mr-2">add</mat-icon>Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  );
};

export default AddCategoryComponent;
