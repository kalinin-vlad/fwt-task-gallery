interface ArrowIconProps {
  className?: string;
}

export function ArrowLeftIcon({ className }: ArrowIconProps) {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.68774 0.283494C7.51288 0.0697714 7.19787 0.0382703 6.98415 0.213134L0.384147 5.61313C0.268079 5.7081 0.200766 5.85015 0.200766 6.00011C0.200766 6.15008 0.268079 6.29213 0.384147 6.38709L6.98415 11.7871C7.19787 11.962 7.51288 11.9305 7.68774 11.7167C7.86261 11.503 7.83111 11.188 7.61739 11.0131L1.49036 6.00011L7.61739 0.987091C7.83111 0.812228 7.86261 0.497216 7.68774 0.283494Z"
        fill="var(--pagination-arrows-color)"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: ArrowIconProps) {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.312255 0.283494C0.487119 0.0697714 0.80213 0.0382703 1.01585 0.213134L7.61585 5.61313C7.73192 5.7081 7.79923 5.85015 7.79923 6.00011C7.79923 6.15008 7.73192 6.29213 7.61585 6.38709L1.01585 11.7871C0.80213 11.962 0.487119 11.9305 0.312255 11.7167C0.137391 11.503 0.168893 11.188 0.382615 11.0131L6.50964 6.00011L0.382615 0.987091C0.168892 0.812228 0.137391 0.497216 0.312255 0.283494Z"
        fill="var(--pagination-arrows-color)"
      />
    </svg>
  );
}
