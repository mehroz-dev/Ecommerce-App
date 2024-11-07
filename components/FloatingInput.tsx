import React, { Component } from "react";
import { Animated } from "react-native";
import { Input, Box } from "native-base";
import { Platform } from "react-native";

export default class FloatingLabelInput extends Component<any, any> {
  private _animatedIsFocused: any;
  constructor(props: any) {
    super(props);
    this.state = {
      isFocused: false,
    };

    this._animatedIsFocused = new Animated.Value(
      this.props.defaultValue === "" ? 0 : 1
    );
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      duration: 200,
      useNativeDriver: false,
      toValue: this.state.isFocused || this.props.defaultValue !== "" ? 1 : 0,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const lableContainerStyles = {
      position: "absolute",
      left: 2,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, -7],
      }),
      zIndex: 5,
      paddingLeft: 3,
      paddingRight: 3,

      backgroundColor: this.props.labelBGColor,
    } as any;
    const AndroidlabelStyle = {
      fontWeight: "500",
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),

      // color: this.props.labelColor,
    } as any;
    const IOSlabelStyle = {
      fontWeight: "500",
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [13, 12],
      }),

      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [-3, 0],
      }),

      color: this.state.isFocused ? "#FC2778" : "#9CA3AF",
    } as any;
    return (
      <Box w={this.props.containerWidth}>
        <Animated.View pointerEvents="none" style={lableContainerStyles}>
          <Animated.Text
            style={
              Platform.OS === "android" ? AndroidlabelStyle : IOSlabelStyle
            }
          >
            {label}
          </Animated.Text>
        </Animated.View>
        <Input
          variant="underlined"
          _focus={{
            borderBottomColor: "slatePink.400",
          }}
          // _web={{
          // _stack={{
          //   _focus: {
          //     style: {
          //       outlineColor: "#FC2778",
          //       outlineWidth: "1px",
          //       outlineStyle: "solid",
          //     },
          //   },
          // }}
          // _stack={{
          //   _focus: {
          //     style: {
          //       outlineWidth: "0",
          //       boxShadow: "0 1px 0 0 #FC2778",
          //     },
          //   },
          // }}
          // }}
          // _hover={{
          //   borderBottomColor: "slatePink.400",
          // }}
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Box>
    );
  }
}
