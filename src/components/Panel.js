import PanelComponent from 'formiojs/components/panel/Panel';

export default class ViewerPanel extends PanelComponent {
  get collapsed() {
    return false;
  }
}
