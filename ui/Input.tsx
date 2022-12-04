import React, { InputHTMLAttributes, ReactElement } from 'react';

import { styled } from '../stitches.config';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactElement;
  error?: string;
}

export const Input = ({ label, icon, error, ...rest }: InputProps) => {
  return (
    <InputContainer>
      <div>
        <div>
          {icon}
          <input {...rest} />
        </div>
      </div>
      {error && <span>{error}</span>}
    </InputContainer>
  );
};

const InputContainer = styled('div', {
  div: {
    display: 'flex',
    alignItems: 'center',

    div: {
      position: 'relative',
      flex: '1 1 0%',

      svg: {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '14px',
        transition: 'all 0.2s ease 0s'
      },

      input: {
        width: '100%',
        height: '40px',
        fontSize: '1rem',
        background: 'rgb(18, 18, 20);',
        borderColor: 'rgb(18, 18, 20)',
        color: '$primary',
        padding: '0px 1em 0px 2.65em',
        borderRadius: '4px',
        outline: 'none',
        border: '2px solid rgb(40, 39, 44)',

        '&:focus': {
          borderColor: '$pink500'
        }
      }
    }
  },

  span: {
    color: '$red500',
    fontSize: '0.75rem',
    marginTop: '4px',
    display: 'block'
  }
});
