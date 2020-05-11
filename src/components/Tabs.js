import TabsComponent from "formiojs/components/tabs/Tabs";
export default class ViewerTab extends TabsComponent {
  constructor(component, options, data) {
    super(component, options, data);

    if (this.options.pdf) {
      this.component.widget.type = "viewertabs";
    }
  }
}
