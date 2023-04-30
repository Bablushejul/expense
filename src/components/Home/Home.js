import React from 'react';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <div>
      <Layout />
      <form>
      <div>
        <label>
          Amount
          <div>
            <input type='number' />
          </div>
        </label>
      </div>
      <div>
        <label>
          Description
          <div>
            <input type='text' />
          </div>
        </label>
      </div>
      <div>
        <label>
          Category
          <div>
            <select>
              <option >Food</option>
              <option>Petrol</option>
              <option>Salary</option>
            </select>
          </div>
        </label>
      </div>
      <div>
        <label>
          Add Expenses
          <div>
            <button>+</button>
          </div>
        </label>
      </div>
      </form>
    </div>
  );
}

export default Home;




