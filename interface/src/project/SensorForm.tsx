import React, { RefObject } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText,
  InputAdornment
} from '@material-ui/core';

import { FormButton } from '../components';
import { Sensor, DeviceValueUOM_s } from './EMSESPtypes';

interface SensorFormProps {
  sensor: Sensor;
  onDoneEditing: () => void;
  onCancelEditing: () => void;
  handleSensorChange: (
    data: keyof Sensor
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SensorForm extends React.Component<SensorFormProps> {
  formRef: RefObject<any> = React.createRef();

  submit = () => {
    this.formRef.current.submit();
  };

  render() {
    const { sensor, handleSensorChange, onDoneEditing, onCancelEditing } =
      this.props;

    return (
      <ValidatorForm onSubmit={onDoneEditing} ref={this.formRef}>
        <Dialog
          maxWidth="xs"
          onClose={onCancelEditing}
          aria-labelledby="user-form-dialog-title"
          open
        >
          <DialogTitle id="user-form-dialog-title">
            Editing Sensor #{sensor.no}
          </DialogTitle>
          <DialogContent dividers>
            <FormHelperText>Name</FormHelperText>
            <TextValidator
              validators={['matchRegexp:^([a-zA-Z0-9_.-]{0,19})$']}
              errorMessages={['Not a valid sensorname']}
              id="id"
              name="id"
              fullWidth
              autoFocus
              variant="outlined"
              value={sensor.id}
              onChange={handleSensorChange('id')}
            />
            <FormHelperText>Custom Offset</FormHelperText>
            <TextValidator
              validators={['matchRegexp:^(-?[0-9](.[0-9])?)$']}
              errorMessages={['Not a valid offset']}
              id="offset"
              name="offset"
              value={sensor.offset}
              fullWidth
              variant="outlined"
              onChange={handleSensorChange('offset')}
              endAdornment={
                <InputAdornment position="end">
                  {DeviceValueUOM_s[sensor.uom]}
                </InputAdornment>
              }
            />
          </DialogContent>
          <DialogActions>
            <FormButton
              variant="contained"
              color="secondary"
              onClick={onCancelEditing}
            >
              Cancel
            </FormButton>
            <FormButton
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.submit}
            >
              Done
            </FormButton>
          </DialogActions>
        </Dialog>
      </ValidatorForm>
    );
  }
}

export default SensorForm;
