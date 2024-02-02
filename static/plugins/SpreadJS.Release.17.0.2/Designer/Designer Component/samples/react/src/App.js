import React from 'react';
import * as GC from '@mescius/spread-sheets';
import "@mescius/spread-sheets-print";
import "@mescius/spread-sheets-shapes";
import "@mescius/spread-sheets-slicers";
import "@mescius/spread-sheets-pivot-addon";
import "@mescius/spread-sheets-tablesheet";
import "@mescius/spread-sheets-ganttsheet";
import "@mescius/spread-sheets-reportsheet-addon";
import "@mescius/spread-sheets-formula-panel";
import "@mescius/spread-sheets-io";
import '@mescius/spread-sheets-designer-resources-en';
import '@mescius/spread-sheets-designer';
import {Designer} from '@mescius/spread-sheets-designer-react';
import "@mescius/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css"
import "@mescius/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
import "./custom.css"
import * as ExcelIO from "@mescius/spread-excelio";

//Apply License
var sjsLicense = "sjs-distribution-key";
// GC.Spread.Sheets.LicenseKey = sjsLicense;
// ExcelIO.LicenseKey = sjsLicense;
 
// GC.Spread.Sheets.Designer.LicenseKey = "designer-component-distribution-key";

function App() {
  var config = GC.Spread.Sheets.Designer.DefaultConfig;
  config.commandMap = {
    Welcome: {
      title: "Welcome",
      text: "Welcome",
      iconClass: "ribbon-button-welcome",
      bigButton: "true",
      commandName: "Welcome",
      execute: async (context, propertyName, fontItalicChecked) => {
        alert("Welcome to new designer.");
      },
    },
  };
  config.ribbon[0].buttonGroups.unshift({
    label: "NewDesigner",
    thumbnailClass: "welcome",
    commandGroup: {
      children: [
        {
          direction: "vertical",
          commands: ["Welcome"],
        },
        // This is custom button ----------------end-------------
      ],
    },
  });
  return (
    <Designer styleInfo = {{width: "100%", height: '98vh'}} config = {config}   spreadOptions = {{sheetCount: 2}}></Designer>
  );
}

export default App;
