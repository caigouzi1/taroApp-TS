import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { ModelArticle } from "@/models/article";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

@connect(({ article }) => ({ article }))
export default class extends Component<ModelArticle> {
  componentDidMount() {
    console.log(this.props.article.articleTotal);

    this.props.dispatch({
      type: "article/articleAll",
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button className="add_btn">+</Button>
        <Button className="dec_btn">-</Button>
        <Button className="dec_btn">async</Button>
        {/* <View><Text>{this.props.counter.num}</Text></View> */}
        <View>
          <Text>Hello, World1</Text>
        </View>
      </View>
    );
  }
}
