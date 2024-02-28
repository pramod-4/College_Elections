function showVoterForm()
{
    var loginbar = document.querySelector('.loginbar');
    loginbar.innerHTML=`
    <br><br>
            <h2>Login as Voter:</h1>
            <br>
            <input type="text" placeholder="Enter your USN">
            <br><br>
            
            <input type="password" placeholder="Password">
            <br><br>
            <button type="submit" id="login">Log In</button>
            <br>
            <p id="back" onclick="defaultLogin()">Back</p>
    ` 
}
function showCandidateForm()
{
    var loginbar = document.querySelector('.loginbar');
    loginbar.innerHTML=`
    <br><br>
            <h2>Login as Candidate:</h1>
            
            <input type="text" placeholder="Enter Candidate ID">
            <br><br>
            
            <input type="password" placeholder="Password">
            <br>
            <p id="newreg">Register As Candidate</p>
            

            <button type="submit" id="login">Log In</button>
            <br>
            <p id="back" onclick="defaultLogin()">Back</p>
    `
}
function defaultLogin()
{
    var loginbar = document.querySelector('.loginbar');
    loginbar.innerHTML=`<br><br><br>
    <p style="font-size:27px;"><b>Choose a Login method</b></p>
    
    <button class="login" onclick="showVoterForm()" style="font-size: 17px;">Login as Voter</button>
    <br><br><br>
    <button class="login" onclick="showCandidateForm()" style="font-size: 17px;">Login as Candidate</button>
    ` 
}