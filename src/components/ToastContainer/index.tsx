import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/ToastContext';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: {right: '-120%'},
      enter: {right: '0%'},
      leave: {right: '-120%'}
    },
  );

  return(
    <Container>
      {messagesWithTransition.map(({key,item,props}) => (
        <Toast 
          key={key} 
          message={item}
          style={props}
        />
      ))}
    </Container>
  )
}

export default ToastContainer;