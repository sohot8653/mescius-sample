import { Component, ViewEncapsulation } from '@angular/core';
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
import * as GCDesigner from "@mescius/spread-sheets-designer";

import * as ExcelIO from '@mescius/spread-excelio';
 
// var sjsLicense = "sjs-distribution-key";
// GC.Spread.Sheets.LicenseKey = sjsLicense;
// (ExcelIO as any).LicenseKey = sjsLicense;
 
// (GC.Spread.Sheets as any).Designer.LicenseKey = "designer-component-distribution-key”;

var config = GCDesigner.Spread.Sheets.Designer.DefaultConfig;
config.commandMap = {
  Welcome: {
    title: "Welcome",
    text: "Welcome",
    iconClass: "ribbon-button-welcome",
    bigButton: true,
    commandName: "Welcome",
    execute: async (context: GCDesigner.Spread.Sheets.Designer.Designer, propertyName: string, fontItalicChecked: boolean) => {
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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'en';
  props = {
    styleInfo: "width: 100%; height: 98vh; margin-top: 10px",
    config: config,
    spreadOptions: { sheetCount: 2 }
  };
}
