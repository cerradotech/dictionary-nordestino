import { Content, Message, Title, ToastContainer } from './toastmessage.styles';

const ToastMessage = ({ title, message, typeToast }: ToastMessageProps) => {
  return (
    <Content>
      <Title type={typeToast}>{title}</Title>
      <Message>{message}</Message>
    </Content>
  );
};

export { ToastContainer };
export default ToastMessage;
