import React, { Component } from 'react'
require('./Lotter.css')
class Lotter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0, // 当前转到哪个位置
      count: 0 , // 总共有多少个位置
      timer: 0, // setTimede ID 
      speed: 20, // 初始转动速度
      times: 0, // 转到次数
      cycle: 50, // 转动基本次数至少要转多少次再进入到抽奖环节
      prize: -1, // 中奖位置
      luckUnit0: true,
      luckUnit1: false
    }
  }
  // 初始化转盘
  init () {
  }
  // 转动
  roll () {
    var luckNum = `luckUnit${this.state.index}`
    var change = {}
    change[luckNum] = false
    this.setState(change, () => {
      // 当前位置往前移一位
      this.setState({
        index: this.state.index + 1
      }, () => {
        var luckNum = `luckUnit${this.state.index}`
        var change2 = {}
        change2[luckNum] = true
        this.setState(change2)
      })
    })
  }
  // 开始转动事件
  lotterClick () {
    var self = this
    self.roll()
    setTimeout(() => {
      self.lotterClick()
    }, self.state.speed)    
  }
  render() {   
    return (
      <div className="lotter-contain">
       <div className="shanDeng">
       <div className="luck">
          <table className="table-main">
            <tbody>
              <tr>
                <td className={`luck-unit luck-unit-0 ${this.state.luckUnit0 === true ? 'active' : ''}`}>
                  <img src="http://www.jsdaima.com/Upload/1482283667/1.png" />
                </td>
                <td className={`luck-unit luck-unit-1 ${this.state.luckUnit1 === true ? 'active': ''}`}>
                  <img src="http://www.jsdaima.com/Upload/1482283667/2.png" />
                </td>
                <td className="luck-unit luck-unit-2">
                  <img src="http://www.jsdaima.com/Upload/1482283667/4.png" />
                </td>
                <td className="luck-unit luck-unit-3">
                  <img src="http://www.jsdaima.com/Upload/1482283667/3.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-11">
                  <img src="http://www.jsdaima.com/Upload/1482283667/6.png" />
                </td>
                <td rowSpan="2" colSpan="2" className="cjBtn" id="btn" onClick={() => this.lotterClick()} />
                <td className="luck-unit luck-unit-4">
                  <img src="http://www.jsdaima.com/Upload/1482283667/5.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-10">
                  <img src="http://www.jsdaima.com/Upload/1482283667/1.png" />
                </td>
                <td className="luck-unit luck-unit-5">
                  <img src="http://www.jsdaima.com/Upload/1482283667/6.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-9">
                  <img src="http://www.jsdaima.com/Upload/1482283667/3.png" />
                </td>
                <td className="luck-unit luck-unit-8">
                  <img src="http://www.jsdaima.com/Upload/1482283667/4.png" />
                </td>
                <td className="luck-unit luck-unit-7">
                  <img src="http://www.jsdaima.com/Upload/1482283667/8.png" />
                </td>
                <td className="luck-unit luck-unit-6">
                  <img src="http://www.jsdaima.com/Upload/1482283667/7.png" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       </div>        
      </div>
    )
  }
}
module.exports = Lotter
