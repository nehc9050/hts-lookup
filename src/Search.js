import React from 'react';
import Form from 'react-bootstrap/Form';

function Search() {
  return(
    <div className="Search">
      <Form>
        <Form.Label>HTS Code</Form.Label>
        <Form.Control type="text" placeholder="Enter code"/>
      </Form>
      <div class="list">
        <ul class="list-group">
        </ul>
      </div>
    </div>
  );
}

export default Search;
