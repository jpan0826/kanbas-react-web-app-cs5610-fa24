export default function AssignmentEditor() {
    return (
        <div className="container mt-5">
      <div id="wd-assignments-editor">
        <div id="wd-assignment-name" className="mb-3">
    <label htmlFor="assignment-name" className="form-label">
      Assignment Name</label>
    <input type="text" className="form-control"
      id="assignment-name" placeholder="A1" />
  </div>

  <div id="wd-assignment-instruction" className="mb-3 border rounded p-3">
    <p>The assignment is <a href="#" className="text-danger">available online</a></p>
    <p>Submit a link to the landing page of your Web application running on <span className="dotted">Netlify</span>.</p>
    <p>The landing page should include the following:</p>
    <ul>
        <li>Your full name and section</li>
        <li>Links to each of the lab assignments</li>
        <li>Link to the <span className="dotted">Kanbas</span> application</li>
        <li>Links to all relevant source code repositories</li>
    </ul>
    <p>The <span className="dotted">Kanbas</span> appliction should include a link to navigate back to the landing page.</p>
  </div>

  <div className="container">

    <div id="wd-assignment-points" className="row">
      <label htmlFor="points" className="form-label col text-end">
        Points
      </label>
      <div className="col">
        <input id="points" type="number" className="form-control" value="100" />
      </div>
    </div> <br />

    <div id="wd-assignment-assignment-group" className="row">
      <label htmlFor="assignment-group" className="form-label col text-end">
        Assignment Group
      </label>
      <div className="col">
        <select id="assignment-group" className="form-select">
          <option value="Assignments" selected>ASSIGNMENTS</option>
        </select>
      </div>
    </div><br />

    <div id="wd-assignment-grade" className="row">
      <label htmlFor="grade" className="form-label col text-end">
        Display Grade as
      </label>
      <div className="col">
        <select id="grade" className="form-select">
          <option value="Percentage" selected>Percentage</option>
        </select>
      </div>
    </div> <br />

    <div id="wd-assignment-submission" className="row">
      
      <label htmlFor="submission" className="form-label col text-end">
        Submission Type
      </label>
      <div className="col">
      <div className="card border boder-light rounded">
        <div className="card-body">
        <div className="mb-3">
          <select id="submission-type" className="form-select">
            <option value="Online" selected>Online</option>
          </select>
        </div>

        
          <div className="row">
          <label htmlFor="online-options" className="form-label col text-start">
            <strong>Online Entry Options</strong>
          </label>
          </div><br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="text-entry"></input>
            <label className="form-check-lbael" htmlFor="text-entry">
              Text Entry
            </label>
          </div><br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="website-url" checked></input>
            <label className="form-check-lbael" htmlFor="website-url">
              Website URL
            </label>
          </div><br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="media"></input>
            <label className="form-check-lbael" htmlFor="media">
              Media Recordings
            </label>
          </div><br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="annotation"></input>
            <label className="form-check-lbael" htmlFor="annotation">
              Student Annotation
            </label>
          </div><br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="file"></input>
            <label className="form-check-lbael" htmlFor="file">
              File Uploads
            </label>
          </div><br />
          </div>     
        </div>
        

      </div>
    </div><br />


    <div id="wd-assignment-assign" className="row">
      <label htmlFor="assign" className="form-label col text-end">
        Assign
      </label>
      <div className="col">
        <div className="card border boder-light rounded">
          <div className="card-body">
            <label htmlFor="assign-to" className="form-label">
              <strong>Assign to</strong>
            </label>
            <div className="col">
              <input type="text" className="form-control" id="assign-to" value="Everyone" />
            </div><br />

            <label htmlFor="due" className="form-label">
              <strong>Due</strong>
            </label>
            <div className="col">
              <input type="datetime-local" value="2024-05-13T23:59" className="form-control" id="due"/>
            </div><br />

            <div className="row">
              <div className="col-sm">
              <label htmlFor="available-from" className="form-label">
                <strong>Available from</strong>
              </label>
              <div className="col-sm-5">
                <input type="datetime-local" value="2024-05-06T00:00" className="form-control" id="due"/>
              </div>
              </div>
              <div className="col-sm">
              <label htmlFor="available-until" className="form-label">
                <strong>Until</strong>
              </label>
              <div className="col-sm-5">
                <input type="datetime-local" value="" className="form-control" id="due"/>
              </div>
              </div>
            </div>


          




          </div>
       
        </div>
 
   
      </div>
    </div>


  </div>



    </div> <br/>


    <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2">Cancel</button>
            <button type="submit" className="btn btn-danger">Save</button>
          </div>

        




    </div>


    
);}
