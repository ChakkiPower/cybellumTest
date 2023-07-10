import TextField, { TextFieldProps } from '@mui/material/TextField';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomInputLabel } from './styles';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InputAdornment from '@mui/material/InputAdornment';

interface RHFControllerProps {
  name: string;
  id: string;
  label: string;
}

type RHFTextFieldProps = RHFControllerProps & TextFieldProps;

const RHFTextField: React.FC<RHFTextFieldProps> = ({ name, id, label, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomInputLabel htmlFor={id} error={!!error}>
            {label}
          </CustomInputLabel>
          <TextField
            id={id}
            {...field}
            spellCheck={false}
            error={!!error}
            InputProps={{
              endAdornment: !!error && (
                <InputAdornment position="end">
                  <ErrorOutlineIcon color="error" />
                </InputAdornment>
              ),
            }}
            {...props}
          />
        </>
      )}
    />
  );
};

export { RHFTextField };
