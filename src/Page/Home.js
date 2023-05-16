import Container from 'react-bootstrap/Container';
import MainNav from "../components/MainNav";

import Backdrop from '../components/Backdrop';
import Button from 'react-bootstrap/Button';
import classes from "./Home.module.css";
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>
        
        <MainNav />
        
       <div className={`${classes.bgImg} ${classes.showColor}`}>
       <Container>
            <div className={classes.showCase}>
           <span className={classes.auto}>AUTO LOAN PROMOTION</span>
           <h3 className={classes.showcaseText}>$350 bonus on your PenFed auto loan when using our Car Buying Service</h3>
           <ul className={classes.showLists}>
            <li>Rates as low as 5.39% APR* on new cars up to 36 months</li>
            <li>Additional cash incentives from select manufacturers</li>
           </ul>
            <Button variant="primary" className={classes.showBtn}>Find a Car</Button>
            <h6 className={classes.showFooter}>Offer ends April 30, 2023</h6>
            </div>
       </Container>
        </div>
        <div className={classes.mTop}>
            <h3 className={classes.latest}>The Latest From PenFed Credit Union</h3>
        </div>
    
        <div className={classes.gridContainer}>
            <div className={`${classes.gridBox} ${classes.rowSpan}`}>
               <h2 className={classes.gridTitle}>Auto Purchase or Refinance Loans</h2>
               <p>Get pre-qualified with no impact to your credit score²</p>
               <Button className={classes.gridBtn}>Learn More</Button> 
            </div>
            <div className={classes.gridBox}>
               <h3>Guaranteed returns with our Money Market Certificates</h3>
               <ul>
                <li>4.70% APY* for 18 months</li>
                <li>4.65% APY* for 15 months</li>
               </ul>
               <p>*Annual Percentage Yield</p>
               <Button className={classes.gridBtn}>Open Now</Button> 
            </div>
            <div className={classes.gridBox}>
               <h3>Premium Online Savings</h3>
               <p>Fuel your savings faster with 2.70% APY*</p>
               <p>*Annual Percentage Yield</p>
               <Button className={classes.gridBtn}>Start Saving</Button> 
            </div>
        </div>
        <div className={classes.cardBg}>
            <h3 className={classes.cardText}>Featured Articles</h3>
            <div className={classes.cardBox}>
                <div className={classes.boxShadow}>
                    <Card>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/1353067961/photo/man-using-credit-card-and-laptop-for-online-shopping.jpg?b=1&s=170667a&w=0&k=20&c=D5BROn_LCbNfYuKgrHS7lk1V1yNSjTHp2ywrHI-KL1s=" className={classes.imageWidth}/>
                    <Card.Body>
                    <Card.Title>10 Essential Strategies to Help You Qualify for a Credit Card</Card.Title>
                    </Card.Body>
                    </Card>
                </div>
                <div className={classes.boxShadow}>
                    <Card>
                    <Card.Img variant="top" src="https://cms.com.ng/wp-content/uploads/2015/07/013113-national-money-home-house-family-jappy-parents-homeowner.png" className={classes.imageWidth}/>
                    <Card.Body>
                    <Card.Title>Top Reasons for a Credit Union Home Refinance</Card.Title>
                    </Card.Body>
                    </Card>
                </div>
                <div className={classes.boxShadow}>
                    <Card>
                    <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/03/getty_weekly-allowance_081620.jpg" className={classes.imageWidth} />
                    <Card.Body>
                    <Card.Title>5 Proven Budgeting Strategies to Know</Card.Title>
                    </Card.Body>
                    </Card>
                </div> 
            </div>
            
            <Button className={classes.cardBtn}>See All Articles</Button>
   
    
        </div>

        <div className={classes.footer}>
            {/* <Container> */}
            <div className={classes.footerGrid}>
            <div>
                <ul className={classes.footerList}>
                    <span className={classes.liFlex}>
                    <li className={classes.footerLists}>Locations</li>
                    <li className={classes.footerLists}>Careers</li>
                    <li className={classes.footerLists}>Press Room</li>
                    </span>
                    <span className={classes.liFlex}>
                    <li className={classes.footerLists}>Foundation</li>
                    <li className={classes.footerLists}>Contact Us</li>
                    </span>
                    
                </ul>
            </div>
            <div className={classes.footerColumn}>
                <p className={classes.footerColumnText}>This credit union is federally insured by the National Credit Union Administration. Rates are current as of February 2023 unless otherwise noted and are subject to change.</p>

                <h6>APY = Annual Percentage</h6>
                <h6>Yield APR = Annual Percentage Rate</h6>
                
            </div>
            <div className={classes.footerImageDiv}>
                <img src="data:image/png;base64,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" alt='app store'className={classes.footerImage}  />
                <img src="data:image/png;base64,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" alt='play store' className={classes.footerImage} />
            </div>
            </div>
            <h4 className={classes.copyright}>©2023 Pentagon Federal Credit Union</h4>
            <div>
                <ul className={classes.footerLastGrid}>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Disclosure</li>
                    <li>Fees</li>
                    <li>Forms</li>
                    <li>Site Map</li>
                </ul>
            </div>
            {/* </Container> */}
        </div>
        

        </>
       
    );
}

export default Home;