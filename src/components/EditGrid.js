import equal from 'fast-deep-equal';
import _ from 'lodash';
import EditGridComponent from 'formiojs/components/editgrid/EditGrid';

export default class ViewerEditGrid extends EditGridComponent {
  constructor(...args) {
    super(...args);
    _.set(this.component, 'templates.header', '');
  }

  setValue(value, flags) {
    if (equal(this.defaultValue, value)) {
      return false;
    }

    if (!value) {
      this.dataValue = this.defaultValue;
      return false;
    }
    if (!Array.isArray(value)) {
      if (typeof value === 'object') {
        value = [value];
      }
      else {
        return false;
      }
    }

    const changed = this.hasChanged(value, this.dataValue);
    this.dataValue = value;
    // Refresh editRow data when data changes.
    this.dataValue.forEach((row, rowIndex) => {
      const editRow = this.editRows[rowIndex];
      if (editRow) {
        editRow.data = row;
        editRow.isOpen = true;
        if (editRow.isOpen) {
          if (editRow.emptyOpen) {
            editRow.isOpen = true;
          }
          else {
            editRow.components.forEach(col => {
              col.rowIndex = rowIndex;
              this.setNestedValue(col, row, flags, false);
            });
          }
        }
      }
      else {
        this.editRows[rowIndex] = {
          components: this.createRowComponents(row, rowIndex),
          isOpen: true,
          data: row,
        };
        this.checkRow(null, this.editRows[rowIndex], {}, this.editRows[rowIndex].data);
      }
    });
    this.updateOnChange(flags, changed);
    if (changed) {
      this.redraw();
    }
    return changed;
  }
}
