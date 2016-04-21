import React from "react";

import bem from 'react-bem-classes';

@bem({
  block: 'col',
})

class Col extends React.Component{

  columnWidthCalculator(){
    return 100/this.props.cols*this.props.width
  }

  orderCalculator(){
    return this.props.order
  }

  render(){
    const styles = {
      width: `${this.columnWidthCalculator()}%`,
      order: this.orderCalculator()
    }
    return(
      <div className={this.block()} style={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default Col;