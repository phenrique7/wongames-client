import { useId } from "react";

export function Logo() {
  const pathId = useId();

  return (
    <svg viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.0547602 15.2273L0.0192849 35.8723C0.0110436 40.6683 5.35471 43.5351 9.34604 40.8758L29.9416 27.1541L50.4899 40.9466C54.4721 43.6195 59.8255 40.7711 59.8338 35.9751L59.8681 15.9779C59.8817 8.09629 52.3194 2.41252 44.7523 4.61697L43.8791 4.87137C34.2791 7.66806 24.0679 7.5738 14.5211 4.60036C7.35072 2.36704 0.0676653 7.71714 0.0547602 15.2273Z"
        fill={`url(#${pathId})`}
      ></path>
      <path
        d="M30.1635 27.1596L24.13 22.8676C23.7654 22.6082 23.2697 22.9216 23.3478 23.3622L24.6409 30.6596L30.1635 27.1596Z"
        fill="#110F28"
        fillOpacity="0.15"
      ></path>
      <path
        d="M7.59186 7.10277C2.48169 9.8576 3.07342 12.1027 3.07343 14.6027"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M57.2743 26.1031L57.2743 27.1031"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M3.05249 18.1027V20.1027"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M57.2744 30.1031L57.2744 35.1031"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.0526 15.1027L13.0527 21.1027"
        stroke="#0A0D27"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M10.0403 18.1027L16.0649 18.1028"
        stroke="#0A0D27"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <ellipse
        cx="1.50616"
        cy="1.5"
        rx="1.50616"
        ry="1.5"
        transform="matrix(1 7.0266e-06 7.05545e-06 1 43.2168 12.1597)"
        fill="#0A0D27"
      ></ellipse>
      <ellipse
        cx="1.50616"
        cy="1.5"
        rx="1.50616"
        ry="1.5"
        transform="matrix(1 7.0266e-06 7.05545e-06 1 48.2374 16.1031)"
        fill="#0A0D27"
      ></ellipse>
      <ellipse
        cx="1.50616"
        cy="1.5"
        rx="1.50616"
        ry="1.5"
        transform="matrix(1 7.0266e-06 7.05545e-06 1 43.2169 20.103)"
        fill="#0A0D27"
      ></ellipse>
      <ellipse
        cx="1.50616"
        cy="1.5"
        rx="1.50616"
        ry="1.5"
        transform="matrix(1 7.0266e-06 7.05545e-06 1 38.1963 16.103)"
        fill="#0A0D27"
      ></ellipse>
      <defs>
        <linearGradient
          id={pathId}
          x1="29.1592"
          y1="-7.39708"
          x2="30.1547"
          y2="49.1031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5F5F"></stop>
          <stop offset="1" stopColor="#F062C0"></stop>
          <stop offset="1" stopColor="#F23131"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
