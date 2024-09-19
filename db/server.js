//Taken from activity 23 of Module 12

const { Pool } = require('pg');
const express = require ('express'); 

const PORT = process.env.PORT || 3001;
const app = express();


const pool = new Pool(
    {
      user: 'psql',
      password: 'Brody',
      host: 'localhost',
      database: 'employee_tracker_db'
  },
  console.log('Connected to the employee_tracker_db database!')
  )
  
  // module.exports = db;

  pool.connect();
  