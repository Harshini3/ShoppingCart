import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

const styles ={
    color: 'black',
    fontSize: '40px',
  }
 class Home extends Component{
    
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/><br/><br/>
                            <span style={styles} className="card-title">{item.title}</span><br/>
                            <button><span to="/" class="add" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">Add to Fav</i></span></button>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}₹</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center" style={{textAlign:"center"}}>The Watch are Available!</h3>
                <div className="box">
                    {itemList}
                </div>
                <p>Done by, Harshini N Murthi</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)