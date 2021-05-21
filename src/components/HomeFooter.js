import React from 'react';
import './HomeFooter.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ReactFlagsSelect from 'react-flags-select';
import NativeSelect from '@material-ui/core/NativeSelect';

class HomeFooter extends React.Component {
  
    
    render () {
        const companyItemList = ['Who We Are', 'Blogs', 'Carrers', 'ReportFraud', 'Contact'];
        const forFoodiesItemList = ['Code fo Conduct', 'Community', 'Blogger Help', 'Mobile Apps'];
        const forRestaurantsItemList = ['Add Restaurant', 'Claim your Listing', 'Business App', 'Restaurant Widgets', 'Product for Buisness'];
        const forYouItemList = ['Privacy', 'Terms', 'Security', 'Stepmap'];

        return(
    
    <div>
              <div className= "footer-header">
              <h1> Dyniz </h1>
               <ReactFlagsSelect className = "select-country" />
               <NativeSelect className = "select-language">
                   <option aria-label="None" value="" />
                   <option value={10}>English</option>
                   <option value={20}>Hindi</option>
                   <option value={30}>Marathi</option>
                </NativeSelect>
                </div>

        <List>
                <ListItem>

                    <li className = "li-list" >
                        COMPONY
                        {
                            companyItemList.map( companyItem => <li className = "li-sublist"> {companyItem} </li> )    
                        }
                    </li>
  
                    <li className = "li-list">
                        FOR FOODIES
                        {
                            forFoodiesItemList.map( foodiesItem => <li className = "li-sublist" > {foodiesItem} </li> )
                        }
                    </li>

                    <li className = "li-list" >
                        FOR RESTAURANT
                        {
                            forRestaurantsItemList.map( restaurantItem => <li className = "li-sublist" > {restaurantItem} </li> )
                        }
                    </li>

                    <li className = "li-list" >
                        FOR YOU
                        {
                            forYouItemList.map( forYouItem => <li className = "li-sublist" > {forYouItem} </li> )
                        }
                    </li>

                    <li className = "li-list" >
                        SOCIAL LINKS
                        {
                           <li>
                               <InstagramIcon />
                               <FacebookIcon />
                               <TwitterIcon />
                            </li>

                        }
                    </li>

                    </ListItem>
            </List>

            <hr  style={{
                color: 'red',
                backgroundColor: '#000000',
                height: 1,
                borderColor : '#000000'
            }}/>

            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2021 © Zomato™ Pvt Ltd. All rights reserved.</p>

    </div>  
    );
  }
}

export default HomeFooter;
