
import leftArrow from "../styles/svgs/back.svg";
import rightArrow from "../styles/svgs/close.svg";
import { SignOutButton } from "../App";
// import {useUserState} from "../utilities/firebase.js";


function handleClick(box){
    document.getElementById("accinfo").style.display = "block";
    // document.getElementById("inputid").value = "";

    var label;
    var shortened;
    switch(box){
        case 1:
            label = "Name";
            shortened = "name";
            break;
        case 2: 
            label = "Email";
            shortened = "email";
            break;
        case 3:
            label = "Pet Name";
            shortened = "petname";
            document.getElementById("customInput").innerHTML = customInput(box);
            document.getElementById("accinfoC").setAttribute("loc", shortened);

            break;
        case 4:
            label = "Home Address";
            shortened = "address";
            document.getElementById("customInput").innerHTML = customInput(box);
            document.getElementById("accinfoC").setAttribute("loc", shortened);

            break;
        case 5:
            label = "Payment";
            shortened = "payment";
            document.getElementById("customInput").innerHTML = customInput(box);
            document.getElementById("accinfoC").setAttribute("loc", shortened);

            break;
        default:
            console.log("Default for Account details");
    }
    console.log("label is " + label);
    document.getElementById("detailName").innerHTML = label;
    document.getElementById("savebtn").setAttribute("data-shortened", shortened);

    
}

var curUser = null

function customInput(box){


    switch(box){
        case 3:
            return (`<input type="text" 
            placeholder="Pet Name"
            value="${curUser.userinfo.petname}" 
             id="petinput" 
            onChange="{(e) => document.getElementById("petinput").value = "e.target.value}""/>`);
         
        case 4:
            return (`
            
            <input type="text" value="${curUser.userinfo.address}" placeholder="Home Address" id="homeinput" 
            onChange="{(e) => document.getElementById("homeinput").value = e.target.value}"/>
            <p id = "detailName"> City </p>
            <input type="text" value="`+curUser.userinfo.city+`" placeholder="City" id="homeinput3" 
            onChange="{(e) => document.getElementById("homeinput3").value = e.target.value}"/>
            <p id = "detailName"> State </p>          
            <input type="text" value="`+curUser.userinfo.state+`" placeholder="State" id="homeinput2" 
            onChange="{(e) => document.getElementById("homeinput2").value = e.target.value}"/>
            <p id = "detailName"> Zip Code </p>
            <input type="text" value="`+curUser.userinfo.zipcode+`" placeholder="Zip code" id="homeinput4" 
            onChange="{(e) => document.getElementById("homeinput4").value = e.target.value}"/>
            
            `);
        
        case 5:
            return (`                
            <input data-cy="PaymentInfoNumber" type="number" value="${curUser.userinfo.payment}" placeholder="Credit Card Number" id="cardinput" 
            onChange="{(e) => document.getElementById("cardinput").value = e.target.value}"/>
            <p id = "detailName"> CVV </p>
            <input data-cy="PaymentInfoCVV" type="number" value="${curUser.userinfo.cvv}" placeholder="CVV" id="cvvid" 
            onChange="{(e) => document.getElementById("cvvid").value = e.target.value}"/>
            <p id = "detailName"> Date </p>
            <input data-cy="PaymentInfoCCDate" type="month" value="${curUser.userinfo.expDate}" placeholder="date" id="dateid" 
            onChange="{(e) => document.getElementById("dateid").value = e.target.value}"/>
            `);
        default:
            return;
    }
}

const ProfilePage = (user) => {

    // console.log("Profile page clicked");
    // console.log("user is " + user.username);
    // console.log("user info from profile " + user.userinfo.name);
    curUser = user
   
    return (
        <div>
            <div id="accheader">
                <img data-cy="BackButton" alt={""} src={leftArrow} className="back" 
                    onClick={()=> document.getElementById("ppage").style.display = "none"}/>
                <p>Account details</p>
            </div>
            <div id="accphoto" className="accinfo">
                <p id = "">Profile Photo</p>
                <img src={user.userphoto} alt="userphoto"></img>
            </div>
            <div id="accdetails">

                <div className="accinfo">
                    <div className="eachDetail">
                        <p>Name</p>
                        <p id="acName" fontWeight="bold">{user.username}</p>
                    </div>
                </div>
                <div className="accinfo" >
                    <div className="eachDetail">
                        <p data-cy="Email" >Email</p>
                        <p id="acEmail">{user.useremail}</p>
                    </div>
                </div>
                <div className="accinfo" onClick={ () => handleClick(3)}>
                    <div className="eachDetail">
                        <p>Pet's Name</p>
                        <p id="acPet">{user.userinfo.petname}</p>
                    </div>

                    <img alt={""} src={rightArrow} className="carats"/>

                </div>
                <div className="accinfo" onClick={ () => handleClick(4)}>
                    <div className="eachDetail"> 
                        <p>Home Address</p>
                        {!user.userinfo.address? <p id="acHome"></p> : <p id="acHome">{user.userinfo.address}. {user.userinfo.city} {user.userinfo.state}, {user.userinfo.zipcode}</p>}
                    </div>

                    <img alt={""} src={rightArrow} className="carats"/>

                </div>
                <div data-cy="PaymentClick" className="accinfo" onClick={ () => handleClick(5)}>
                    <div className="eachDetail"> 
                        <p data-cy="Payment">Payment</p>
                        <p id="acPay"> {user.userinfo.payment}</p>
                    </div>

                    <img alt={""} src={rightArrow} className="carats"/>

                </div>
                <div><SignOutButton /></div>

            </div>
        </div>
    );
    
}

export default ProfilePage;