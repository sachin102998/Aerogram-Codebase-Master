import React from 'react';
import Screen from './Screen';

export const ProfileScreen=({navigation})=> <Screen navigation={navigation} name="profile"></Screen> ;
export const MessageScreen=({navigation})=> <Screen navigation={navigation} name="message"></Screen> ;
export const ActivityScreen=({navigation})=> <Screen navigation={navigation} name="activity"></Screen> ;
export const ListScreen=({navigation})=> <Screen navigation={navigation} name="list"></Screen> ;
export const ReportScreen=({navigation})=> <Screen navigation={navigation} name="report"></Screen> ;
export const StatisticScreen=({navigation})=> <Screen navigation={navigation} name="statistic"></Screen> ;
export const SignOutScreen=({navigation})=> <Screen navigation={navigation} name="signout"></Screen> ;