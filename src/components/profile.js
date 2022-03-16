
import leftArrow from "../styles/svgs/back.svg";
import rightArrow from "../styles/svgs/close.svg";
import { SignOutButton } from "../App";


function handleClick(box){
    document.getElementById("accinfo").style.display = "block";

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
            return (`
            <input data-cy="petname" type="text" value="${curUser.userinfo.petname}" placeholder="Pet Name" id="petinput" 
            onChange="{(e) => document.getElementById("petinput").value = "e.target.value}""/>
            <p id = "detailName"> Pet </p>
            `);
         
        case 4:
            return (`
            
            <input data-cy="Street" type="text" value="${curUser.userinfo.address}" placeholder="Home Address" id="homeinput" 
            onChange="{(e) => document.getElementById("homeinput").value = e.target.value}"/>
            <p id = "detailName"> City </p>
            <input data-cy="City" type="text" value="`+curUser.userinfo.city+`" placeholder="City" id="homeinput3" 
            onChange="{(e) => document.getElementById("homeinput3").value = e.target.value}"/>
            <p id = "detailName"> State </p>          
            <input data-cy="State" type="text" value="`+curUser.userinfo.state+`" placeholder="State" id="homeinput2" 
            onChange="{(e) => document.getElementById("homeinput2").value = e.target.value}"/>
            <p id = "detailName"> Zip Code </p>
            <input data-cy="Zip" type="text" value="`+curUser.userinfo.zipcode+`" placeholder="Zip code" id="homeinput4" 
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
                <div data-cy="PetNameClick" className="accinfo" onClick={ () => handleClick(3)}>
                    <div className="eachDetail">
                        <p data-cy="PetName">Pet Name</p>
                        {!user.userinfo.petname? <p id="acPet"></p> : <p data-cy="savedPetName" id="acpet">{user.userinfo.petname}</p>}
                    </div>

                    <img alt={""} src={rightArrow} className="carats"/>

                </div>
                <div data-cy="HomeAddressClick" className="accinfo" onClick={ () => handleClick(4)}>
                    <div className="eachDetail"> 
                        <p data-cy="HomeAddress">Home Address</p>
                        {!user.userinfo.address? <p id="acHome"></p> : <p data-cy="savedHomeAddress" id="acHome">{user.userinfo.address}. {user.userinfo.city} {user.userinfo.state}, {user.userinfo.zipcode}</p>}
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