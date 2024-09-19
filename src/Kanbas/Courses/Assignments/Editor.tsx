export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={40} rows={10}>
            The assignment is available online. Submit a link to the landing page of 
          your web application running on Netlify. The landing page should include the following: 
          Your full name and section Links to each of the lab assignments Link to the Kanbas application
          Links to all relevant souce code repositories. The Kanbas application should include 
          a link to naviate back to the landing page.
        </textarea>
        <br /><br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select>
                <option value="Assignments" selected>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="we-display-grade">Display Grade as</label>
          </td>
          <td>
          <select>
                <option value="PERCENTAGE" selected>Percentage</option>
            </select>
          </td>
        </tr>
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select>
                <option value="online" selected>Online</option>
            </select>
          </td>
        </tr>
        <p></p>
        <tr>
            <td align="center" valign="top">
            <label htmlFor="we-online-entry"></label>
            </td>
            <label>Online Entry Options</label><br/>

<input type="checkbox" name="choose-online-option" id="wd-chkbox-text"/>
<label htmlFor="wd-chkbox-text">Text Entry</label><br/>

<input type="checkbox" name="choose-online-option" id="wd-chkbox-url"/>
<label htmlFor="wd-chkbox-url">Website URL</label><br/>

<input type="checkbox" name="choose-online-option" id="wd-chkbox-media"/>
<label htmlFor="wd-chkbox-mediai">Media Recordings</label><br/>

<input type="checkbox" name="choose-online-option" id="wd-chkbox-annotation"/>
<label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

<input type="checkbox" name="choose-online-option" id="wd-chkbox-file"/>
<label htmlFor="wd-chkbox-file">File Uploads</label>

        </tr>
        

        <br /><br />
        




        <tr>
            {/* <td> */}
            <label htmlFor="wd-assign-assignee">Assign to</label>
            

          <td>
            <input id="wd-assign-asignee" value={"Everyone"} />
            </td>
        
            {/* </td> */}
        </tr>
       


        <p></p>
        <tr>
            <label htmlFor="we-assign-due">Due</label><br/>
            <td>
            <input id="wd-assign-due" type="date" value="05/13/2024"></input>
            </td>
        </tr>
        <p></p>
        

        <tr>
      
      <label htmlFor="wd-assgin-available-from"> Available from </label>
      <label htmlFor="wd-assign-available-until"> Until </label><br/>
<td>
<input type="date"
      id="wd-assign-available-from"
      value="05/06/2024"/>
<input type="date"
      id="wd-assign-available-until"
      value="01/21/2000"/><br/>
      </td>
      </tr>
      </table>
      <p></p>

    
     
        <table align="right">
      <button>
        Cancel
      </button>
      <button>
        Save
      </button>
     </table>
   
 
      
     
   
    </div>
    
    
);}
