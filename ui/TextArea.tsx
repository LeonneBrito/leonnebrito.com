import React, { TextareaHTMLAttributes } from 'react';

import { styled } from '../stitches.config';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const TextArea = ({ error, ...rest }: TextAreaProps) => {
  return (
    <TextAreaPropsContainer>
      <div>
        <div>
          <textarea {...rest} />
        </div>
      </div>
      {error && <span>{error}</span>}
    </TextAreaPropsContainer>
  );
};

const TextAreaPropsContainer = styled('div', {
  div: {
    display: 'flex',
    alignItems: 'center',

    div: {
      position: 'relative',
      flex: '1 1 0%',

      textarea: {
        width: '100%',
        height: '100px',
        fontSize: '1rem',
        fontFamily: '$body',
        background: 'rgb(18, 18, 20);',
        borderColor: 'rgb(18, 18, 20)',
        color: '$primary',
        padding: '0.5em 1em 0px 1em',
        borderRadius: '4px',
        outline: 'none',
        resize: 'none',
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
