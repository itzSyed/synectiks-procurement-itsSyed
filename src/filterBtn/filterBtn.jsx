import React from 'react'
import './filterBtn.css'

const FilterBtn = () => {
  return (
   

      <div className="container-1">
        <div className="button">
          <button id="hover-button">
            {' '}
            <img src="Filter.svg" alt="" />
            Filter
          </button>
        </div>

        <div>
          <div className="features" id="features">
            <div className="features-card" id="dropDown">
              <p>Sort By</p>
              <div className="circle">
                <a href="#">default</a>
                <input type="radio" name="sort" id="" />
              </div>

              <div className="circle">
                <a href="#">first name</a>
                <input type="radio" name="sort" id="" />
              </div>

              <div className="circle">
                <a href="#">last name</a>
                <input type="radio" name="sort" id="" />
              </div>

              <div className="circle">
                {' '}
                <a href="#">due date</a>
                <input type="radio" name="sort" id="" />
              </div>

              <div className="circle">
                {' '}
                <a href="#">last login</a>
                <input type="radio" name="sort" id="" />
              </div>

              <hr />
              <p>USERS:</p>

              <div className="circle">
                <a href="#">all</a>
                <input type="radio" name="users" id="" />
              </div>

              <div className="circle">
                <a href="#">active</a>
                <input type="radio" name="users" id="" />
              </div>

              <div className="circle">
                <a href="#">unactive</a>
                <input type="radio" name="users" id="" />
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default FilterBtn