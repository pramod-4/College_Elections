function showVoterForm()
{
    var loginbar = document.querySelector('.loginbar');
    var hptext = document.querySelector('.hptext');
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
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Voter</b></p>
                
                <p style="font-size:23px; padding:30px "><b>Explore the profiles of candidates, understand their goals,and cast your <br>vote for the individuals who resonate with your vision for the college.  <br>Your voice matters, and your vote can shape the future of our campus community.</b></p>
                
                <img src="images/voter.png" alt="" srcset="" height="250px" style="margin-left: 290px; margin-top:-50px">
                
    `
    
}
function showCandidateForm()
{
    var loginbar = document.querySelector('.loginbar');
    var hptext = document.querySelector('.hptext');
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
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Candidate</b></p>
                
                <p style="font-size:23px; padding:30px; margin-bottom:0px "><b>Are you passionate about making a difference?<br>Consider standing as a candidate! Showcase your leadership skills, <br>share your ideas, and let your fellow students know why you're the right <br>choice to represent them.</b>
                </p>
                <img src="images/candi.png" alt="" srcset="" height="300px" style="margin-left: 290px; margin-top:-30px;">
                
    `
}
function defaultLogin()
{
    var loginbar = document.querySelector('.loginbar');
    var hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`<br><br><br>
    <p style="font-size:27px;"><b>Choose a Login method</b></p>
    
    <button class="login" onclick="showVoterForm()" style="font-size: 17px;">Login as Voter</button>
    <br><br><br>
    <button class="login" onclick="showCandidateForm()" style="font-size: 17px;">Login as Candidate</button>
    ` 
    hptext.innerHTML=`
    <p style="font-size:23px; padding:30px "><b>Step into the virtual arena of campus elections – where wit, promises,  <br>and votes collide! <br>Your front-row seat to the coolest show on campus awaits. <br><br>Let the digital democracy party begin!</b>
                </p>    
                <br>
                
    `
}