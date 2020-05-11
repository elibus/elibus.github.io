// Import all components and alter those for this viewer.
import "./components/ViewerCalendar";
import AllComponents from "formiojs/components";
import ViewerDateTime from "./components/DateTime";
import ViewerTabs from "./components/Tabs";
import ViewerPanel from "./components/Panel";
import ViewerEditGrid from "./components/EditGrid";

AllComponents.datetime = ViewerDateTime;
AllComponents.tabs = ViewerTabs;
AllComponents.panel = ViewerPanel;
AllComponents.editgrid = ViewerEditGrid;

import Formio from "formiojs/Formio";
import Components from "formiojs/components/Components";
Components.setComponents(AllComponents);
Formio.Components = Components;
export Form from "formiojs/Form";
export Utils from "formiojs/utils";
export { Components, Formio };
