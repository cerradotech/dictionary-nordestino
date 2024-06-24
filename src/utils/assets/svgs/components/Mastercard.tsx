import { FC } from 'react';

const Mastercard: FC<SvgProps> = ({ className, fill = '#D7D5CB' }) => (
  <svg
    className={className}
    viewBox="0 0 34 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.7232 24.5371C31.7232 24.0134 31.4196 23.6394 30.8884 23.6394C30.3571 23.6394 30.0536 24.0134 30.0536 24.5371C30.0536 24.9859 30.3571 25.36 30.8884 25.36C31.4196 25.36 31.7232 25.0607 31.7232 24.5371ZM8.19643 23.6394C7.66518 23.6394 7.28571 24.0134 7.28571 24.5371C7.28571 24.9859 7.66518 25.36 8.19643 25.36C8.65179 25.36 9.03125 25.0607 9.03125 24.5371C8.95536 24.0134 8.65179 23.6394 8.19643 23.6394ZM17.0759 23.6394C16.6964 23.6394 16.3929 23.8638 16.3929 24.2379H17.8348C17.7589 23.8638 17.4554 23.6394 17.0759 23.6394ZM25.2723 23.6394C24.7411 23.6394 24.4375 24.0134 24.4375 24.5371C24.4375 24.9859 24.7411 25.36 25.2723 25.36C25.8036 25.36 26.1071 25.0607 26.1071 24.5371C26.1071 24.0134 25.8036 23.6394 25.2723 23.6394ZM0 10.3235C0 4.63811 4.70536 0 10.4732 0C12.5223 0 14.5714 0.598466 16.317 1.72059C10.7768 6.13427 10.7768 14.5128 16.317 18.9265C14.5714 20.0486 12.5223 20.7219 10.4732 20.7219C4.70536 20.7219 0 16.0838 0 10.3235ZM17 18.4776C11.6116 14.3632 11.6116 6.3587 17 2.16944C22.3125 6.3587 22.3125 14.3632 17 18.4776ZM6.14732 24.163V25.8836H5.54018C5.54018 24.3875 5.69196 23.6394 4.93304 23.6394C4.09821 23.6394 4.25 24.5371 4.25 25.8836H3.64286C3.64286 24.3875 3.79464 23.6394 3.03571 23.6394C2.125 23.6394 2.35268 24.4623 2.35268 25.8836H1.74554V23.1157H2.35268V23.4898C2.58036 23.1905 2.88393 23.0409 3.1875 23.0409C3.56696 23.0409 3.87054 23.2653 4.09821 23.5646C4.32589 23.1905 4.70536 23.0409 5.08482 23.0409C5.76786 23.1157 6.14732 23.4898 6.14732 24.163ZM9.5625 23.1157V25.8836H8.95536V25.5844C8.80357 25.8088 8.5 25.9584 8.12054 25.9584C7.28571 25.9584 6.67857 25.36 6.67857 24.5371C6.67857 23.7142 7.28571 23.0409 8.12054 23.0409C8.5 23.0409 8.80357 23.2653 8.95536 23.4898V23.1157H9.5625ZM12.6741 25.0607C12.6741 26.1081 11.0045 26.1829 10.1696 25.6592L10.4732 25.1356C11.0045 25.5096 11.9911 25.5844 11.9911 25.0607C11.9911 24.6119 10.2455 25.0607 10.2455 23.9386C10.2455 22.8913 11.8393 22.8913 12.5982 23.3402L12.2946 23.8638C11.8393 23.5646 10.9286 23.4898 10.9286 23.9386C10.9286 24.4623 12.6741 23.9386 12.6741 25.0607ZM15.3304 25.734C14.9509 26.0333 13.5848 26.2577 13.5848 24.9111V23.7142H13.0536V23.1157H13.5848V22.2928H14.2679V23.1157H15.2545V23.7142H14.2679V24.9111C14.2679 25.5844 14.875 25.4348 15.1786 25.2852L15.3304 25.734ZM16.317 24.7615C16.5446 25.5844 17.3795 25.5844 17.9866 25.1356L18.2902 25.5844C17.4554 26.3325 15.7098 26.0333 15.7098 24.5371C15.7098 23.6394 16.317 23.0409 17.0759 23.0409C17.8348 23.0409 18.442 23.5646 18.442 24.7615H16.317ZM20.7946 23.1157L20.6429 23.7142C20.4152 23.5646 19.6562 23.4898 19.6562 24.3127V25.8836H19.0491V23.1157H19.6562V23.4898C19.9598 23.0409 20.4911 22.9661 20.7946 23.1157ZM21.6295 24.5371C21.6295 25.36 22.5402 25.6592 23.2232 25.1356L23.5268 25.6592C22.692 26.3325 21.0223 26.0333 21.0223 24.5371C21.0223 23.1157 22.6161 22.7417 23.5268 23.415L23.2232 23.8638C22.5402 23.415 21.6295 23.6394 21.6295 24.5371ZM26.7143 23.1157V25.8836H26.1071V25.5844C25.5 26.3325 23.8304 25.9584 23.8304 24.5371C23.8304 23.1157 25.4241 22.6669 26.1071 23.4898V23.1157H26.7143ZM29.2188 23.1157L29.067 23.7142C28.7634 23.5646 28.0804 23.4898 28.0804 24.3127V25.8836H27.4732V23.1157H28.0804V23.4898C28.3839 22.9661 29.067 23.0409 29.2188 23.1157ZM32.3304 22.0684V25.8836H31.7232V25.5844C31.1161 26.3325 29.4464 25.9584 29.4464 24.5371C29.4464 23.1157 31.1161 22.6669 31.7232 23.4898V22.0684H32.3304ZM34 10.3235C34 16.0838 29.2188 20.7219 23.4509 20.6471C21.4018 20.6471 19.3527 20.0486 17.683 18.9265C23.2232 14.5128 23.1473 6.13427 17.683 1.72059C19.3527 0.598466 21.4018 0 23.4509 0C29.2188 0 34 4.63811 34 10.3235Z"
      fill={fill}
    />
  </svg>
);

export default Mastercard;
