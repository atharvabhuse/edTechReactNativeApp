import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PDFList from './PDFList';
import ReactPDF from './ReactPDF';
import JavascriptPDF from './JavascriptPDF';
import GraphQLPDF from './GraphQLPDF';
import NodePDF from './NodePDF';
import MongoPDF from './MongoPDF';

const PDFDrawer = () => {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator useLegacyImplementation >

      <Drawer.Screen name='All PDF' component={PDFList} />
      <Drawer.Screen name='React' component={ReactPDF} />
      <Drawer.Screen name='Javascript' component={JavascriptPDF} />
      <Drawer.Screen name='GraphQL' component={GraphQLPDF} />
      <Drawer.Screen name='MongoDB' component={MongoPDF} />
      <Drawer.Screen name='Node Js' component={NodePDF} />

    </Drawer.Navigator>

  )
};

export default PDFDrawer;
