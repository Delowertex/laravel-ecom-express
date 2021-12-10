import React, {Fragment} from 'react';
import {Button, Navbar} from "react-bootstrap";
import MegaMenuMobile from "../home/MegaMenuMobile";
class NavMenuMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose"
        }
    }
    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }
    SideNavOpenClose=()=>{
        let SideNavState= this.state.SideNavState;
        if(SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
        }
        else{
            this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }

    render(){
        return (
            <Fragment>
                <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                    <Button className="btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
                    <a className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></a>
                    <a className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></a>
                    <a className="btn"><i className="fa h4 fa-search"></i>  </a>
                </Navbar>
                <div  className={this.state.SideNavState}>
                    <a className="btn"> <img className="nav-logo" src="Images/logo.png" alt=""/></a>
                    <hr/>
                    <MegaMenuMobile/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}>

                </div>

            </Fragment>
        );
    }
}
export default NavMenuMobile;