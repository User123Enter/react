import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: {};
    Register: {};
};

export type screenProperties = NativeStackScreenProps<RootStackParamList>;