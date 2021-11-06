import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollViewProps,
  ViewProps,
} from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

// export const ModalContainer = styled.View`
// flex : 1;
//   background-color: rgba(0, 0, 0, 0.64);
// `;

export const KeyboardAvoidingViewCustom = styled(KeyboardAvoidingView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },

} as KeyboardAvoidingViewProps)`
  background-color: rgba(0, 0, 0, 0.64);
  flex: 1;
`;

export const ModalContent = styled.ScrollView.attrs(
  ({ theme }) =>
    ({
      contentContainerStyle: {
        backgroundColor: theme.colors.gray,
        alignItems: "center",
        // justifyContent: "center",
        // position: "relative",

        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 24,
        paddingBottom: 24 + getBottomSpace(),
        paddingTop: 24 + getStatusBarHeight(),
        marginTop: "auto",
      },
    } as ScrollViewProps)
)``;

export const WrapperRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TextInput = styled.TextInput<{
  small?: boolean;
  extraSmall?: boolean;
}>`
  height: 40px;
  margin: 12px 0;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding-left: 12px;
  width: 100%;
  color: ${({ theme }) => theme.colors.textBold};

  ${({ small, extraSmall }) => {
    if (small) {
      return css`
        width: 45%;
      `;
    }
    if (extraSmall) {
      return css`
        width: 30%;
        padding-left: 0;
        text-align: center;
      `;
    }
  }}
  font-size: 18px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.colors.primary};

  margin-top: 12px;
`;

export const ButtonAddText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrapperCloseButon = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;
`;
