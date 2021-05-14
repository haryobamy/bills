import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from 'styled-components';






 class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        direct:'direct',
        wallet:'wallet'
       
    };
  }

  handleChange(selected) {
    this.setState({ selected });
  }



  

  render() {
    const { selected, toggleSelected,name,onChange } = this.props;
    return (

        <ToggleWrapper>
      <div className="toggle-container" onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
           
          {selected ? "Direct" : "Wallet"}
          
        </div>
      </div>
      </ToggleWrapper>
    );
  }
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

const ToggleWrapper = styled.div`
.toggle-container {
    width: 75px;
    background-color: silver;
    cursor: pointer;
    user-select: none;
    border-radius: 10px;
    padding: 2px ;
    height: 21px;
    position: relative;
    margin-top:5px;
    margin-bottom: -3px;
    
  }
  
  .dialog-button {
    font-size: 10px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: green;
    color: white;
    padding: 1px 1.5px;
    border-radius: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    min-width: unset;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 34px;
    transition: all 0.3s ease;
  }
  
  .disabled {
    background-color:  #002b49;
    left: 2px;
  }
  


`
export default ToggleButton;