import React, { RefObject } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText
} from '@material-ui/core';

import { FormButton } from '../components';
import { Sensor } from './EMSESPtypes';

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
            Change Sensor Name
          </DialogTitle>
          <DialogContent dividers>
            <TextValidator
              validators={[
                'matchRegexp:^([a-zA-Z0-9_.-]{0,19}( -?[0-9](.[0-9])?)?)$'
              ]}
              errorMessages={['Not a valid sensorname']}
              name="sensorname"
              label={'Name of Sensor#' + sensor.no}
              fullWidth
              autoFocus
              variant="outlined"
              value={sensor.id}
              onChange={handleSensorChange('id')}
              margin="normal"
            />
            <FormHelperText>
              (optional 'offset' separated by space)
            </FormHelperText>
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
