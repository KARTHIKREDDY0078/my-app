import React,{Component}from "react";
class CBCPropsexl extends Component{
    render(){
        console.log(this);
        return(
            <div>CBCPropsexl
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                <div>
                    {this.props.desig[0]}
                </div>
                <h2>{this.props.userDetails.area}</h2>
                <button onClick={this.props.sendFun}>CLICK BUTTON</button>
            </div>
        )
    }
}
export default CBCPropsexl;