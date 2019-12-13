import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import {login1} from "../../services/user"

export default class Default extends PureComponent {
  state = {
    name : ''
  }
  async getMessage() {
    console.log(111111)
    const res = await login1()
    console.log(res)
  }
  componentDidMount = async () => {
    console.log(2222)
    this.getMessage()
  }

  render() {
    return (
      <div className="g-default">
        默认显示页
        <br />
        <Link to={`/login`}>
          返回
        </Link>
      </div>
    )
  }
}