import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = ()=> {
    return(
        <>
        <div className="container">
            <div className="left_form">
                <form>
                <h3>Contact Form</h3>
                <label htmlFor="firstname">First name</label>
                <label htmlFor="text">Last name</label><br />

                <input type="firstname" />
                <input type="text" /> <br />
                
                <label htmlFor="email">Email</label> <br/>
                <input type="email" /> <br />

                <label htmlFor="message">Message</label> <br />
                <input type="message" /><br />

                <label htmlFor="comment">Additional Details</label> <br />
                <textarea name="comment" id="comment" cols="30" rows="7"></textarea>
                <br /><br />
                </form>

                <input type="submit" id="submit"/>
                
            </div>
            <div className="middle">
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Destinations</li></a>
                    <a href=""><li>Community</li></a>
                    <a href=""><li>About Us</li></a>
                </ul>
            </div>
            <div className="right">
                <div className="icons">
                    <a href=""><i class="bi bi-twitter" ></i></a>
                    <a href="">icon2</a>
                    <a href="">icon3</a>
                    <a href="">icon4</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer